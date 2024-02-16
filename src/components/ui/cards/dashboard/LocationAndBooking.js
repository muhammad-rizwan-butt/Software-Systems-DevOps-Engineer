import React from "react";

export const LocationAndBooking = ({ formik }) => {
  return (
    <>
      {" "}
      <div className="col-md-6 col-12">
        <div className="form-floating mb-1">
          <input
            type="text"
            className={`form-control ${
              formik?.touched?.location?.departure &&
              formik?.errors?.location?.departure &&
              "is-invalid"
            }`}
            id="floatingInput1"
            placeholder="Lahore"
            name="location.departure"
            {...formik.getFieldProps("location.departure")}
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
            id="floatingPassword2"
            placeholder="Hunza"
            name="location.destination"
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
            className={`form-control ${
              formik?.touched?.departureDate &&
              formik?.errors?.departureDate &&
              "is-invalid"
            }`}
            id="floatingInput3"
            name="departureDate"
            {...formik.getFieldProps("departureDate")}
          />
          <label htmlFor="floatingInput">Departure Date</label>
        </div>
        {formik?.touched?.departureDate && formik?.errors?.departureDate && (
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
            id="floatingPassword4"
            name="completionDate"
            {...formik.getFieldProps("completionDate")}
          />
          <label htmlFor="floatingPassword">Completion Date</label>
        </div>
        {formik?.touched?.completionDate && formik?.errors?.completionDate && (
          <div className="invalid_feedback">
            {formik?.errors?.completionDate}
          </div>
        )}
      </div>
      <div className="col-md-6 col-12">
        <div className="form-floating mb-1">
          <input
            type="number"
            className={`form-control ${
              formik?.touched?.price && formik?.errors?.price && "is-invalid"
            }`}
            id="floatingInput5"
            placeholder="25000"
            name="price"
            min={1}
            {...formik.getFieldProps("price")}
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
            id="floatingPassword6"
            placeholder="10000"
            min={1}
            name="discountPrice"
            {...formik.getFieldProps("discountPrice")}
          />
          <label htmlFor="floatingPassword">Discounted Price</label>
        </div>
        {formik?.touched?.discountPrice && formik?.errors?.discountPrice && (
          <div className="invalid_feedback">
            {formik?.errors?.discountPrice}
          </div>
        )}
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
            id="floatingPassword7"
            placeholder="10000"
            name="around"
            {...formik.getFieldProps("details.around")}
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
            className={`form-control h-100 ${
              formik?.touched?.details?.overview &&
              formik?.errors?.details?.overview &&
              "is-invalid"
            }`}
            id="floatingInput8"
            placeholder="25000"
            rows={"4"}
            name="overview"
            {...formik.getFieldProps("details.overview")}
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
    </>
  );
};
