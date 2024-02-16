import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Axios, baseURL } from "../../../axios/axios";
import Editor from "../../../components/ui/Editor";
import style from "../../../styles/tour.module.scss";
import Layout from "../layout";

const initialValues = {
  title: "",
  description: "",
  totalDays: "",
  tourType: "",
  featureImage: "",
  images: [],
  location: {
    departure: "",
    destination: "",
  },
  departureDate: "",
  completionDate: "",
  price: "",
  discountPrice: "",
  details: {
    around: "",

    overview: "",
  },
  itinerary: [
    {
      title: "",
      location: "",
      time: "",
      note: "",
      details: "",
      image: "",
    },
  ],
  inclusionAndexclusion: "",
  additionalInfo: "",
  travelTips: "",
  policy: "",
};

const Tour = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const [tour, setTour] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      (async function () {
        let { data } = await Axios.get(
          `tour/single-tour/${router?.query?._id}`
        );
        setTour(data);
        formik.setValues({ ...data });
      })();
    }
  }, [router]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    images: Yup.array().min(1, "Please select at least one image"),
    description: Yup.string().required("Description is required"),
    totalDays: Yup.number().required("Total Days are required"),
    featureImage: Yup.mixed().required("Please select at least one image"),
    tourType: Yup.string().required("Tour's Type is required"),
    location: Yup.object({
      departure: Yup.string().required("Departure's Location is required"),
      destination: Yup.string().required("Destination's Location is required"),
    }),
    departureDate: Yup.string().required("Departure's Date is required"),
    completionDate: Yup.string().required("Completion's Date is required"),
    price: Yup.number().required("Price is required"),
    discountPrice: Yup.number().required("Discounted Price is required"),

    details: Yup.object({
      around: Yup.string().required("Around is required"),
      overview: Yup.string().required("Overview is required"),
    }),
    itinerary: Yup.array().of(
      Yup.object({
        title: Yup.string().required("Title is required"),
        image: Yup.mixed().required("Please select at least one image"),
        location: Yup.string().required("Location is required"),
        time: Yup.string().required("Time is required"),
        details: Yup.string().required("Details are required"),
      })
    ),
  });
  const onSubmit = async (values) => {
    setIsLoading(true);

    let formData = new FormData();

    if (typeof values?.images[0] !== "string") {
      values?.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
    }

    values.itinerary.forEach((itinerary, i) => {
      if (typeof itinerary?.image != "string") {
        formData.append(`itinerary[${i}][image]`, itinerary?.image);
      }
    });
    if (typeof values?.featureImage !== "string") {
      formData.append("featureImage", values?.featureImage);
    }
    const { data } = await Axios.post("tour/upload-images", formData, {
      headers: {
        "Content-type": ["multipart/form-data"],
        Accept: "application/json",
        type: "formData",
      },
    });
    if (data) {
      const { featureImage, images, itinerraryImages } = data;
      const latestData = {
        ...values,
        ...(featureImage
          ? { featureImage }
          : { featureImage: values.featureImage }),
        ...(images.length > 0 ? { images } : { images: values?.images }),
        itinerary: values?.itinerary?.map(
          ({ title, note, details, time, image, location }, index) => {
            if (typeof image != "string") {
              let [newImage] = itinerraryImages.splice(0, 1);
              return {
                title,
                note,
                details,
                time,
                location,
                image: newImage,
              };
            } else {
              return {
                title,
                note,
                details,
                time,
                image,
                location,
              };
            }
          }
        ),
      };

      toast
        .promise(
          Axios.patch(`tour/edit-tour/${tour?._id}`, latestData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          { success: "You have successfully updated this tour", error: "Error" }
        )
        .then((res) => setIsLoading(false))
        .catch((error) => console.log(error));
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    enableReinitialize: true,
  });
  return (
    <div className={`my-3 ${style.vendor__tour_container}`}>
      <div className="container-fluid">
        <h1 className="mb-4">Edit Tour</h1>
        <div className="row g-3">
          <div className="col-md-6 col-12">
            <h4 className="mb-2">Select Feature Image</h4>
            <div className={style.form}>
              <label className={style.form__container} id="upload-container">
                {formik?.values?.featureImage ? (
                  <div className={style.images__container}>
                    {" "}
                    <Image
                      src={
                        typeof formik?.values?.featureImage == "string"
                          ? `${baseURL}${formik?.values?.featureImage}`
                          : URL.createObjectURL(formik?.values?.featureImage)
                      }
                      alt="front image"
                      width={100}
                      height={240}
                      className={`${style.images__box} w-100 h-100`}
                    />
                    <button
                      className={`position-absolute ${style.close}`}
                      onClick={() => formik.setFieldValue("featureImage", "")}
                    >
                      <IoMdCloseCircle fontSize="25" color="red" />
                    </button>
                  </div>
                ) : (
                  <>
                    <BsFillCloudUploadFill fontSize="50" />
                    <p>Choose or Drag & Drop Image</p>
                    <input
                      className={style.form__file}
                      id="upload-files"
                      type="file"
                      name="featureImage"
                      multiple="false"
                      onChange={(e) => {
                        formik.setFieldValue("featureImage", e.target.files[0]);
                      }}
                    />
                  </>
                )}
              </label>
            </div>
            {formik.touched.featureImage && formik.errors.featureImage && (
              <div className="text-danger">{formik.errors.featureImage}</div>
            )}
          </div>

          <div className="col-md-6 col-12">
            <h4 className="mb-2">{`Select Tour's Images`}</h4>
            <div className={style.form}>
              <label className={style.form__container} id="upload-container">
                {formik?.values?.images.length > 0 ? (
                  <div className={style.images___containerBox}>
                    {formik?.values?.images?.map((image, i) => {
                      return (
                        <div className={style.images__container} key={i}>
                          {" "}
                          <Image
                            src={
                              typeof image == "string"
                                ? `${baseURL}${image}`
                                : URL.createObjectURL(image)
                            }
                            alt="front image"
                            width={100}
                            height={100}
                            className={`${style.images__box} w-100 h-100`}
                          />
                          <button
                            className={`position-absolute ${style.close}`}
                            onClick={() => {
                              let filteredImages =
                                formik?.values?.images?.filter(
                                  (item) => item !== image
                                );
                              formik.setFieldValue("images", filteredImages);
                            }}
                          >
                            <IoMdCloseCircle fontSize="20" color="red" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <BsFillCloudUploadFill fontSize="50" />
                    <p>Choose or Drag & Drop Images</p>
                    <input
                      className={style.form__file}
                      id="upload-files"
                      type="file"
                      multiple="true"
                      name="images"
                      onChange={(e) => {
                        let selectedImages = Array.from(e.target.files);

                        formik.setFieldValue("images", selectedImages);
                      }}
                    />
                  </>
                )}
              </label>
            </div>
            {formik.touched.images && formik.errors.images && (
              <div className="text-danger">{formik.errors.images}</div>
            )}
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.title &&
                  formik?.errors?.title &&
                  "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("title")}
                placeholder="Tour Title"
              />
              <label htmlFor="floatingInput">Title</label>
            </div>
            {formik?.touched?.title && formik?.errors?.title && (
              <div className="invalid_feedback">{formik?.errors?.title}</div>
            )}
          </div>

          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.totalDays &&
                  formik?.errors?.totalDays &&
                  "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("totalDays")}
                placeholder="1"
                min={1}
              />
              <label htmlFor="floatingInput">Total Days</label>
            </div>
            {formik?.touched?.totalDays && formik?.errors?.totalDays && (
              <div className="invalid_feedback">
                {formik?.errors?.totalDays}
              </div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <select
                className={`form-select ${
                  formik?.touched?.tourType &&
                  formik?.errors?.tourType &&
                  "is-invalid"
                }`}
                id="floatingSelect"
                aria-label="Floating label select example"
                {...formik.getFieldProps("tourType")}
              >
                <option value="">Please select tour type</option>
                <option value="air">By Air</option>
                <option value="road">By Road</option>
              </select>
              <label htmlFor="floatingPassword">Tour Type</label>
            </div>
            {formik?.touched?.tourType && formik?.errors?.tourType && (
              <div className="invalid_feedback">{formik?.errors?.tourType}</div>
            )}
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <textarea
                type="text"
                className={`form-control h-100 ${
                  formik?.touched?.description &&
                  formik?.errors?.description &&
                  "is-invalid"
                }`}
                id="floatingPassword"
                {...formik.getFieldProps("description")}
                placeholder="Description"
                rows="4"
              />
              <label htmlFor="floatingPassword">Description</label>
            </div>
            {formik?.touched?.description && formik?.errors?.description && (
              <div className="invalid_feedback">
                {formik?.errors?.description}
              </div>
            )}
          </div>
          <div className=" col-12">
            <h4 className="">Location</h4>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.location?.departure &&
                  formik?.errors?.location?.departure &&
                  "is-invalid"
                }`}
                {...formik.getFieldProps("location.departure")}
                id="floatingInput"
                placeholder="Lahore"
              />
              <label htmlFor="floatingInput">Departure</label>
            </div>
            {formik?.touched?.location?.departure &&
              formik?.errors?.location?.departure && (
                <div className="invalid_feedback">
                  {formik?.errors?.location?.departure}
                </div>
              )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.location?.destination &&
                  formik?.errors?.location?.destination &&
                  "is-invalid"
                }`}
                id="floatingPassword"
                placeholder="Hunza"
                {...formik.getFieldProps("location.destination")}
              />
              <label htmlFor="floatingPassword">Destination</label>
            </div>
            {formik?.touched?.location?.destination &&
              formik?.errors?.location?.destination && (
                <div className="invalid_feedback">
                  {formik?.errors?.location?.destination}
                </div>
              )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="date"
                value={new Date(
                  formik?.values?.departureDate
                ).toLocaleDateString("en-CA")}
                onChange={(e) =>
                  formik.setFieldValue("departureDate", e.target.value)
                }
                className={`form-control ${
                  formik?.touched?.departureDate &&
                  formik?.errors?.departureDate &&
                  "is-invalid"
                }`}
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Departure Date</label>
            </div>
            {formik?.touched?.departureDate &&
              formik?.errors?.departureDate && (
                <div className="invalid_feedback">
                  {formik?.errors?.departureDate}
                </div>
              )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="date"
                className={`form-control ${
                  formik?.touched?.completionDate &&
                  formik?.errors?.completionDate &&
                  "is-invalid"
                }`}
                value={new Date(
                  formik?.values?.completionDate
                ).toLocaleDateString("en-CA")}
                onChange={(e) =>
                  formik.setFieldValue("completionDate", e.target.value)
                }
                id="floatingPassword"
              />
              <label htmlFor="floatingPassword">Completion Date</label>
            </div>
            {formik?.touched?.completionDate &&
              formik?.errors?.completionDate && (
                <div className="invalid_feedback">
                  {formik?.errors?.completionDate}
                </div>
              )}
          </div>
          {/* <div className=" col-12">
            <h4 className="">Booking</h4>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="date"
                value={new Date(
                  formik?.values?.bookingDate.from
                ).toLocaleDateString("en-CA")}
                onChange={(e) =>
                  formik.setFieldValue("bookingDate.from", e.target.value)
                }
                className={`form-control ${
                  formik?.touched?.bookingDate?.from &&
                  formik?.errors?.bookingDate?.from &&
                  "is-invalid"
                }`}
                id="floatingInput"
                placeholder="Lahore"
              />
              <label htmlFor="floatingInput">From</label>
            </div>
            {formik?.touched?.bookingDate?.from &&
              formik?.errors?.bookingDate?.from && (
                <div className="invalid_feedback">
                  {formik?.errors?.bookingDate?.from}
                </div>
              )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating">
              <input
                type="date"
                className={`form-control ${
                  formik?.touched?.bookingDate?.to &&
                  formik?.errors?.bookingDate?.to &&
                  "is-invalid"
                }`}
                value={new Date(
                  formik?.values?.bookingDate.to
                ).toLocaleDateString("en-CA")}
                onChange={(e) =>
                  formik.setFieldValue("bookingDate.to", e.target.value)
                }
                id="floatingPassword"
                placeholder="Hunza"
              />
              <label htmlFor="floatingPassword">To</label>
            </div>
            {formik?.touched?.bookingDate?.to &&
              formik?.errors?.bookingDate?.to && (
                <div className="invalid_feedback">
                  {formik?.errors?.bookingDate?.to}
                </div>
              )}
          </div> */}
          <div className=" col-12">
            <h4 className="">Pricing</h4>
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.price &&
                  formik?.errors?.price &&
                  "is-invalid"
                }`}
                {...formik.getFieldProps("price")}
                id="floatingInput"
                placeholder="25000"
                min={0}
              />
              <label htmlFor="floatingInput">Price</label>
            </div>
            {formik?.touched?.price && formik?.errors?.price && (
              <div className="invalid_feedback">{formik?.errors?.price}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.discountPrice &&
                  formik?.errors?.discountPrice &&
                  "is-invalid"
                }`}
                {...formik.getFieldProps("discountPrice")}
                id="floatingPassword"
                placeholder="10000"
                min={0}
              />
              <label htmlFor="floatingPassword">Discounted Price</label>
            </div>
            {formik?.touched?.discountPrice &&
              formik?.errors?.discountPrice && (
                <div className="invalid_feedback">
                  {formik?.errors?.discountPrice}
                </div>
              )}
          </div>
          <div className=" col-12">
            <h4 className="">Details</h4>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.details?.around &&
                  formik?.errors?.details?.around &&
                  "is-invalid"
                }`}
                {...formik.getFieldProps("details.around")}
                id="floatingPassword"
                placeholder="10000"
              />
              <label htmlFor="floatingPassword">Around</label>
            </div>
            {formik?.touched?.details?.around &&
              formik?.errors?.details?.around && (
                <div className="invalid_feedback">
                  {formik?.errors?.details?.around}
                </div>
              )}
          </div>
          <div className="col-12">
            <div className="form-floating mb-1">
              <textarea
                type="text"
                {...formik.getFieldProps("details.overview")}
                className={`form-control h-100 ${
                  formik?.touched?.details?.overview &&
                  formik?.errors?.details?.overview &&
                  "is-invalid"
                }`}
                id="floatingInput"
                placeholder="25000"
                rows={"4"}
              />
              <label htmlFor="floatingInput">Overview</label>
            </div>
            {formik?.touched?.details?.overview &&
              formik?.errors?.details?.overview && (
                <div className="invalid_feedback">
                  {formik?.errors?.details?.overview}
                </div>
              )}
          </div>
          <div className=" col-12">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="">Itinerary </h4>
              <button
                className="btn btn-success"
                onClick={() => {
                  const { itinerary, totalDays } = formik?.values;
                  if (!(itinerary?.length < totalDays)) {
                    return;
                  }
                  formik?.setFieldValue("itinerary", [
                    ...formik?.values?.itinerary,
                    {
                      title: "",
                      location: "",
                      time: "",
                      note: "",
                      details: "",
                    },
                  ]);
                }}
              >
                Add Day
              </button>
            </div>
          </div>
          {formik?.values?.itinerary?.map((itinerary, index) => {
            return (
              <>
                <div className="col-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="">Day {index + 1} </h4>
                    <button
                      className="btn btn-error"
                      onClick={() => {
                        if (!(formik.values.itinerary?.length > 1)) {
                          return;
                        }
                        let itineraryValue = formik.values.itinerary;
                        itineraryValue.splice(index, 1);
                        formik?.setFieldValue("itinerary", itineraryValue);
                      }}
                    >
                      <MdDelete fontSize="22" color="red" />
                    </button>
                  </div>
                </div>
                <div className="col-12">
                  <div className={style.form}>
                    <label
                      className={style.form__container}
                      id="upload-container"
                    >
                      {itinerary?.image ? (
                        <div className={style.images__container}>
                          {" "}
                          <Image
                            src={
                              typeof itinerary?.image == "string"
                                ? `${baseURL}${itinerary?.image}`
                                : URL.createObjectURL(itinerary?.image)
                            }
                            alt="front image"
                            width={100}
                            height={240}
                            className={`${style.images__box} w-100 h-100`}
                          />
                          <button
                            className={`position-absolute ${style.close}`}
                            onClick={() =>
                              formik.setFieldValue(
                                `itinerary[${index}].image`,
                                ""
                              )
                            }
                          >
                            <IoMdCloseCircle fontSize="25" color="red" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <BsFillCloudUploadFill fontSize="50" />
                          <p>Choose or Drag & Drop Images for this tour</p>
                          <input
                            className={style.form__file}
                            id="upload-files"
                            type="file"
                            multiple="false"
                            name={`itinerary[${index}].image`}
                            onChange={(e) => {
                              const selectedImage = e.target.files[0];
                              formik.setFieldValue(
                                `itinerary[${index}].image`,
                                selectedImage
                              );
                            }}
                          />
                        </>
                      )}
                    </label>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${
                        formik.touched.itinerary &&
                        formik.touched.itinerary[index]?.title &&
                        formik.errors.itinerary &&
                        formik.errors.itinerary[index]?.title &&
                        "is-invalid"
                      }`}
                      name={`itinerary[${index}].title`}
                      id={`itinerary[${index}].title`}
                      placeholder="Title"
                      onChange={formik.handleChange}
                      value={formik.values.itinerary[index]?.title}
                    />
                    <label htmlFor="floatingPassword">Title</label>
                  </div>
                  {formik.touched.itinerary &&
                    formik.touched.itinerary[index]?.title &&
                    formik.errors.itinerary &&
                    formik.errors.itinerary[index]?.title && (
                      <div className="text-danger">
                        {formik.errors.itinerary[index]?.title}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-floating mb-1">
                    <input
                      type="text"
                      onChange={formik.handleChange}
                      name={`itinerary[${index}].location`}
                      id={`itinerary[${index}].location`}
                      value={formik.values.itinerary[index].location}
                      className={`form-control ${
                        formik.touched.itinerary &&
                        formik.touched.itinerary[index]?.location &&
                        formik.errors.itinerary &&
                        formik.errors.itinerary[index]?.location &&
                        "is-invalid"
                      }`}
                    />
                    <label htmlFor="floatingInput">Location</label>
                  </div>
                  {formik.touched.itinerary &&
                    formik.touched.itinerary[index]?.location &&
                    formik.errors.itinerary &&
                    formik.errors.itinerary[index]?.location && (
                      <div className="text-danger">
                        {formik.errors.itinerary[index].location}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="time"
                      onChange={formik.handleChange}
                      name={`itinerary[${index}].time`}
                      id={`itinerary[${index}].time`}
                      value={formik.values.itinerary[index].time}
                      className={`form-control ${
                        formik.touched.itinerary &&
                        formik.touched.itinerary[index]?.time &&
                        formik.errors.itinerary &&
                        formik.errors.itinerary[index]?.time &&
                        "is-invalid"
                      }`}
                      defaultValue="16:00:00"
                      min="00:00"
                      max="23:59"
                    />
                    <label htmlFor="floatingPassword">Time</label>
                  </div>
                  {formik.touched.itinerary &&
                    formik.touched.itinerary[index]?.time &&
                    formik.errors.itinerary &&
                    formik.errors.itinerary[index]?.time && (
                      <div className="text-danger">
                        {formik.errors.itinerary[index].time}
                      </div>
                    )}
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-floating mb-1">
                    <input
                      type="text"
                      onChange={formik.handleChange}
                      name={`itinerary[${index}].note`}
                      id={`itinerary[${index}].note`}
                      value={formik.values.itinerary[index].note}
                      className="form-control"
                    />
                    <label htmlFor="floatingInput">Note (Optional)</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating mb-1">
                    <textarea
                      type="text"
                      onChange={formik.handleChange}
                      name={`itinerary[${index}].details`}
                      id={`itinerary[${index}].details`}
                      value={formik.values.itinerary[index].details}
                      className={`form-control h-100 ${
                        formik.touched.itinerary &&
                        formik.touched.itinerary[index]?.details &&
                        formik.errors.itinerary &&
                        formik.errors.itinerary[index]?.details &&
                        "is-invalid"
                      }`}
                      rows={"4"}
                    />
                    <label htmlFor="floatingInput">Details</label>
                  </div>
                  {formik.touched.itinerary &&
                    formik.touched.itinerary[index]?.details &&
                    formik.errors.itinerary &&
                    formik.errors.itinerary[index]?.details && (
                      <div className="text-danger">
                        {formik.errors.itinerary[index].details}
                      </div>
                    )}
                </div>
              </>
            );
          })}
          <div className="col-12">
            <h4 className="">
              Inclusion & Exclusion <span>(Optional)</span>
            </h4>
          </div>
          <div className="col-12">
            <Editor
              height={300}
              setFormikValue={(value) =>
                formik.setFieldValue("inclusionAndexclusion", value)
              }
              value={formik?.values?.inclusionAndexclusion}
            />
          </div>
          <div className="col-12">
            <h4 className="">
              Additional Information <span>(Optional)</span>
            </h4>
          </div>
          <div className="col-12">
            <Editor
              height={300}
              setFormikValue={(value) =>
                formik.setFieldValue("additionalInfo", value)
              }
              value={formik?.values?.additionalInfo}
            />
          </div>
          <div className="col-12">
            <h4 className="">
              Travel Tips <span>(Optional)</span>
            </h4>
          </div>
          <div className="col-12">
            <Editor
              height={300}
              setFormikValue={(value) =>
                formik.setFieldValue("travelTips", value)
              }
              value={formik?.values?.travelTips}
            />
          </div>
          <div className="col-12">
            <h4 className="">
              Policy <span>(Optional)</span>
            </h4>
          </div>
          <div className="col-12">
            <Editor
              height={300}
              setFormikValue={(value) => formik.setFieldValue("policy", value)}
              value={formik?.values?.policy}
            />
          </div>
          <div className="col-12">
            {isLoading ? (
              <button className="btn btn-secondary">
                <Spinner />
              </button>
            ) : (
              <button onClick={formik?.submitForm} className="btn btn-success">
                Update Tour
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Tour.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
export default Tour;
