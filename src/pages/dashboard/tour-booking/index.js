import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Axios } from "../../../axios/axios";
import truncateText from "../../../lib/truncateText";
import Layout from "../layout";

const Index = () => {
  const { token } = useSelector((state) => state?.auth);
  const [tourBooking, setTourBooking] = useState([]);
  useEffect(() => {
    Axios.get("/tour-booking/get-vendor-booking", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setTourBooking(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(tourBooking);
  return (
    <div className="my-4">
      <div className="container-fluid">
        <h1 className="mt-4 mb-3">{`Tour's Bookings`}</h1>
        <div className="row">
          <div className="col-12">
            <Table responsive="sm" hover>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>{`Tour's Title`}</th>
                  <th>{`Customer's Name`}</th>
                  <th>{`Customer's Phone No`}</th>
                  <th>{`Customer's Email`}</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {tourBooking.map((item, i) => {
                  return (
                    <tr key={i + item?._id}>
                      <td>{i + 1}</td>
                      <td>{truncateText(item?.tour?.title, 20)}</td>
                      <td>{item?.name || item?.customer?.name}</td>
                      <td>
                        {item?.phoneNumber || item?.customer?.phoneNumber}
                      </td>
                      <td>{item?.email || item?.customer?.email}</td>
                      <td>{item?.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
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
