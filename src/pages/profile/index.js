import React, { useState } from "react";

import moment from "moment";
import Image from "next/image";
import { Nav, Table } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { PiUsersFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Axios, baseURL } from "../../axios/axios";
import { Layout } from "../../components/layout/layout";
import { EditProfile } from "../../components/ui/Editprofile";
import { updateUser } from "../../store/reducers/auth";
import style from "../../styles/profile.module.scss";

const Index = () => {
  const [edit, setEdit] = useState(false);
  const { user, token } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  function handleProfileImage(e) {
    let profileImage = e.target.files[0];
    let formData = new FormData();

    formData.append("profileImage", profileImage);
    toast
      .promise(
        Axios.patch(`/user/update-profile-image`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": ["multipart/form-data"],
            Accept: "application/json",
            type: "formData",
          },
        }),
        {
          success: "Profile Image has been changed.",
          error: "There is an error.",
        }
      )
      .then((res) => {
        dispatch(updateUser(res.data));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={style.profile__container}>
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-4 col-12">
            <div className={style.prolile__card}>
              <div className="d-flex align-items-center justify-content-between ps-5">
                {user?.profileImage ? (
                  <Image
                    src={baseURL + user?.profileImage}
                    alt={user?.name}
                    className={`rounded-circle ${style.profileImage}`}
                    width={100}
                    height={100}
                  />
                ) : (
                  <BsPersonCircle size="100" />
                )}

                <button className={style.profile__edit}>
                  <FaEdit size={18} /> <span>Edit</span>{" "}
                  <input
                    type="file"
                    name="profile"
                    id=""
                    className={style.prolfile__input}
                    onChange={(e) => handleProfileImage(e)}
                  />
                </button>
              </div>

              <ul className={style.card__list_box}>
                <Nav
                  defaultActiveKey="/home"
                  className={`flex-column ${style.card__nav}`}
                >
                  <Nav.Link href="#1" className={style.card__nav_link}>
                    <MdPersonOutline size="24" /> <span>Personal Info</span>
                  </Nav.Link>
                  <Nav.Link href="#3" className={style.card__nav_link}>
                    <PiUsersFill size="24" /> <span>Travelers</span>
                  </Nav.Link>
                  <Nav.Link href="#2" className={style.card__nav_link}>
                    <FiSettings size="20" /> <span>Settings</span>
                  </Nav.Link>
                </Nav>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div
              className={`${style.prolile__card} ${style.profile__info} mb-3`}
              id="1"
            >
              <div className="d-flex">
                <h4 className={style.info_heading}>Profile</h4>

                <button
                  type="button"
                  onClick={() => setEdit(true)}
                  className="ms-auto"
                >
                  <FaEdit size={20} /> Edit
                </button>
              </div>

              <p className={style.info__text}>Basic Info</p>
              {edit ? (
                <div>
                  <EditProfile setEdit={setEdit} />
                </div>
              ) : (
                <Table className={style.info__box}>
                  <tbody>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Name</td>
                      <td className={style.info__value}>
                        {user?.name || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Gender</td>
                      <td className={style.info__value}>
                        {user?.gender || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>City</td>
                      <td className={style.info__value}>
                        {user?.city || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Country</td>
                      <td className={style.info__value}>
                        {user?.country || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Postal Code</td>
                      <td className={style.info__value}>
                        {user?.postalCode || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Address</td>
                      <td className={style.info__value}>
                        {user?.fullAddress || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Martial Status</td>
                      <td className={style.info__value}>
                        {user?.martialStatus || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Date of Birth</td>
                      <td className={style.info__value}>
                        {user?.dateOfBirth
                          ? moment(user?.dateOfBirth).format("ll")
                          : "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Passport Number</td>
                      <td className={style.info__value}>
                        {user?.passportNo || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Passport Expiry Date</td>
                      <td className={style.info__value}>
                        {user?.passportExpiryDate
                          ? moment(user?.passportExpiryDate).format("ll")
                          : "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Passport Country</td>
                      <td className={style.info__value}>
                        {user?.passportCountry || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Nationality</td>
                      <td className={style.info__value}>
                        {user?.nationality || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>National ID</td>
                      <td className={style.info__value}>
                        {user?.cnic?.cnicNumber || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>Religion</td>
                      <td className={style.info__value}>
                        {user?.religion || "N/A"}
                      </td>
                    </tr>
                    <tr className={`${style.info__textBox}`}>
                      <td className={style.info__key}>
                        Emergency Contact Number
                      </td>
                      <td className={style.info__value}>
                        {user?.emergencyContact || "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </div>

            <div
              className={`${style.prolile__card} ${style.profile__info} mb-3`}
              id="3"
            >
              <h4 className={style.info_heading}>Traveler Info</h4>

              <Table className={style.info__box}>
                <tbody>
                  <tr className={`${style.info__textBox}`}>
                    <td className={` border-bottom-0 `}>
                      <span className={style.info__key}>Siyaahat User</span>
                      <br />
                      <span className={style.info__value}>{user?.email}</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              className={`${style.prolile__card} ${style.profile__info} mb-3`}
              id="2"
            >
              <h4 className={style.info_heading}>Settings</h4>
              <p className={style.info__text}>
                Manage your email address and mobile number
              </p>

              <Table className={style.info__box}>
                <tbody>
                  <tr className={`${style.info__textBox}`}>
                    <td className={style.info__key}>Email</td>
                    <td className={style.info__value}>{user?.email}</td>
                  </tr>
                  <tr className={`${style.info__textBox} `}>
                    <td className={`${style.info__key} border-bottom-0`}>
                      Mobile Number
                    </td>
                    <td className={`${style.info__value} border-bottom-0`}>
                      {user?.phoneNumber}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
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
