import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { default as React, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { Axios } from "../../axios/axios";
import { TextField } from "../../components/ui/TextField";
import { images } from "../../lib/images";
import { logIn } from "../../store/reducers/auth";
import styles from "../../styles/login/login.module.scss";

const initialValues = {
  email: "",
  password: "",
};

export const Login = ({ show = false, handleClose = () => {} }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    setIsLoading(true);
    toast
      .promise(Axios.post("user/login", values), {
        success: "User has successfully login",
        error: "Email or Password is incorrect.",
      })
      .then((response) => {
        const { user, token } = response.data;
        dispatch(logIn({ user, token }));

        if (show) {
          handleClose();
        } else {
          router.back();
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <ToastContainer autoClose={2000} closeOnClick />
      <div className={`${styles.wrap_login100} `}>
        <div className={`${styles.login100_form} `}>
          <div className="d-flex align-items-center gap-2 justify-content-center mb-lg-5 mb-3">
            {/* <button className={`${styles.btn_face} `}>
              <Image alt="" src={images["facebook_line.svg"]} />
              <span className="d-md-inline d-none">Facebook</span>
            </button>
            <button className={`${styles.btn_twitt} `}>
              <Image alt="" src={images["twitter_fill.svg"]} />
              <span className="d-md-inline d-none">Twitter</span>
            </button>

            <button className={`${styles.btn_google} `}>
              <Image alt="" src={images["icon-google.png"]} />
              <span className="d-md-inline d-none">Google</span>
            </button> */}
            <Image
              src={images["SiyaahatLogo.png"]}
              alt=""
              className={styles.login___logo}
            />
          </div>
          <span className={`${styles.login100form_title} `}>Sign In</span>

          <div className={styles.first}>
            <span className={styles.txt1}>Email</span>
          </div>
          <div
            className={`${styles.wrap_input100} ${styles.validate_input}`}
            data-validate="Username is required"
          >
            <TextField
              error={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps("email")}
              className={` ${styles.input100} `}
              placeholder="email@gmail.com"
            />

            <span className={styles.focus_input100}></span>
          </div>

          <div className={styles.pass}>
            <span className={styles.txt1}>Password</span>
          </div>
          <div
            className={`${styles.wrap_input100} ${styles.validate_input}`}
            data-validate="Password is required"
          >
            <TextField
              error={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
              className={` ${styles.input100} `}
              placeholder="******"
              type="password"
            />

            <span className={styles.focus_input100}></span>
          </div>
          <span className={styles.focus_input100}></span>
        </div>

        <div className={`${styles.containerlogin100form_btn} `}>
          {isLoading ? (
            <button className={styles.login100form_btn}>
              <Spinner />
            </button>
          ) : (
            <button
              name="submit"
              onClick={formik.submitForm}
              className={styles.login100form_btn}
            >
              Sign In
            </button>
          )}
        </div>

        <div className={`w-full text-center pt-5`}>
          <span className={styles.txt1}>Not a member?</span>

          <Link
            href="/register"
            className={` ${styles.txt2} ${styles.bo1} mx-2 text-bold`}
          >
            Sign up now
          </Link>
        </div>
      </div>
    </>
  );
};
