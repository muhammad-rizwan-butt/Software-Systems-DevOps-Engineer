import React from "react";
import { TextField } from "../../components/ui/TextField";
// import { useFormik } from "formik";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import bg from "../../../public/imgs/contact_us.webp";
import { Layout } from "../../components/layout/layout";
import { Button } from "../../components/ui/Button";
import { images } from "../../lib/images";
import styles from "../../styles/contactus/contactus.module.scss";

const initialValues = {
  firstName: "",
  email: "",
  phone: "",
  city: "",
};

const Contactus = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),

    phone: Yup.string().required("phone."),
    city: Yup.string().required("city"),
  });
  const onSubmit = (values) => {
    let { firstName, email, phone, city } = values;
    // const config = {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <section className={` ${styles.contactus_section}`}>
        <Image src={bg} alt="" className={styles.contactus__image} />
        {/* <h1 className="heading text-center my-2">Contact us</h1> */}

        <div className={styles.contact__form_box}>
          <div className="container">
            <div
              className={`${styles.contact_form} box-shadow  m-inline-auto my-5 `}
            >
              <div className="grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-1   border-radius-4">
                <div
                  className={`col-span-2 grid grid-cols-2  gap-2 px-4   py-4`}
                >
                  <h6 className={` py-2 col-span-2 ${styles.contact_heading}`}>
                    Send Us Message
                  </h6>
                  <TextField
                    placeholder="First Name"
                    error={formik.touched.firstName && formik.errors.firstName}
                    {...formik.getFieldProps("firstName")}
                    containerclassName="heading"
                  />
                  <TextField
                    placeholder="Email"
                    error={formik.touched.email && formik.errors.email}
                    {...formik.getFieldProps("email")}
                    containerclassName=""
                  />
                  <TextField
                    type="number"
                    placeholder="Phone"
                    error={formik.touched.phone && formik.errors.phone}
                    {...formik.getFieldProps("phone")}
                    containerclassName=""
                  />
                  <TextField
                    placeholder="City"
                    error={formik.touched.city && formik.errors.city}
                    {...formik.getFieldProps("city")}
                    containerclassName=""
                  />
                  <textarea
                    className={`${styles.text_area} col-span-2`}
                    rows={"6"}
                    cols="30"
                    placeholder="Write your message"
                  ></textarea>
                  <Button
                    size={"medium"}
                    variant={"primary"}
                    className={`${styles.submit} mt-3`}
                    onClick={formik.submitForm}
                  >
                    Submit
                    <i className="fa fa-paper-plane"></i>
                  </Button>{" "}
                </div>
                <div className={`${styles.contact_info_container}`}>
                  <h6 className={`${styles.contact_heading} mb-2 py-2`}>
                    Contact Information
                  </h6>
                  <div
                    className={`${styles.contact_detail} mb-4 d-flex align-item-center gap-1 py-3 `}
                  >
                    <Image src={images["phone_line.svg"]} alt="" />
                    <p className={`${styles.detail}`}>012301231031</p>
                  </div>

                  <div
                    className={`${styles.contact_detail} my-4 gap-1 d-flex align-item-center  py-3`}
                  >
                    <Image src={images["mail_line.svg"]} alt="" />
                    <p className={`${styles.detail}`}>info@siyaahat.pk</p>
                  </div>
                  <div
                    className={`${styles.contact_detail} my-4   d-flex align-item-center gap-1 py-3`}
                  >
                    <Image src={images["location_line.svg"]} alt="" />
                    <p className={`${styles.detail}`}>
                      2855 Simpson Square Coldwater, OK 67029
                    </p>
                  </div>

                  <div className="d-flex align-item-center justify-content-center gap-2 mt-5">
                    <Link
                      href={""}
                      className={`  d-flex ${styles.social_icon}`}
                    >
                      <Image src={images["facebook_fill.svg"]} alt="" />
                    </Link>
                    <Link
                      href={""}
                      className={`  d-flex ${styles.social_icon}`}
                    >
                      <Image src={images["ins_fill.svg"]} alt="" />
                    </Link>{" "}
                    <Link
                      href={""}
                      className={`  d-flex ${styles.social_icon}`}
                    >
                      <Image src={images["twitter_fill.svg"]} alt="" />
                    </Link>
                    <Link
                      href={""}
                      className={`  d-flex ${styles.social_icon}`}
                    >
                      <Image src={images["linkedin_fill.svg"]} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------location---------------- */}
      <section className="">
        <div className="container">
          <div className=" ">
            <h1 className={`text-center ${styles.contact_heading}`}>
              Whats Nearby
            </h1>
            <div className="content-container gap-2 my-3">
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13614.6835284454!2d74.41612800000001!3d31.45072640000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1682586991736!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Contactus.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contactus;
