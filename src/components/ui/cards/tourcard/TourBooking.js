import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Axios } from "../../../../axios/axios";
import { LoginModal } from "../../modal/LoginModal";

export const TourBooking = ({ tour }) => {
  const { token, user } = useSelector((state) => state?.auth);
  const [noOfPerson, setNoOfPerson] = useState(1);
  const [isOpen, setIsOpen] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  function handleTourBooking() {
    const body = {
      noOfPerson,
      vendor: tour?.vendor,
      tour: tour?._id,
      name,
      email,
      phoneNumber,
    };
    toast
      .promise(
        Axios.post("tour-booking/create-tour-booking", body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        { success: "You have successfully booked this tour", error: "Error" }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setIsOpen("successAlert");
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className={` col-span-2 px-2 py-2 gap-2   `}>
        <div className="mb-3 sticky-lg-top top-10px shadow px-4 py-5 rounded">
          <h4 className="mb-5">Book Tour</h4>
          <div className="form-floating mb-3 ">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              placeholder="1"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control `}
              id="floatingInput"
              placeholder="1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className={`form-control `}
              id="floatingInput"
              placeholder="1"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label htmlFor="floatingInput">Phone Number</label>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
            {" "}
            <h5 className="">No Of People</h5>
            <div className="d-flex align-items-center justify-content-between gap-3 border rounded p-2">
              <button
                className="border-end px-2"
                onClick={() =>
                  setNoOfPerson((prev) => {
                    if (prev == 0) {
                      return prev;
                    } else {
                      return prev - 1;
                    }
                  })
                }
              >
                <AiOutlineMinusCircle fontSize={24} />
              </button>
              <input type="number" min={1} max={10} value={noOfPerson} />

              <button
                className="border-start px-2"
                onClick={() =>
                  setNoOfPerson((prev) => {
                    if (prev == 10) {
                      return prev;
                    } else {
                      return prev + 1;
                    }
                  })
                }
              >
                <AiOutlinePlusCircle fontSize={24} />
              </button>
            </div>
          </div>
          <button
            className={`mt-5 btn  w-100 py-3 ${
              user && tour?.tourists.includes(user?._id)
                ? "btn-secondary"
                : "btn-primary"
            }`}
            disabled={user && tour?.tourists.includes(user?._id)}
            onClick={() => {
              if (user && tour?.tourists.includes(user?._id)) {
                return;
              } else if (!token) {
                setIsOpen("loginModal");
              } else {
                handleTourBooking();
              }
            }}
          >
            Book Now
          </button>
        </div>
      </div>
      <LoginModal
        show={isOpen == "loginModal"}
        handleClose={() => setIsOpen("")}
      />
    </>
  );
};
