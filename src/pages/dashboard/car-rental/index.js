import { useFormik } from "formik";
import React from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Axios } from "../../../axios/axios";
import style from "../../../styles/car-rental.module.scss";
import Layout from "../layout";

const initialValues = {
  name: "",
  model: "",
  engine: 0,
  transmissionType: "",
  power: 0,
  bagsCapacity: 0,
  image: "",
  capacity: 0,
  fuelType: "",
  rentPerDay: 0,
  description: "",
  location: "",
  city: "",
  country: "",
};

const Index = () => {
  const { token } = useSelector((state) => state?.auth);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Car's name is required"),
    model: Yup.string().required("Car's model is required"),
    engine: Yup.number().required("Car's engine is required"),
    city: Yup.string().required("Car's city is required"),
    country: Yup.string().required("Car's country is required"),
    location: Yup.string().required("Car's location is required"),
    transmissionType: Yup.string().required(
      "Car's transmission type is required"
    ),
    power: Yup.number().required("Car's power is required"),
    bagsCapacity: Yup.number().required("Car's bags capacity is required"),
    image: Yup.mixed()
      .test(
        "fileType",
        "Unsupported file format",
        (value) =>
          value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type)
      )
      .required("Please select at least one image"),
    capacity: Yup.number().required("Capacity is required"),
    fuelType: Yup.string().required("Fuel Type is required"),
    description: Yup.string().required("Description is required"),
    rentPerDay: Yup.number().required("Rent per day is required"),
  });

  const onSubmit = (values) => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }

    toast
      .promise(
        Axios.post("/car/add-car", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        {
          success: "You have succefully add a car",
          error: "error",
        }
      )
      .then((res) => formik.resetForm())
      .catch((error) => console.log(error));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className={`shadow mt-5 py-4 px-3 ${style.car_rental__container}`}>
      <div className="container-fluid">
        <h1 className="mb-4">Car</h1>
        <div className={`row g-3 `}>
          <div className=" col-12">
            <h4 className="mb-2">Upload Image</h4>
            <p className="text-muted">
              This image will be used as the main display for the Car. Please
              upload a high-quality image.
            </p>
            <div className={style.form}>
              <label className={style.form__container} id="upload-container">
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
                      formik.setFieldValue("image", e.target.files[0]);
                    }}
                  />
                </>
              </label>
              {formik?.values?.image && (
                <div className={style.images__container}>
                  {" "}
                  <span className="me-2 text-muted">
                    {formik?.values?.image?.name}
                  </span>
                  <button
                    className={` ${style.close} `}
                    onClick={() => formik.setFieldValue("image", "")}
                  >
                    <RiDeleteBinLine fontSize="22" color="red" />
                  </button>
                </div>
              )}
            </div>
            {formik.touched.image && formik.errors.image && (
              <div className="text-danger">{formik.errors.image}</div>
            )}
          </div>

          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.name && formik?.errors?.name && "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("name")}
                placeholder="Car's Name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            {formik?.touched?.name && formik?.errors?.name && (
              <div class="invalid_feedback">{formik?.errors?.name}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.model &&
                  formik?.errors?.model &&
                  "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("model")}
                placeholder="Car's Model"
              />
              <label htmlFor="floatingInput">Model</label>
            </div>
            {formik?.touched?.model && formik?.errors?.model && (
              <div class="invalid_feedback">{formik?.errors?.model}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.engine &&
                  formik?.errors?.engine &&
                  "is-invalid"
                }`}
                id="floatingInput"
                onChange={(e) => {
                  formik.setFieldValue("engine", Number(e.target.value));
                }}
                placeholder="Car's engine"
              />
              <label htmlFor="floatingInput">Engine</label>
            </div>
            {formik?.touched?.engine && formik?.errors?.engine && (
              <div class="invalid_feedback">{formik?.errors?.engine}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.city && formik?.errors?.city && "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("city")}
                placeholder="Car's City"
              />
              <label htmlFor="floatingInput">City</label>
            </div>
            {formik?.touched?.city && formik?.errors?.city && (
              <div class="invalid_feedback">{formik?.errors?.city}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.country &&
                  formik?.errors?.country &&
                  "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("country")}
                placeholder="Car's country"
              />
              <label htmlFor="floatingInput">Country</label>
            </div>
            {formik?.touched?.country && formik?.errors?.country && (
              <div class="invalid_feedback">{formik?.errors?.country}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="text"
                className={`form-control ${
                  formik?.touched?.location &&
                  formik?.errors?.location &&
                  "is-invalid"
                }`}
                id="floatingInput"
                {...formik.getFieldProps("location")}
                placeholder="Car's location"
              />
              <label htmlFor="floatingInput">Location</label>
            </div>
            {formik?.touched?.location && formik?.errors?.location && (
              <div class="invalid_feedback">{formik?.errors?.location}</div>
            )}
          </div>

          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.capacity &&
                  formik?.errors?.capacity &&
                  "is-invalid"
                }`}
                id="floatingInput"
                onChange={(e) => {
                  formik.setFieldValue("capacity", Number(e.target.value));
                }}
                placeholder="1"
                min={1}
              />
              <label htmlFor="floatingInput">Capacity</label>
            </div>
            {formik?.touched?.capacity && formik?.errors?.capacity && (
              <div class="invalid_feedback">{formik?.errors?.capacity}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.power &&
                  formik?.errors?.power &&
                  "is-invalid"
                }`}
                id="floatingInput"
                onChange={(e) => {
                  formik.setFieldValue("power", Number(e.target.value));
                }}
                placeholder="1"
                min={1}
              />
              <label htmlFor="floatingInput">Power</label>
            </div>
            {formik?.touched?.power && formik?.errors?.power && (
              <div class="invalid_feedback">{formik?.errors?.power}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.bagsCapacity &&
                  formik?.errors?.bagsCapacity &&
                  "is-invalid"
                }`}
                id="floatingInput"
                onChange={(e) => {
                  formik.setFieldValue("bagsCapacity", Number(e.target.value));
                }}
                placeholder="1"
                min={1}
              />
              <label htmlFor="floatingInput">Bags Capacity</label>
            </div>
            {formik?.touched?.bagsCapacity && formik?.errors?.bagsCapacity && (
              <div class="invalid_feedback">{formik?.errors?.bagsCapacity}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <select
                className={`form-select ${
                  formik?.touched?.transmissionType &&
                  formik?.errors?.transmissionType &&
                  "is-invalid"
                }`}
                id="floatingSelect"
                aria-label="Floating label select example"
                {...formik.getFieldProps("transmissionType")}
              >
                <option value="">Please select transmission type</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
              <label htmlFor="floatingPassword">Transmission Type</label>
            </div>
            {formik?.touched?.transmissionType &&
              formik?.errors?.transmissionType && (
                <div class="invalid_feedback">
                  {formik?.errors?.transmissionType}
                </div>
              )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <select
                className={`form-select ${
                  formik?.touched?.fuelType &&
                  formik?.errors?.fuelType &&
                  "is-invalid"
                }`}
                id="floatingSelect"
                aria-label="Floating label select example"
                {...formik.getFieldProps("fuelType")}
              >
                <option value="">Please select fuel type</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="hybrid">Hybrid</option>
                <option value="gasoline">Gasoline</option>
              </select>
              <label htmlFor="floatingPassword">Fuel Type</label>
            </div>
            {formik?.touched?.fuelType && formik?.errors?.fuelType && (
              <div class="invalid_feedback">{formik?.errors?.fuelType}</div>
            )}
          </div>
          <div className="col-md-6 col-12">
            <div className="form-floating mb-1">
              <input
                type="number"
                className={`form-control ${
                  formik?.touched?.rentPerDay &&
                  formik?.errors?.rentPerDay &&
                  "is-invalid"
                }`}
                id="floatingInput"
                onChange={(e) => {
                  formik.setFieldValue("rentPerDay", Number(e.target.value));
                }}
                placeholder="Car's rentPerDay"
              />
              <label htmlFor="floatingInput">Rent Per Day</label>
            </div>
            {formik?.touched?.rentPerDay && formik?.errors?.rentPerDay && (
              <div class="invalid_feedback">{formik?.errors?.rentPerDay}</div>
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
              <div class="invalid_feedback">{formik?.errors?.description}</div>
            )}
          </div>
          <div className="text-right">
            <button className="btn btn-primary" onClick={formik.handleSubmit}>
              Add Car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
export default Index;
