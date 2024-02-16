import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React from "react";
// import { Fragment } from "react";
import { images } from "../../lib/images";
import styles from "../../styles/checkout/checkout.module.scss";

const SingleFlight = () => {
  return (
    <section className={styles.bg}>
      <div className="container ">
        <div className={` grid gap-5 grid-cols-4`}>
          <div className=" grid gap-2 col-span-3">
            <div className={styles.card}>
              <div className={`${styles.leftside}  col-span-1`}>
                <Image
                  className={` ${styles.iconimg} `}
                  src={images["credit-card-icons.png"]}
                  alt=""
                />

                <div className={`${styles.debitcard} rating ${styles.active} `}>
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
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </span>
                  <span> Credit Card / Debit Card</span>
                </div>
                <div className={`${styles.debitcard} rating `}>
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
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <span> Net Banking</span>
                </div>
                <div className={`${styles.debitcard} rating `}>
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
                        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                      />
                    </svg>
                  </span>
                  <span> Bank Tranfer</span>
                </div>
                <div className={`${styles.debitcard} rating`}>
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
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </span>
                  <span> International Banking</span>
                </div>
                <div></div>
              </div>
              <div className={`${styles.rightside} mt-3 col-span-2`}>
                <form action="">
                  <h2 className="heading">Payment Information</h2>

                  <p className="rating">Cardholder Name</p>
                  <input
                    type="text"
                    className={styles.inputbox}
                    name="name"
                    required
                  />
                  <p className="rating">Card Number</p>
                  <input
                    type="number"
                    className={styles.inputbox}
                    name="card_number"
                    id="card_number"
                    required
                  />

                  <p className="rating">Card Type</p>
                  <select
                    className={styles.inputbox}
                    name="card_type"
                    id="card_type"
                    required
                  >
                    <option value="">--Select a Card Type--</option>
                    <option value="Visa">Visa</option>
                    <option value="RuPay">RuPay</option>
                    <option value="MasterCard">MasterCard</option>
                  </select>
                  <div className={styles.expcvv}>
                    <p className={`rating ${styles.expcvv_text}`}>Expiry</p>
                    <input
                      type="date"
                      className={styles.inputbox}
                      name="exp_date"
                      id="exp_date"
                      required
                    />

                    <p className={`rating {styles.expcvv_text2}`}>CVV</p>
                    <input
                      type="password"
                      className={styles.inputbox}
                      name="cvv"
                      id="cvv"
                      required
                    />
                  </div>
                  <p></p>
                  <button type="submit" className={styles.button}>
                    CheckOut
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className={`${styles.time_block}`}>
              <div className={`${styles.green_block}`}>
                <span className="rating">Book now before tickets run out!</span>
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
                      00 :<span className={`${styles.time} rating`}>min</span>
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
                        <small className={styles.rent}>One Way</small>
                      </div>
                    </div>
                  </div>

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`d-flex w-full justify-between rounded-lg bg-purple-100  text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                        >
                          <Image
                            className={`mx-auto ${
                              open ? "rotate-180 transhtmlForm" : ""
                            }  `}
                            src={images["down_arrow.svg"]}
                            alt=""
                          />
                        </Disclosure.Button>

                        {/* <div className={``}> */}
                        <Disclosure.Panel className=" pt-4 pb-3 text-sm text-gray-500">
                          <div className={styles.collapse}>
                            <div className={styles.fare_info}>
                              <div className={`fare_info_header   `}>
                                <span className={`heading`}>Fare Summary</span>
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
                      <span className={` ${styles.text_green}`}>You Pay</span>
                      <span className={` ${styles.grey_text}`}>
                        (for 1 Traveler)
                      </span>
                    </div>
                    <span className={`${styles.text_green}`}>PKR 17,739</span>
                  </div>
                  <div className={styles.price_wrapper}>
                    <span className={`green_text`}>You Save</span>
                    <span className={`green_text`}>PKR 17,739</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleFlight;
