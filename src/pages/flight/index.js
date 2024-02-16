import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { TiWeatherShower } from "react-icons/ti";
import { WiNightAltSnowWind } from "react-icons/wi";
import { Layout } from "../../components/layout/layout";
import { FlightsDetailCard } from "../../components/ui/cards/flights/FlightsDetailCard";
import { FlightSearchCard } from "../../components/ui/cards/home/FlightSearchCard";
import { images } from "../../lib/images";
import style from "../../styles/Flight.module.scss";

const Index = () => {
  return (
    <div className={style.flight__container}>
      <div className={style.flight__header}>
        <div className="container">
          <FlightSearchCard singlePage={true} />
        </div>
      </div>
      <div className="container">
        <div id="flightfilter" className={style.mobile_filter}>
          <div className={style.meta}>
            <div className={`${style.result_count}`}>
              <div className={`${style.filter_main_wrapper} `}>
                <div className={style.filter__text}>
                  <Image src={images["filter_fill.svg"]} alt="filter" />
                  <span>More Filters</span>
                </div>
                <div className={style.stops_visible}>
                  <span className={style.stop_text}>Stops</span>
                  <div className={style.demo_inlines_pacing}>
                    <div className={style.brand_block_checkbox}>
                      <input
                        type="checkbox"
                        className={style.custom_control_input}
                        value="0"
                        id="__BVID__171"
                      />
                      <label
                        className={style.custom_control_label}
                        htmlFor="__BVID__171"
                      >
                        <div className={style.input_content}>
                          <span className={style.text}>0</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={style.demo_inlines_pacing}>
                    <div className={style.brand_block_checkbox}>
                      <input
                        type="checkbox"
                        className={style.custom_control_input}
                        value="1"
                        id="__BVID__172"
                      />
                      <label
                        className={style.custom_control_label}
                        htmlFor="__BVID__172"
                      >
                        <div className={style.input_content}>
                          <span className={style.text}>1</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={style.demo_inlines_pacing}>
                    <div className={style.brand_block_checkbox}>
                      <input
                        type="checkbox"
                        className={style.custom_control_input}
                        value="2"
                        id="__BVID__173"
                      />
                      <label
                        className={style.custom_control_label}
                        htmlFor="__BVID__173"
                      >
                        <div className={style.input_content}>
                          <span className={style.text}>2</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={style.toggle_filter}>
                  <div className={style.custom_switch}>
                    <input
                      type="checkbox"
                      className={style.custom_control_input}
                      value="1"
                      id="__BVID__174"
                    />
                    <label
                      className={style.custom_control_label}
                      htmlFor="__BVID__174"
                    >
                      Partially Refundable
                    </label>
                  </div>
                </div>
              </div>

              <Disclosure className={``}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className=" ">
                      {/* <div className={style.toggle_accordion}> */}
                      <div className={`${style.toggle_btn_container}`}>
                        <span className={`${style.layover}`}>Layover Time</span>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                        {/* <ChevronzIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500 ${style.icon} `} /> */}
                      </div>
                      {/* </div> */}
                    </Disclosure.Button>
                    <Disclosure.Panel className={`container`}>
                      <div className={style.flight_wrapper}>
                        <div>
                          <span className={style.stop_text}>Stops</span>
                          <div className={style.stops_visible}>
                            <div className={style.demo_inlines_pacing}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="0"
                                  id="__BVID__171"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__171"
                                >
                                  <div className={style.input_content}>
                                    <span className={style.text}>0</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className={style.demo_inlines_pacing}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="1"
                                  id="__BVID__172"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__172"
                                >
                                  <div className={style.input_content}>
                                    <span className={style.text}>1</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className={style.demo_inlines_pacing}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="2"
                                  id="__BVID__173"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__173"
                                >
                                  <div className={style.input_content}>
                                    <span className={style.text}>2</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="fare-type">
                            <h5 className={style.stop_text}>Fare Type:</h5>
                            <div className={style.toggle_filter}>
                              <div className={style.custom_switch}>
                                <input
                                  type="checkbox"
                                  className={style.control_input}
                                  value="1"
                                  id="__BVID__174"
                                />
                                <label
                                  className={style.control_label}
                                  htmlFor="__BVID__174"
                                >
                                  Partially Refundable
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="price-range">
                            <h5 className={`${style.stop_text}`}>
                              Price Range
                            </h5>
                            <div className="range-wrapper">
                              <div
                                data-v-10291e3c=""
                                className="range-container"
                              >
                                <div
                                  data-v-10291e3c=""
                                  className="input-range-wrapper"
                                >
                                  <input
                                    data-v-10291e3c=""
                                    type="range"
                                    min="17149"
                                    max="57149"
                                    step="1000"
                                  />
                                  <input
                                    data-v-10291e3c=""
                                    type="range"
                                    min="17149"
                                    max="57149"
                                    step="1000"
                                  />
                                </div>
                                <div
                                  data-v-10291e3c=""
                                  className="number-value"
                                >
                                  <span
                                    data-v-10291e3c=""
                                    className="min-amount"
                                  >
                                    PKR 17,149
                                  </span>
                                  <span
                                    data-v-10291e3c=""
                                    className="max-amount"
                                  >
                                    PKR 57,149
                                  </span>
                                </div>
                                <div
                                  data-v-10291e3c=""
                                  className="number-value pt-0"
                                >
                                  <span
                                    data-v-10291e3c=""
                                    className="min-amount text"
                                  >
                                    Min
                                  </span>
                                  <span
                                    data-v-10291e3c=""
                                    className="max-amount text"
                                  >
                                    Max
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="separator"></div>
                          </div>
                        </div>
                        {/* -------------Schedule-------- */}
                        <div className="">
                          <h5 className={style.stop_text}>Schedule</h5>
                          <span className={style.text}>Onward Depart Time</span>

                          <div className={style.stops_visible}>
                            <div className={`${style.demo_inlines_pacing}`}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="0"
                                  id="__BVID__171"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__171"
                                >
                                  <div className={style.input_content}>
                                    <TiWeatherShower size={20} color="green" />
                                    <span className={style.text}>00-06</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className={`${style.demo_inlines_pacing} `}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="0"
                                  id="__BVID__171"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__171"
                                >
                                  <div className={style.input_content}>
                                    <MdOutlineWbSunny size={20} color="green" />
                                    <span className={style.text}>06-12</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className={`${style.demo_inlines_pacing} `}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="0"
                                  id="__BVID__171"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__171"
                                >
                                  <div className={style.input_content}>
                                    <IoPartlySunnyOutline
                                      size={20}
                                      color="green"
                                    />
                                    <span className={style.text}>12 - 18</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className={`${style.demo_inlines_pacing} `}>
                              <div className={style.brand_block_checkbox}>
                                <input
                                  type="checkbox"
                                  className={style.custom_control_input}
                                  value="0"
                                  id="__BVID__171"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__171"
                                >
                                  <div className={style.input_content}>
                                    <WiNightAltSnowWind
                                      color="green"
                                      size={20}
                                    />
                                    <span className={style.text}>18+</span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <span className={`${style.stop_text} `}>
                              Layover Time
                            </span>

                            <div className={style.stops_visible}>
                              {/* layoverr---------- */}

                              <div className={`${style.demo_inlines_pacing} `}>
                                <div className={style.brand_block_checkbox}>
                                  <input
                                    type="checkbox"
                                    className={style.custom_control_input}
                                    value="0"
                                    id="__BVID__171"
                                  />
                                  <label
                                    className={style.custom_control_label}
                                    htmlFor="__BVID__171"
                                  >
                                    <div className={style.content}>
                                      <span className={style.text}>
                                        0h - 5h
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className={`${style.demo_inlines_pacing} `}>
                                <div className={style.brand_block_checkbox}>
                                  <input
                                    type="checkbox"
                                    className={style.custom_control_input}
                                    value="0"
                                    id="__BVID__171"
                                  />
                                  <label
                                    className={style.custom_control_label}
                                    htmlFor="__BVID__171"
                                  >
                                    <div className={style.content}>
                                      <span className={style.text}>
                                        5h - 10h
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>

                              <div className={`${style.demo_inlines_pacing} `}>
                                <div className={style.brand_block_checkbox}>
                                  <input
                                    type="checkbox"
                                    className={style.custom_control_input}
                                    value="0"
                                    id="__BVID__171"
                                  />
                                  <label
                                    className={style.custom_control_label}
                                    htmlFor="__BVID__171"
                                  >
                                    <div className={style.input_content}>
                                      <span className={style.text}>
                                        10h - 15h
                                      </span>
                                    </div>
                                  </label>
                                </div>
                              </div>

                              <div className={`${style.demo_inlines_pacing} `}>
                                <div className={style.brand_block_checkbox}>
                                  <input
                                    type="checkbox"
                                    className={style.custom_control_input}
                                    value="0"
                                    id="__BVID__171"
                                  />
                                  <label
                                    className={style.custom_control_label}
                                    htmlFor="__BVID__171"
                                  >
                                    <div className={style.content}>
                                      <span className={style.text}>15h+</span>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="airlines">
                          <h5 className={style.stop_text}>Airlines</h5>
                          <div className="airlines-container">
                            <div
                              className={`${style.control}  custom-checkbox`}
                            >
                              <input
                                type="checkbox"
                                className={style.input}
                                value="9P"
                                id="__BVID__226"
                              />
                              <label
                                className={style.custom_control_label}
                                htmlFor="__BVID__226"
                              >
                                <span className={style.text}>Fly Jinnah</span>
                              </label>
                            </div>
                            <div
                              className={`${style.control}  custom-checkbox`}
                            >
                              <input
                                type="checkbox"
                                className={style.input}
                                value="9P"
                                id="__BVID__226"
                              />
                              <label
                                className={style.custom_control_label}
                                htmlFor="__BVID__226"
                              >
                                <span className={style.text}>Air Sial</span>
                              </label>
                            </div>
                            <div
                              className={`${style.control}  custom-checkbox`}
                            >
                              <input
                                type="checkbox"
                                className={style.input}
                                value="9P"
                                id="__BVID__226"
                              />
                              <label
                                className={style.custom_control_label}
                                htmlFor="__BVID__226"
                              >
                                <span className={style.text}>Air Blue</span>
                              </label>
                            </div>
                            <div
                              className={`${style.control}  custom-checkbox`}
                            >
                              <input
                                type="checkbox"
                                className={style.input}
                                value="9P"
                                id="__BVID__226"
                              />
                              <label
                                className={style.custom_control_label}
                                htmlFor="__BVID__226"
                              >
                                <span className={style.text}>
                                  Pakistan International Airlines
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="layovers">
                          <div className="airport">
                            <h5 className={style.stop_text}>Layover Airport</h5>
                            <div className="airport-container">
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="MUX"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>
                                    Multan International Airport (MUX)
                                  </span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="UET"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>
                                    Quetta International Airport (UET)
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="aircraft-alliance">
                          <div className="aircraft-wrapper">
                            <h5 className={style.stop_text}>Aircraft</h5>
                            <div className="aircraft-names">
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="320"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>320</span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="9P"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>320-200</span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="32A"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>32A</span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="A320"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>A320</span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="320"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>
                                    AIRBUS A320-200
                                  </span>
                                </label>
                              </div>
                              <div
                                className={`${style.control}  custom-checkbox`}
                              >
                                <input
                                  type="checkbox"
                                  className={style.input}
                                  value="9P"
                                  id="__BVID__226"
                                />
                                <label
                                  className={style.custom_control_label}
                                  htmlFor="__BVID__226"
                                >
                                  <span className={style.text}>ATR</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              <div className="reset-filter-btn ml-auto">
                <button type="button" className="btn btn-secondary btn-block">
                  Reset Filters
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-xl-4 grid-cols-lg-4 grid-cols-1 gap-3`}>
          <div className="col-span-xl-3 col-span-lg-3 ">
            <div className={style.sorting_wrapper}>
              <label className={style.sorting_checkbox}>
                <input
                  type="radio"
                  name="order-by"
                  defaultValue="total_price"
                />
                <div className={style.sorting_text_custom}>
                  <span className={style.sorting_title}>Cheapest</span>
                  <span className={style.sorting_sub_text}>
                    Showing the cheapest flights in ascending order
                  </span>
                </div>
              </label>
              <label className={style.sorting_checkbox}>
                <input
                  type="radio"
                  name="order-by"
                  defaultValue="total_flight_time"
                />
                <div className={style.sorting_text_custom}>
                  <span className={style.sorting_title}>Fastest</span>
                  <span className={style.sorting_sub_text}>
                    Click to see the fastest flights in ascending order
                  </span>
                </div>
              </label>
            </div>
            <div className={style.flightDetail__list}>
              {[...new Array(10)].map((_, i) => (
                <FlightsDetailCard key={i} />
              ))}
            </div>
          </div>
          <div className={`${style.support_wrapper} box-shadow`}>
            <div className={`${style.support_text}`}>
              <span>Need Help?</span>
            </div>
            <div className={style.support_body}>
              <div className={`${style.support_content}`}>
                <Image src={images["support_iconn.svg"]} alt="" />
                <Link href="tel:+923330596362">+92 33 30596362</Link>
              </div>
              <div className={`${style.support_content}  `}>
                <Image src={images["icon_messenger.svg"]} alt="" />

                <Link href="https://siyaahat.pk/" target="_blank">
                  m.me/SiyaahatPk{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Index;
