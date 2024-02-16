import React, { useState } from "react";
// import styles from "../../styles/login/login.module.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "../../axios/axios";
import { getMe } from "../../store/reducers/auth";

import styles from "../../styles/profile.module.scss";
import { CustomAlert } from "./CustomAlert";

export const EditProfile = ({ setEdit }) => {
  const { token, user } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState("");

  const initialValues = {
    name: user?.name,
    phoneNumber: user?.phoneNumber,
    fullAddress: user?.fullAddress,
    city: user?.city,
    country: user?.country,
    postalCode: user?.postalCode,
    dateOfBirth: user?.dateOfBirth,
    gender: user?.gender,
    nationality: user?.nationality,
    martialStatus: user?.martialStatus,
    emergencyContact: user?.emergencyContact,
    passportNo: user?.passportNo,
    passportCountry: user?.passportCountry,
    passportExpiryDate: user?.passportExpiryDate,
    religion: user?.religion,
    cnic: {
      cnicNumber: user?.cnic?.cnicNumber,
    },
  };

  function onSubmit(values) {
    Axios.patch("user/updateuser", values, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setIsOpen("success");
          dispatch(getMe({ user: res?.data?.user }));
          setEdit(false);
        }
      })
      .catch((error) => console.log(error));
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <>
      <div className="grid grid-cols-6 gap-4 ">
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("name")}
              placeholder="Tour Title"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
        </div>

        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="date"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("dateOfBirth")}
              placeholder="29-4-23"
            />
            <label htmlFor="floatingInput">Date Of Birth</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("cnic.cnicNumber")}
              placeholder="0987633"
            />
            <label htmlFor="floatingInput">National Id</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className=" form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              {...formik.getFieldProps("gender")}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="floatingPassword">Gender</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              {...formik.getFieldProps("martialStatus")}
            >
              <option value="">Select Martial Status</option>
              <option value="Signle">Single</option>
              <option value="Married">Married</option>
            </select>
            <label htmlFor="floatingPassword">Marital Status</label>
          </div>
        </div>
        <div className="col-span-3">
          <div className="form-floating mb-1">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("phoneNumber")}
              placeholder="0-0987654"
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex flex-column">
        <h4 className={styles.info__heading}>Address</h4>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-4">
        <div className={` col-span-6`}>
          <div className="form-floating mb-1">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("fullAddress")}
              placeholder="full address"
            />
            <label htmlFor="floatingInput">Full Address</label>
          </div>
        </div>

        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("postalCode")}
              placeholder="9876"
            />
            <label htmlFor="floatingInput">Postal code</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("city")}
              placeholder="Lahore"
            />
            <label htmlFor="floatingInput">City</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("country")}
              placeholder="Pakistan"
            />
            <label htmlFor="floatingInput">Country</label>
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex flex-column">
        <h4 className={styles.info__heading}>Passport Information</h4>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-4">
        <div className={` col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("passportNo")}
              placeholder="9876086"
            />
            <label htmlFor="floatingInput">Passport Number</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="date"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("passportExpiryDate")}
              placeholder="19-3-25"
            />
            <label htmlFor="floatingInput">Passport Expiry Date</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("passportCountry")}
              placeholder="Pakistan"
            />
            <label htmlFor="floatingInput">Passport Country </label>
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex flex-column">
        <h4 className={styles.info__heading}>Emergency Contact</h4>
      </div>
      <div className="mt-3 grid grid-cols-6 gap-4">
        <div className={` col-span-3`}>
          <div className="form-floating mb-1">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              {...formik.getFieldProps("emergencyContact")}
              placeholder="98768765"
            />
            <label htmlFor="floatingInput">Emergency Number</label>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex flex-column">
        <h4 className={styles.info__heading}>Other</h4>
      </div>
      <div className="mt-3 mb-3 grid grid-cols-6 gap-4">
        <div className={`col-span-3`}>
          <div className=" form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              {...formik.getFieldProps("nationality")}
            >
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Germany">Germany</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Others">Others</option>
            </select>
            <label htmlFor="floatingPassword">Nationality</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className=" form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              placeholder="Select Religion"
              aria-label="Floating label select example"
              {...formik.getFieldProps("religion")}
            >
              <option value="">Select Religion</option>
              <option value="Islam">Islam</option>
              <option value="Hindu">Hindu</option>
              <option value="Christian">Christian</option>
              <option value="Others">Others</option>
            </select>
            <label htmlFor="floatingPassword">Religion</label>
          </div>
        </div>
        <div className={`col-span-3`}>
          <div className=" form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              placeholder="Select Religion"
              aria-label="Floating label select example"
              {...formik.getFieldProps("language")}
            >
              <option value="">Select Language</option>
              <option value="Urdu">Urdu</option>
              <option value="English">English</option>
              <option value="Others">Others</option>
            </select>
            <label htmlFor="floatingPassword">Preffered Language</label>
          </div>
        </div>
      </div>

      <div className="d-flex gap-4">
        <button
          type="button"
          onClick={() => setEdit(false)}
          className="ms-auto"
        >
          {" "}
          Close
        </button>
        <button
          type="button"
          className="ml-auto btn btn-primary"
          onClick={formik.submitForm}
        >
          {" "}
          Save
        </button>
      </div>
      <CustomAlert
        show={isOpen == "success"}
        handleClose={() => setIsOpen("")}
        variant={"success"}
        message={"You have successfully update your profile."}
      />
    </>
  );
};
