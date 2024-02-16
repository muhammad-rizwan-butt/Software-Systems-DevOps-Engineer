import { Disclosure, Tab } from "@headlessui/react";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import * as Yup from "yup";
import { TextField } from "../../components/ui/TextField";
import styles from "../../styles/SingleFlight/SingleFlight.module.scss";
// import { Button } from "../../components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../lib/images";
const initialValues = {
  firstName: "",
  lastName: "",
  dOB: "",
  email: "",
  phone: "",
};

const Index = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    dOB: Yup.string().required("DOB is required"),

    email: Yup.string().email("Invalid Email").required("Email is required"),

    phone: Yup.string().required("phone."),
  });
  const onSubmit = async (values) => {
    let { firstName, lastName, dOB, email, phone } = values;
    // const config = {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <section className={styles.flight__container}>
        <div className="container ">
          <div className={`${styles.mobile_filter} `}>
            <div className="d-flex">
              <h4 className="heading m-3">Review Your Booking</h4>

              <div className="m-auto">
                <span className={`green_text`}>Flight Selection </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-img w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span className={`${styles.active}`}> Booking </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-img w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                <span className={`green_text`}> Payment</span>
              </div>
            </div>

            <div
              className={` grid gap-5 grid-cols-xl-4 grid-cols-lg-4 grid-cols-1`}
            >
              <div className=" grid gap-2 col-span-xl-3 col-span-lg-3 col-span-1">
                <div className="d-flex gap-3 flex-column">
                  <div className={styles.bg}>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${styles.toggle_btn_container} d-flex flex-wrap align-item-center justify-content-between w-100`}
                          >
                            {/* <div
                              className={`${styles.toggle_btn_container} d-flex flex-wrap`}
                            > */}
                            <span className={`${styles.text_green} `}>
                              KHI-ISB{" "}
                            </span>
                            <Image
                              className={`${styles.imgicon} ${
                                open ? "rotate-180 transform" : ""
                              }  `}
                              src={images["down_arrow.svg"]}
                              alt=""
                            />
                            {/* </div> */}
                          </Disclosure.Button>
                          <Disclosure.Panel className="pt-4 pb-3 text-sm text-gray-500">
                            <div className={styles.collapse}>
                              <div className={styles.detail_accordion}>
                                <div className={styles.flight_detail_section}>
                                  <div>
                                    <div
                                      className={styles.flight_airlines_info}
                                    >
                                      <div
                                        className={styles.airplane_info_wrapper}
                                      >
                                        <div className={styles.airplane_info}>
                                          <div
                                            className={styles.image_placeholder}
                                          >
                                            <Image
                                              src={images["fly_jinnah.png"]}
                                              className={
                                                styles.flight_airlines_logo
                                              }
                                              alt=""
                                            />
                                          </div>
                                          <div
                                            className={
                                              styles.airplane_info_text
                                            }
                                          >
                                            <span
                                              className={styles.airplane_name}
                                            >
                                              Fly Jinnah
                                            </span>
                                            <span
                                              className={styles.airplane_model}
                                            >
                                              9P 670 | Airbus 320_200
                                            </span>
                                          </div>
                                        </div>
                                        <div
                                          className={styles.airplane_amenities}
                                        >
                                          <span className={styles.flight_type}>
                                            (Economy)
                                          </span>
                                          <div
                                            className={styles.amenity_icons}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className={`${styles.detail_time} ${styles.flight_time}`}
                                      >
                                        <div className={styles.start_time}>
                                          <span className={styles.time_text}>
                                            07:05
                                          </span>
                                          <span className={styles.day_text}>
                                            Wed, 24 May, 2023
                                          </span>
                                          {/* <span className={styles.day_text}>2023</span> */}
                                          <span
                                            className={styles.destination_text}
                                          >
                                            KHI
                                          </span>
                                        </div>
                                        <div className={styles.stops_info}>
                                          <div
                                            className={styles.arrow_pointer}
                                          />
                                          <div className={styles.stop_names}>
                                            <span
                                              className={styles.duration_text}
                                            >
                                              2h
                                            </span>
                                          </div>
                                        </div>
                                        <div className={styles.end_time}>
                                          <span className={styles.time_text}>
                                            09:05
                                          </span>
                                          <span className={styles.day_text}>
                                            Wed, 24 May, 2023
                                          </span>
                                          {/* <span className={styles.day_text}>2023</span> */}
                                          <span
                                            className={styles.destination_text}
                                          >
                                            ISB
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>

                  <div className={styles.bg}>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={`${styles.toggle_btn_container} d-flex flex-wrap align-item-center justify-content-between w-100`}
                          >
                            <span className={`card_title`}>Flight Details</span>
                            <Image
                              className={`${styles.imgicon} ${
                                open ? "rotate-180 transform" : ""
                              }  `}
                              src={images["down_arrow.svg"]}
                              alt=""
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            className={`${styles.rules_section} pb-3 pt-4 text-sm text-gray-500`}
                          >
                            {/* <div className={``}> */}
                            <div className={styles.rule_header}>
                              <Tab.Group>
                                <Tab.List
                                  className={`${styles.rules_tab} mt-3 `}
                                >
                                  <Tab as={Fragment}>
                                    {({ selected }) => (
                                      <button
                                        className={`${styles.tab_btn} ${
                                          selected ? styles.selected : ""
                                        }`}
                                      >
                                        Baggage
                                      </button>
                                    )}
                                  </Tab>
                                  <Tab as={Fragment}>
                                    {({ selected }) => (
                                      <button
                                        className={`${styles.tab_btn}  ${
                                          selected ? styles.selected : ""
                                        }`}
                                      >
                                        Fare
                                      </button>
                                    )}
                                  </Tab>
                                  <Tab as={Fragment}>
                                    {({ selected }) => (
                                      <button
                                        className={`${styles.tab_btn}  ${
                                          selected ? styles.selected : ""
                                        }`}
                                      >
                                        Policy
                                      </button>
                                    )}
                                  </Tab>
                                </Tab.List>

                                <Tab.Panels className={styles.rules_content}>
                                  <Tab.Panel>
                                    <div className={styles.baggage_info}>
                                      <div
                                        className={`grid grid-cols-3 ${styles.baggage_header_info}`}
                                      >
                                        {/* div */}
                                        <span className={` green_text`}>
                                          Flight
                                        </span>
                                        <span className={` green_text `}>
                                          Cabin
                                        </span>
                                        <span className={` green_text `}>
                                          Check_in
                                        </span>
                                      </div>
                                      <div
                                        className={`grid grid-cols-3 ${styles.baggage_header_info}`}
                                      >
                                        <span className={styles.header_text}>
                                          KHI - ISB
                                        </span>
                                        <span
                                          className={`${styles.header_text}`}
                                        >
                                          10 Kg
                                        </span>

                                        <span
                                          className={`${styles.header_text} `}
                                        >
                                          N/A
                                        </span>
                                      </div>
                                    </div>
                                  </Tab.Panel>
                                  <Tab.Panel>
                                    <div className="fare_info">
                                      <div
                                        className={`fare_info_header d-flex justify-content-between  `}
                                      >
                                        <span className={`green_text`}>
                                          Fare Summary
                                        </span>
                                        <span className={`green_text`}>
                                          Base Fare
                                        </span>
                                        <span className={`green_text`}>
                                          Tax:
                                        </span>
                                      </div>
                                      {/* <div className={`fare_content_wrapper  rating`}> */}
                                      <div className="content_item rating d-flex align-items-center justify-content-between">
                                        <span className="passenger_type">
                                          Adult x 1
                                        </span>
                                        <span className="flight_price ">
                                          PKR 15,004
                                        </span>

                                        <span className="flight_price ">
                                          PKR 2,145
                                        </span>
                                        {/* </div> */}
                                      </div>
                                    </div>
                                  </Tab.Panel>
                                  <Tab.Panel>
                                    <div className="fare_rules_info">
                                      <div className="rule_wrapper">
                                        <div
                                          className={`${styles.fare_rule_header} `}
                                        >
                                          <h6>KHI_ISB</h6>
                                        </div>
                                        <div className="fare_rule_content rating">
                                          <div className={`green_text`}>
                                            <span>Cancellation</span>
                                          </div>
                                          <div
                                            className={`${styles.fee_content}`}
                                          >
                                            <span>
                                              Cancellation Fee = Airlines Fee +
                                              Siyaahat Fee
                                            </span>
                                            <br />
                                            <span>
                                              Refund Amount = Paid Amount _
                                              Cancellation Fee
                                            </span>
                                          </div>
                                          <div className={`green_text`}>
                                            <span>Re_issue</span>
                                          </div>
                                          <div
                                            className={`${styles.fee_content}`}
                                          >
                                            <span>
                                              Re_issue Fee = Airlines Fee + Fare
                                              Difference + Siyaahat Fee
                                            </span>
                                          </div>
                                          <span
                                            className={`cancellation_note green_text`}
                                          >
                                            *The airlines fee is indicative and
                                            per person. Convenience fee is
                                            non_refundable.
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </Tab.Panel>
                                </Tab.Panels>
                              </Tab.Group>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>

                  <div className="m-3">
                    <span className=" heading ">Sign In</span>
                    <span className="rating">
                      {" "}
                      to book faster and unlock all deals
                    </span>
                  </div>

                  <div className={styles.bg}>
                    <div className="flex w-full justify-between rounded-lg bg-purple-100  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className={` card_title `}>
                        <u>Have a coupon?</u>
                      </span>
                    </div>
                  </div>

                  <div className="">
                    <h1 className="m-3 heading ">Enter Traveller Details</h1>
                  </div>
                  <div className={styles.bg_contact}>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={` ${styles.toggle_btn_container} d-flex flex-wrap align-item-center justify-content-between w-100`}
                          >
                            <div>
                              <span className={` card_title`}>Passenger1</span>
                              <span
                                className={`${styles.passenger_type} card_title m-2`}
                              >
                                {" "}
                                Adult
                              </span>
                              <span
                                className={`green_text semi-bold card_title m-2`}
                              >
                                {" "}
                                Primary Contact
                              </span>
                            </div>

                            <Image
                              className={`${styles.imgicon} ${
                                open ? "rotate-180 transform" : ""
                              }  `}
                              src={images["down_arrow.svg"]}
                              alt=""
                            />
                          </Disclosure.Button>
                          {/* <div className={``}> */}
                          <Disclosure.Panel className=" pt-4 pb-3 text-sm text-gray-500">
                            <div className={styles.collapse}>
                              <div className={styles.detail_accordion}>
                                <div className={styles.flight_detail_section}>
                                  <div>
                                    <div
                                      className={styles.flight_airlines_info}
                                    >
                                      <div
                                        className={`${styles.airplane_info_text} mt-3`}
                                      >
                                        <h4 className={`heading`}>
                                          Personal Details
                                        </h4>
                                        <span>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="icon-img w-6 h-6"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                            />
                                          </svg>
                                        </span>

                                        <span className={styles.text_light}>
                                          As mentioned on your passport or
                                          goverment approved IDs
                                        </span>
                                        <h6 className={` mt-3 rating`}>
                                          Select title
                                        </h6>
                                        <div
                                          className={`gap-4 d-flex  ${styles.airplane_amenities} `}
                                        >
                                          <div className="">
                                            <input
                                              className="custom-control-input"
                                              type="radio"
                                              id="kraken"
                                              name="title"
                                              value="MR."
                                            />
                                            <label
                                              className={`m-2 green_text`}
                                              htmlFor="customCheck"
                                            >
                                              MR.
                                            </label>
                                          </div>
                                          <div>
                                            <input
                                              type="radio"
                                              id="sasquatch"
                                              name="title"
                                              value="MS."
                                            />
                                            <label
                                              className={`m-2 green_text`}
                                              htmlFor="ms"
                                            >
                                              MS.
                                            </label>
                                          </div>

                                          <div>
                                            <input
                                              type="radio"
                                              id="mothman"
                                              name="title"
                                              value="MRS."
                                            />
                                            <label
                                              className={`m-2 green_text `}
                                              htmlFor="mrs"
                                            >
                                              MRS.
                                            </label>
                                          </div>
                                        </div>

                                        <form action="">
                                          <div className="grid grid-cols-4 pb-4 gap-5">
                                            <div
                                              className={`col-span-2 gap-2 ${styles.form_inputs} `}
                                            >
                                              <label
                                                className="grey_text"
                                                htmlFor="lname"
                                              >
                                                First Name{" "}
                                              </label>
                                              <TextField
                                                error={
                                                  formik.touched.firstName &&
                                                  formik.errors.firstName
                                                }
                                                {...formik.getFieldProps(
                                                  "firstName"
                                                )}
                                                containerclassName=""
                                              />

                                              <label
                                                className="grey_text"
                                                htmlFor="lname"
                                              >
                                                Date Of Birth{" "}
                                              </label>
                                              <TextField
                                                error={
                                                  formik.touched.dOB &&
                                                  formik.errors.dOB
                                                }
                                                {...formik.getFieldProps("dOB")}
                                                containerclassName=""
                                              />
                                            </div>
                                            <div
                                              className={`col-span-2 gap-2  ${styles.form_inputs}`}
                                            >
                                              <label
                                                className="grey_text"
                                                htmlFor="lname"
                                              >
                                                Last Name{" "}
                                              </label>
                                              <TextField
                                                error={
                                                  formik.touched.lastName &&
                                                  formik.errors.lastName
                                                }
                                                {...formik.getFieldProps(
                                                  "lastName"
                                                )}
                                                containerclassName=""
                                              />

                                              <label
                                                className="grey_text"
                                                htmlFor="country"
                                              >
                                                Nationality{" "}
                                              </label>

                                              <select
                                                className={styles.options}
                                                id="country"
                                                name="country"
                                              >
                                                <option value="australia">
                                                  Australia
                                                </option>
                                                <option value="canada">
                                                  Canada
                                                </option>
                                                <option value="pakistan">
                                                  Pakistan
                                                </option>
                                                <option value="usa">USA</option>
                                              </select>
                                            </div>
                                          </div>
                                          <div
                                            className={`${styles.contact_details} `}
                                          >
                                            <h4 className={`heading mb-2`}>
                                              Contact Details
                                            </h4>
                                            <span>
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="icon-img w-6 h-6"
                                              >
                                                <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                />
                                              </svg>
                                            </span>
                                            <span
                                              className={`${styles.text_light}`}
                                            >
                                              Receive booking confirmation &
                                              updates
                                            </span>
                                          </div>

                                          <div className="grid grid-cols-4 mt-4 pb-4 gap-5">
                                            <div
                                              className={`col-span-2 ${styles.form_inputs} `}
                                            >
                                              {/* <div className=""> */}
                                              <label
                                                className="grey_text"
                                                htmlFor="email"
                                              >
                                                Email{" "}
                                              </label>
                                              <TextField
                                                error={
                                                  formik.touched.email &&
                                                  formik.errors.email
                                                }
                                                {...formik.getFieldProps(
                                                  "Email"
                                                )}
                                                containerclassName=""
                                              />
                                            </div>
                                            <div
                                              className={`col-span-2  ${styles.form_inputs}`}
                                            >
                                              <label
                                                className="grey_text"
                                                htmlFor="Pno."
                                              >
                                                Phone Number{" "}
                                              </label>
                                              <TextField
                                                error={
                                                  formik.touched.phone &&
                                                  formik.errors.phone
                                                }
                                                {...formik.getFieldProps(
                                                  "lastName"
                                                )}
                                                containerclassName=""
                                              />
                                            </div>
                                          </div>
                                          <input
                                            type="checkbox"
                                            id="option"
                                            name="option"
                                            value="check"
                                          />
                                          <label
                                            htmlFor="option"
                                            className={`m-2 ${styles.text_light}`}
                                          >
                                            {" "}
                                            Save this to my traveler list
                                          </label>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                  <Link href={"/checkout"}>
                    <button
                      type="submit"
                      className={`${styles.btn} btn btn-primary`}
                    >
                      Submit
                    </button>
                  </Link>
                </div>
              </div>

              <div>
                <div className={`${styles.time_block}`}>
                  <div className={`${styles.green_block}`}>
                    <span className="rating">
                      Book now before tickets run out!
                    </span>
                    <div className={` pt-2 gap-4 d-flex`}>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`${styles.icon} w-6 h-6`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <div className={` d-flex`}>
                        <div className=" d-flex flex-column heading">
                          00 :
                          <span className={`${styles.time} rating`}>min</span>
                        </div>
                        <div className="ms-10 d-flex flex-column heading">
                          00
                          <span className={` rating`}>sec</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.rightblock} sticky`}>
                  <div className={`fare-wrapper`}>
                    <div className={`${styles.fare_box}`}>
                      <div className={`${styles.fare_header}`}>
                        <div className="wrapper d-flex">
                          <div className={styles.fare_icon}>
                            <Image alt="" src={images["fly_jinnah.png"]} />
                          </div>
                          <div className="header-summary">
                            <div className="fare-type">
                              <Image
                                src={images["flight.svg"]}
                                alt="airplane icon"
                              />
                              <span className={`green_text`}> Flight</span>
                            </div>
                            <span className={`card_title`}>KHI - ISB</span>
                            <br />
                            <small className={styles.text_light}>One Way</small>
                          </div>
                        </div>
                      </div>

                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={`${styles.toggle_btn_container} d-flex align-item-center justify-content-between w-100`}
                            >
                              <span className={`${styles.line}`}></span>
                              <span>
                                <Image
                                  className={`${styles.imgicon} ${
                                    open ? "rotate-180 transform" : ""
                                  }  `}
                                  src={images["down_arrow.svg"]}
                                  alt=""
                                />
                              </span>
                            </Disclosure.Button>

                            {/* <div className={``}> */}
                            <Disclosure.Panel className="pb-3 text-sm text-gray-500">
                              <div className={styles.collapse}>
                                <div className={styles.fare_info}>
                                  <div className={`fare_info_header   `}>
                                    <span className={`heading`}>
                                      Fare Summary
                                    </span>
                                    <div className={`small-text`}>
                                      Adult (1 traveler)
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between rating ">
                                    <span className={`small-text`}>
                                      Base Fare:{" "}
                                    </span>

                                    <span className="flight_price ">
                                      <small>PKR</small> <b>17,305</b>
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between rating ">
                                    <span className={`small-text`}>Tax: </span>

                                    <span className="flight_price semi-bold ">
                                      <small>PKR</small>
                                      <b>2,145</b>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      <div className="d-flex justify-content-between rating ">
                        <span className={`small-text`}>Sub-Total </span>

                        <span className="flight_price ">
                          <small>PKR</small>
                          19,450
                        </span>
                      </div>
                      <div className="d-flex justify-content-between rating ">
                        <span className={`small-text`}>Hot Deals </span>

                        <span className={`green_text flight_price `}>
                          <small>PKR</small> <b>2,076</b>
                        </span>
                      </div>
                      <div className="d-flex justify-content-between rating ">
                        <span className={`small-text`}>
                          Merchant Charge:{" "}
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="icon-img w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                              />
                            </svg>
                          </span>{" "}
                        </span>

                        <span className="flight_price ">
                          <small>PKR</small> <b>365</b>
                        </span>
                      </div>
                    </div>

                    <div className={` ${styles.total_price}`}>
                      <div className={styles.price_wrapper}>
                        <div>
                          <span className={` ${styles.text_green}`}>
                            You Pay
                          </span>
                          <span className={` ${styles.grey_text}`}>
                            (for 1 Traveler)
                          </span>
                        </div>
                        <span className={`${styles.text_green}`}>
                          PKR 17,739
                        </span>
                      </div>
                      <div className={styles.price_wrapper}>
                        <span className={`green_text `}>You Save</span>
                        <span className={`green_text`}>PKR 17,739</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
