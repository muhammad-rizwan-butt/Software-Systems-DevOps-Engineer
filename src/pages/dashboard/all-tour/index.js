import moment from "moment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { IoOptions } from "react-icons/io5";
import { MdOutlineViewHeadline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Axios } from "../../../axios/axios";
import textTruncate from "../../../lib/truncateText";
import Layout from "../layout";

const Index = () => {
  const { token } = useSelector((state) => state?.auth);
  const [tours, setTours] = useState([]);
  function getAllMyTour() {
    const config = {
      headers: { Authorization: "Bearer " + token },
    };
    Axios.get("tour/my-tour", config)
      .then((res) => setTours(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllMyTour();
  }, []);
  return (
    <div className="my-4">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-12 col-12">
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
                {tours?.map((tour, i) => {
                  return (
                    <tr key={i + tour?._id}>
                      <td>{i + 1}</td>
                      <td>{textTruncate(tour?.title, 15)}</td>
                      <td>{tour?.totalDays + " days"}</td>
                      <td>{moment(tour?.departureDate).format("ll")}</td>
                      <td>{tour?.location?.destination}</td>
                      <td>{tour?.status}</td>
                      <td>
                        <Dropdown data-bs-theme="light">
                          <Dropdown.Toggle
                            id="dropdown-button-dark-example1"
                            variant="secondary"
                            className="bg-transparent border-0 tour__dropdown"
                          >
                            <IoOptions color="black" fontSize={20} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link href={`/tour/${tour?._id}`}>
                                <MdOutlineViewHeadline
                                  size="20"
                                  color="black"
                                />{" "}
                                <span className="ms-2">View</span>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link
                                href={`/dashboard/edit-tour?_id=${tour?._id}`}
                              >
                                <CiEdit size="20" color="black" />
                                <span className="ms-2">Edit</span>
                              </Link>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
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
