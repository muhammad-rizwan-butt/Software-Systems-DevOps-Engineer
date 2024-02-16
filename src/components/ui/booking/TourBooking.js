import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { Axios } from "../../../axios/axios";
import textTruncate from "../../../lib/truncateText";

export const TourBooking = () => {
  const { token } = useSelector((state) => state?.auth);
  const [booking, setBooking] = useState([]);
  const [isRender, setIsRender] = useState(false);

  function handleBookingStatus({ _id, status }) {
    setIsRender(false);
    Axios.patch(
      `tour-booking/update-tour-booking/${_id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => setIsRender(true))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    Axios.get("tour-booking/get-customer-booking", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setBooking(res.data))
      .catch((error) => console.log(error));
  }, [isRender]);

  return (
    <>
      <Table responsive="sm" hover>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Days</th>
            <th>Departure Date</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((item, i) => {
            return (
              <tr key={i + item}>
                <td>{i + 1}</td>
                <td>{textTruncate(item?.tour?.title, 15)}</td>
                <td>{item?.tour?.totalDays}</td>
                <td>
                  {moment(item?.tour?.departureDate).format("MMMM Do YYYY")}
                </td>
                <td>{item?.tour?.location?.departure}</td>
                <td>{item?.status}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      onClick={() =>
                        handleBookingStatus({
                          _id: item?._id,
                          status: "cancel",
                        })
                      }
                    >
                      <MdOutlineCancel size="18" color="red" />
                    </button>
                    <button
                      onClick={() =>
                        handleBookingStatus({
                          _id: item?._id,
                          status: "active",
                        })
                      }
                    >
                      <IoMdAddCircleOutline size="20" color="green" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
