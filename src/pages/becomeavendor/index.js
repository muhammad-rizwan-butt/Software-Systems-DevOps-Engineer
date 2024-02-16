import "@fortawesome/fontawesome-svg-core/styles.css";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { BiCloudUpload } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Axios } from "../../axios/axios";
import { Layout } from "../../components/layout/layout";
import { VendorRights } from "../../data/vendorRights";
import { updateUser } from "../../store/reducers/auth";
import styles from "../../styles/vendor.module.scss";

const initialValues = {
  cnic: {
    cnicNumber: "",
    frontImage: "",
    backImage: "",
  },
  electricityBillImage: "",
  fullAddress: "",
  rights: [],
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    cnic: Yup.object({
      cnicNumber: Yup.number().required("CNIC's Number  is required"),
      frontImage: Yup.string().required("Front's Image is required"),
      backImage: Yup.string().required("Back's Image is required"),
    }),
    electricityBillImage: Yup.string().required(
      "Electricity Bill's Image is required"
    ),
    fullAddress: Yup.string().required("Full Address is required"),
    rights: Yup.array().min(1, "Select at least one option"),
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      const {
        cnic: { frontImage, backImage },
        electricityBillImage,
      } = values;
      const formData = new FormData();
      formData.append("frontImage", frontImage);
      formData.append("backImage", backImage);
      formData.append("electricityBillImage", electricityBillImage);

      let { data } = await Axios.post("/user/upload-images", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        let updatedValues = {
          ...values,
          cnic: {
            cnicNumber: values?.cnic?.cnicNumber,
            frontImage: data[0]?.filename,
            backImage: data[1]?.filename,
          },
          electricityBillImage: data[2]?.filename,
        };
        toast
          .promise(
            Axios.patch("/user/update-to-vendor", updatedValues, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }),
            { success: "User has successfully become a vendor" }
          )
          .then((res) => {
            dispatch(updateUser(res?.data));
            setIsLoading(false);
            router.push("/");
          })
          .catch((error) => console.log(error));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function handleRightsCheckboxes(value) {
    const { rights } = formik.values;

    let isChecked = rights.includes(value);

    if (isChecked) {
      let remainRights = rights.filter((right) => right !== value);
      formik.setFieldValue("rights", remainRights);
    } else {
      formik.setFieldValue("rights", [...rights, value]);
    }
  }

  return (
    <>
      <div className={styles.main}>
        <section className={styles.signup}>
          <div className="container">
            <div className={styles.signup_content}>
              <div id="signup-form" className={styles.signup_form}>
                <h2 className={styles.form_title}>Become a Vendor</h2>
                <div
                  className={`grid grid-cols-xl-2 grid-cols-lg-2 grid-cols-md-1 ${styles.grid__form}`}
                >
                  <div className="border-r-1">
                    <div className={styles.form_group}>
                      <div className="form-floating mb-1">
                        <input
                          type="number"
                          className={`form-control ${
                            formik.touched.cnic?.cnicNumber &&
                            formik.errors.cnic?.cnicNumber &&
                            "is-invalid"
                          }`}
                          id="floatingInput"
                          {...formik.getFieldProps("cnic.cnicNumber")}
                          placeholder="Tour Title"
                        />
                        <label htmlFor="floatingInput">Your CNIC Number</label>
                      </div>
                      {formik.touched.cnic?.cnicNumber &&
                        formik.errors.cnic?.cnicNumber && (
                          <span className={`text-danger font-12`}>
                            {formik.errors.cnic?.cnicNumber}
                          </span>
                        )}
                    </div>

                    <div className="grid grid-cols-xl-1 grid-cols-lg-1 grid-cols-md-1 gap-2">
                      <div className={styles.form_group}>
                        {formik?.values?.cnic?.frontImage ? (
                          <div className={styles.form}>
                            <label
                              className={styles.form__container}
                              id="upload-container"
                            >
                              <Image
                                src={URL.createObjectURL(
                                  formik?.values?.cnic?.frontImage
                                )}
                                alt="front image"
                                width={100}
                                height={240}
                                className={styles.cnic__image}
                              />
                              <button
                                className={`position-absolute ${styles.close}`}
                                onClick={() =>
                                  formik.setFieldValue("cnic.frontImage", "")
                                }
                              >
                                <IoMdCloseCircle fontSize="25" color="red" />
                              </button>
                            </label>
                          </div>
                        ) : (
                          <>
                            <div className={styles.form}>
                              <label
                                className={styles.form__container}
                                id="upload-container"
                              >
                                <BiCloudUpload fontSize="50" />
                                <p className="mx-3 text-center">
                                  Choose CNIC Front Image
                                </p>
                                <input
                                  id="upload-files"
                                  className={styles.form__file}
                                  type="file"
                                  name="featureImage"
                                  multiple="false"
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      "cnic.frontImage",
                                      e.target.files[0]
                                    );
                                  }}
                                />
                              </label>
                            </div>
                            {formik.touched.cnic?.frontImage &&
                              formik.errors.cnic?.frontImage && (
                                <div className="text-danger font-12">
                                  {formik.errors.cnic?.frontImage}
                                </div>
                              )}
                          </>
                        )}
                      </div>
                      <div className={styles.form_group}>
                        {formik?.values?.cnic?.backImage ? (
                          <div className={styles.form}>
                            <label
                              className={styles.form__container}
                              id="upload-container"
                            >
                              <Image
                                src={URL.createObjectURL(
                                  formik?.values?.cnic?.backImage
                                )}
                                alt="front image"
                                width={100}
                                height={240}
                                className={styles.cnic__image}
                              />
                              <button
                                className={`position-absolute ${styles.close}`}
                                onClick={() =>
                                  formik.setFieldValue("cnic.backImage", "")
                                }
                              >
                                <IoMdCloseCircle fontSize="25" color="red" />
                              </button>
                            </label>
                          </div>
                        ) : (
                          <>
                            <div className={styles.form}>
                              <label
                                className={styles.form__container}
                                id="upload-container"
                              >
                                <BiCloudUpload fontSize="50" />
                                <p className="mx-3 text-center">
                                  Choose CNIC Back Image
                                </p>
                                <input
                                  id="upload-files"
                                  className={styles.form__file}
                                  type="file"
                                  name="featureImage"
                                  multiple="false"
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      "cnic.backImage",
                                      e.target.files[0]
                                    );
                                  }}
                                />
                              </label>
                            </div>
                            {formik.touched.cnic?.backImage &&
                              formik.errors.cnic?.backImage && (
                                <div className="text-danger font-12">
                                  {formik.errors.cnic?.backImage}
                                </div>
                              )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.form_group}>
                      <div className="form-floating mb-1">
                        <input
                          type="text"
                          className={`form-control ${
                            formik.touched.fullAddress &&
                            formik.errors.fullAddress &&
                            "is-invalid"
                          }`}
                          id="floatingInput"
                          {...formik.getFieldProps("fullAddress")}
                          placeholder="Tour Title"
                        />
                        <label htmlFor="floatingInput">Full Address</label>
                      </div>
                      {formik.touched.fullAddress &&
                        formik.errors.fullAddress && (
                          <span className={`text-danger font-12`}>
                            {formik.errors.fullAddress}
                          </span>
                        )}
                    </div>
                    <div className={styles.form_group}>
                      {formik?.values?.electricityBillImage ? (
                        <div className={`position-relative ${styles.form}`}>
                          <label
                            className={` ${styles.form__container} ${styles.form__billcontainer}`}
                            id="upload-container"
                          >
                            <Image
                              src={URL.createObjectURL(
                                formik?.values?.electricityBillImage
                              )}
                              alt="front image"
                              width={100}
                              height={450}
                              className={styles.cnic__image}
                            />
                            <button
                              className={`position-absolute ${styles.close}`}
                              onClick={() =>
                                formik.setFieldValue("electricityBillImage", "")
                              }
                            >
                              <IoMdCloseCircle fontSize="25" color="red" />
                            </button>
                          </label>
                        </div>
                      ) : (
                        <>
                          <div className={styles.form}>
                            <label
                              className={`${styles.form__container} ${styles.form__billcontainer}`}
                              id="upload-container"
                            >
                              <BiCloudUpload fontSize="50" />
                              <p className="mx-3 text-center">{`Choose Bill's Image`}</p>
                              <input
                                id="upload-files"
                                className={styles.form__file}
                                type="file"
                                name="featureImage"
                                multiple="false"
                                onChange={(e) => {
                                  formik.setFieldValue(
                                    "electricityBillImage",
                                    e.target.files[0]
                                  );
                                }}
                              />
                            </label>
                          </div>
                          {formik.touched.electricityBillImage &&
                            formik.errors.electricityBillImage && (
                              <div className="text-danger font-12">
                                {formik.errors.electricityBillImage}
                              </div>
                            )}
                        </>
                      )}
                    </div>
                    <h4
                      className={styles.rights_box}
                    >{`Please Select your's Businesses`}</h4>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {VendorRights?.map((right, i) => {
                        return (
                          <div class="form-check" key={i + right}>
                            <input
                              class={`form-check-input ${styles.custom__input}`}
                              type="checkbox"
                              id="flexCheckDefault"
                              name={right}
                              checked={formik.values.rights.includes(right)}
                              onChange={() => {
                                handleRightsCheckboxes(right);
                              }}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {right}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                    {formik.touched.rights && formik.errors.rights && (
                      <div className="text-danger font-12">
                        {formik.errors.rights}
                      </div>
                    )}
                    <div className={styles.form_group}>
                      {isLoading ? (
                        <button className={styles.form_submit}>
                          <Spinner animation="border" />
                        </button>
                      ) : (
                        <button
                          name="submit"
                          type="submit"
                          onClick={formik.submitForm}
                          className={styles.form_submit}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
