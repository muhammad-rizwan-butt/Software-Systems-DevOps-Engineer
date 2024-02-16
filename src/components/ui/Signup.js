import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Axios } from "../../axios/axios";
import { signUp } from "../../store/reducers/auth";
import styles from "../../styles/register/register.module.scss";
import { TextField } from "./TextField";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  terms: false,
};
export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Phone number must be 10 number.")
      .max(10, "Phone number must be 10 number.")
      .required("Phone Number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character"
      ),
    terms: Yup.bool()
      .oneOf([true], "Please accept.")
      .required("Please accept."),
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    toast
      .promise(Axios.post("user/register", values), {
        success: "You have successfully register",
        error: "Email has already exist.",
      })
      .then((res) => {
        dispatch(signUp({ user: res.data.user, token: res.data?.token }));
        setIsLoading(false);
        router.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div>
      {" "}
      <div className={styles.form_group}>
        <TextField
          placeholder="Your Name"
          containerlassName={`heading ${styles.form_input}`}
          error={formik.touched.name && formik.errors.name}
          {...formik.getFieldProps("name")}
        />
      </div>
      <div className={styles.form_group}>
        <TextField
          placeholder="Your Email"
          error={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
          className={`${styles.form_input} `}
        />
      </div>
      <div className={styles.form_group}>
        <TextField
          placeholder="Your Phone Number"
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          {...formik.getFieldProps("phoneNumber")}
          className={`${styles.form_input} `}
          type="number"
        />
      </div>
      <div className={styles.form_group}>
        <TextField
          placeholder="Password"
          error={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps("password")}
          className={`${styles.form_input} `}
          type="password"
        />
        <span
          toggle="#password"
          className="zmdi zmdi-eye field-icon toggle-password"
        ></span>
      </div>
      <div className={styles.form_group + " " + styles.terms__group}>
        <input
          type="checkbox"
          name="agree-term"
          id="agree-term"
          {...formik.getFieldProps("terms")}
          className={`${styles.agree_term} `}
        />
        <label for="agree-term" className={styles.labelagree_term}>
          <span>
            <span></span>
          </span>
          I agree all statements in
          <Link
            href="/terms-conditions"
            className={`${styles.term_service} text-underline`}
          >
            {" "}
            Terms of service
          </Link>
        </label>
        {formik.touched.terms && formik.errors.terms && (
          <p className="text-danger my-0 font_12">{formik.errors.terms}</p>
        )}
      </div>
      <div className={styles.form_group}>
        {isLoading ? (
          <button className={styles.form_submit}>
            <Spinner animation="border" />
          </button>
        ) : (
          <button
            type="submit"
            onClick={formik.submitForm}
            className={styles.form_submit}
          >
            Signup
          </button>
        )}
      </div>
    </div>
  );
};
