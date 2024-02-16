import React from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import style from "../../../../styles/tour.module.scss";

export const ItineraryForm = ({ formik, index, itinerary }) => {
  return (
    <div className="row g-3">
      <div className="col-12">
        <div className={style.form}>
          <label className={style.form__container} id="upload-container">
            <>
              <BsFillCloudUploadFill fontSize="50" />
              <p>Choose or Drag & Drop Image</p>
              <input
                className={style.form__file}
                id="upload-files"
                type="file"
                multiple="false"
                name={`itinerary[${index}].image`}
                onChange={(e) => {
                  const selectedImage = e.target.files[0];
                  let formikValue = formik?.values?.itinerary;
                  formikValue[index].image = selectedImage;
                  formik.setFieldValue(`itinerary`, formikValue);
                }}
              />
            </>
          </label>
          {itinerary?.image && (
            <div className={style.images__container}>
              {" "}
              <span className="text-primary">
                {formik?.values?.itinerary[index]?.image?.name}
              </span>
              <button
                className={` ${style.close}`}
                onClick={() => {
                  let formikValue = formik?.values?.itinerary;
                  formikValue[index].image = "";
                  formik.setFieldValue(`itinerary`, formikValue);
                }}
              >
                <IoMdCloseCircle fontSize="25" color="red" />
              </button>
            </div>
          )}
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
            value={formik.values.itinerary[index].title}
            onChange={formik.handleChange}
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
    </div>
  );
};
