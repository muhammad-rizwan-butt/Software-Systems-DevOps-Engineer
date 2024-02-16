import React from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import style from "../../../../styles/tour.module.scss";

export const Information = ({ formik }) => {
  return (
    <>
      <div className=" col-12">
        <h4 className="mb-2">Upload Feature Image</h4>
        <p className="text-muted font-xs_14">
          Upload an image in JPEG, JPG or PNG Format.
        </p>
        <div className={style.form}>
          <label className={style.form__container} id="upload-container">
            <>
              <BsFillCloudUploadFill fontSize="50" />
              <p className="font-xs_14">Choose or Drag & Drop Image</p>
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
          </label>
          {formik?.values?.featureImage && (
            <div className={style.images__container}>
              {" "}
              <span className="me-2 text-primary">
                {formik?.values?.featureImage?.name}
              </span>
              <button
                className={` ${style.close} `}
                onClick={() => formik.setFieldValue("featureImage", "")}
              >
                <RiDeleteBinLine fontSize="22" color="red" />
              </button>
            </div>
          )}
        </div>
        {formik.touched.featureImage && formik.errors.featureImage && (
          <div className="text-danger">{formik.errors.featureImage}</div>
        )}
      </div>

      <div className=" col-12">
        <h4 className="mb-2">{`Upload Tour's Images`}</h4>
        <p className="text-muted font-xs_14">
          Upload images in JPEG, JPG or PNG Format.
        </p>
        <div className={style.form}>
          <label className={style.form__container} id="upload-container">
            <>
              <BsFillCloudUploadFill fontSize="50" />
              <p className="font-xs_14">Choose or Drag & Drop Images</p>
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
          </label>
          {formik?.values?.images.length > 0 && (
            <div className={style.images___containerBox}>
              {formik?.values?.images?.map((image, i) => {
                return (
                  <div className={style.images__container} key={i}>
                    <span className="me-2 text-primary">{image?.name}</span>
                    <button
                      className={` ${style.close}`}
                      onClick={() => {
                        let filteredImages = formik?.values?.images?.filter(
                          (item) => item !== image
                        );
                        formik.setFieldValue("images", filteredImages);
                      }}
                    >
                      <RiDeleteBinLine fontSize="22" color="red" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
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
              formik?.touched?.title && formik?.errors?.title && "is-invalid"
            }`}
            id="floatingInput"
            {...formik.getFieldProps("title")}
            placeholder="Tour Title"
          />
          <label htmlFor="floatingInput">Title</label>
        </div>
        {formik?.touched?.title && formik?.errors?.title && (
          <div class="invalid_feedback">{formik?.errors?.title}</div>
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
            value={formik?.values?.totalDays}
            onChange={(e) => {
              formik.setFieldValue("totalDays", e.target.value);
              let itinerary = [...new Array(Number(e.target.value))].map(
                (_, i) => ({
                  title: "",
                  location: "",
                  time: "",
                  note: "",
                  details: "",
                })
              );
              formik.setFieldValue("itinerary", itinerary);
            }}
            placeholder="1"
            min={1}
          />
          <label htmlFor="floatingInput">Total Days</label>
        </div>
        {formik?.touched?.totalDays && formik?.errors?.totalDays && (
          <div class="invalid_feedback">{formik?.errors?.totalDays}</div>
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
            placeholder="Please select tour type"
          >
            <option value={null}>Please select tour type</option>
            <option value="air">By Air</option>
            <option value="road">By Road</option>
          </select>
          <label htmlFor="floatingPassword">Tour Type</label>
        </div>
        {formik?.touched?.tourType && formik?.errors?.tourType && (
          <div class="invalid_feedback">{formik?.errors?.tourType}</div>
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
    </>
  );
};
