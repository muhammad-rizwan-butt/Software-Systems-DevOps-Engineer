import { Disclosure, Tab } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { images } from "../../../../lib/images";
import style from "../../../../styles/Flight.module.scss";
// import { ChevronUpIcon } from '@heroicons/react/20/solid';

export const FlightsDetailCard = () => {
  return (
    <div className={style.flight_card}>
      <div className={`d-flex ${style.flight_airlines_wrapper}`}>
        <div className={style.airline_info_container}>
          <div className={style.flight_airlines_info}>
            <div className={style.airplane_info}>
              <div className={style.image_placeholder}>
                <Image src={images["fly_jinnah.png"]} alt="" />{" "}
              </div>
              <div className={style.airplane_info_text}>
                <span className={style.airplanename}>Fly Jinnah</span>
              </div>
            </div>
            <div>
              <div className={style.flight_time}>
                <div className={style.start_time}>
                  <span className={style.time_text}>07:05</span>
                  <span className={style.destination_text}>KHI</span>
                </div>
                <div className={style.stops_info}>
                  <div className={style.stop_numbers}>
                    <span>Non_stop</span>
                  </div>
                  <div className={style.arrow_pointer} />
                </div>
                <div className={style.end_time}>
                  <span className={style.time_text}>09:05</span>
                  <span className={style.destination_text}>ISB</span>
                </div>
              </div>
            </div>
            <div className={style.flight_duration_text}>
              <span>2h 55m</span>
            </div>
          </div>
        </div>
        <div className={style.price_info_wrapper}>
          <div className={style.price_texts}>
            <div>
              <span className={style.discount_price}>PKR 17,149</span>
            </div>
          </div>
          <Link href="/singalflight" className={style.selection_btn}>
            <button type="button">Select</button>
          </Link>
        </div>
      </div>
      <div className={style.flight_details_wrapper}>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <div className={style.toggle_accordion}>
                  <div className={style.toggle_btn_container}>
                    <span
                      className={`${style.flight_detail_toggle} ${style.active}`}
                    >
                      Flight Details
                    </span>
                    <Image
                      className={`${open ? "rotate-180 transform" : ""}  `}
                      src={images["down_arrow.svg"]}
                      alt=""
                    />
                    {/* <ChevronzIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500 ${style.icon} `} /> */}
                  </div>
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                <div className={style.collapse}>
                  <div className={style.detail_accordion}>
                    <div className={style.flight_detail_section}>
                      <h4>Flight Details</h4>
                      <div>
                        <div className={style.flight_tab}>
                          <ul className={style.flight_tab_wrapper}>
                            <li
                              className={`${style.full_border_radius} ${style.active}`}
                            >
                              KHI - ISB
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div className={style.flight_airlines_info}>
                            <div className={style.airplane_info_wrapper}>
                              <div className={style.airplane_info}>
                                <div className={style.image_placeholder}>
                                  <Image
                                    src={images["fly_jinnah.png"]}
                                    className={style.flight_airlines_logo}
                                    alt=""
                                  />
                                </div>
                                <div className={style.airplane_info_text}>
                                  <span className={style.airplane_name}>
                                    Fly Jinnah
                                  </span>
                                  <span className={style.airplane_model}>
                                    9P 670 | Airbus 320_200
                                  </span>
                                  {/*********/}
                                </div>
                              </div>
                              <div className={style.airplane_amenities}>
                                <span className={style.flight_type}>
                                  (Economy)
                                </span>
                                <div className={style.amenity_icons} />
                              </div>
                            </div>
                            <div
                              className={`${style.detail_time} ${style.flight_time}`}
                            >
                              <div className={style.start_time}>
                                <span className={style.time_text}>07:05</span>
                                <span className={style.day_text}>
                                  Wed, 24 May,
                                </span>
                                <span className={style.day_text}>2023</span>
                                <span className={style.destination_text}>
                                  KHI
                                </span>
                              </div>
                              <div className={style.stops_info}>
                                <div className={style.arrow_pointer} />
                                <div className={style.stop_names}>
                                  <span className={style.duration_text}>
                                    2h
                                  </span>
                                </div>
                              </div>
                              <div className={style.end_time}>
                                <span className={style.time_text}>09:05</span>
                                <span className={style.day_text}>
                                  Wed, 24 May,
                                </span>
                                <span className={style.day_text}>2023</span>
                                <span className={style.destination_text}>
                                  ISB
                                </span>
                              </div>
                            </div>
                            {/******************/}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.rules_section}>
                      <div className={style.rule_header}>
                        <Tab.Group>
                          <Tab.List className={`${style.rules_tab} box-shadow`}>
                            <Tab as={Fragment}>
                              {({ selected }) => (
                                <button
                                  className={`${style.tab_btn} ${
                                    selected ? style.selected : ""
                                  }`}
                                >
                                  Baggage
                                </button>
                              )}
                            </Tab>
                            <Tab as={Fragment}>
                              {({ selected }) => (
                                <button
                                  className={`${style.tab_btn}  ${
                                    selected ? style.selected : ""
                                  }`}
                                >
                                  Fare
                                </button>
                              )}
                            </Tab>
                            <Tab as={Fragment}>
                              {({ selected }) => (
                                <button
                                  className={`${style.tab_btn}  ${
                                    selected ? style.selected : ""
                                  }`}
                                >
                                  Policy
                                </button>
                              )}
                            </Tab>
                          </Tab.List>

                          <Tab.Panels className={style.rules_content}>
                            <Tab.Panel>
                              <div className={style.baggage_info}>
                                <div
                                  className={`grid grid-cols-3 ${style.baggage_header_info}`}
                                >
                                  {/* div */}
                                  <span className={` green_text`}>Flight</span>
                                  <span className={` green_text `}>Cabin</span>
                                  <span className={` green_text `}>
                                    Check_in
                                  </span>
                                </div>
                                <div
                                  className={`grid grid-cols-3 ${style.baggage_header_info}`}
                                >
                                  <span className={style.header_text}>
                                    KHI - ISB
                                  </span>
                                  <span className={`${style.header_text}`}>
                                    10 Kg
                                  </span>

                                  <span className={`${style.header_text} `}>
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
                                  <span className={`green_text`}>Tax:</span>
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
                                  <div className={`${style.fare_rule_header} `}>
                                    <h6>KHI_ISB</h6>
                                  </div>
                                  <div className="fare_rule_content rating">
                                    <div className={`green_text`}>
                                      <span>Cancellation</span>
                                    </div>
                                    <div className={`${style.fee_content}`}>
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
                                    <div className={`${style.fee_content}`}>
                                      <span>
                                        Re_issue Fee = Airlines Fee + Fare
                                        Difference + Siyaahat Fee
                                      </span>
                                    </div>
                                    <span
                                      className={`cancellation_note green_text`}
                                    >
                                      *The airlines fee is indicative and per
                                      person. Convenience fee is non_refundable.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Tab.Panel>
                          </Tab.Panels>
                        </Tab.Group>
                      </div>

                      <div className={` ${style.total_price}`}>
                        <div className={style.price_wrapper}>
                          <div>
                            <span className={` ${style.text_green}`}>
                              Total
                            </span>
                            <span className={` ${style.grey_text}`}>
                              (1 Traveler)
                            </span>
                          </div>
                          <span className={`${style.text_green}`}>
                            PKR 17,149
                          </span>
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
    </div>
  );
};
