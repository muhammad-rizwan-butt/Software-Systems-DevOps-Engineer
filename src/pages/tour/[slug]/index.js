import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import ImageGallery from "react-image-gallery";
import style from "../../../styles/SingleTour.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector } from "react-redux";
import { Axios, baseURL } from "../../../axios/axios";
import { Layout } from "../../../components/layout/layout";
import { Day } from "../../../components/ui/cards/day2/Day";
import { TourBooking } from "../../../components/ui/cards/tourcard/TourBooking";
import { images } from "../../../lib/images";

export async function getServerSideProps({ params }) {
  let { data } = await Axios.get(`/tour/single-tour/${params?.slug}`);

  return { props: { tour: data } };
}

const SingleTour = ({ tour }) => {
  const { asPath } = useRouter();
  const { user } = useSelector((state) => state?.auth);

  let tourImages = tour?.images?.map((image) => {
    return {
      original: `${baseURL}${image}`,
      thumbnail: `${baseURL}${image}`,
    };
  });
  return (
    <>
      <div className="bg py-3">
        <section className="my-4 ">
          <div className="container">
            <div className="grid grid-cols-5 bg-white rounded">
              <div className="col-span-3  border-radius-4 tour__image-gallery">
                <ImageGallery
                  items={tourImages}
                  showPlayButton={false}
                  thumbnailPosition={"right"}
                  originalHeight={400}
                  thumbnailHeight={200}
                  originalClass={style.image}
                  height={400}
                />
              </div>
              <div className="p-3 col-span-2">
                <h5 className="heading mt-2">{tour?.title}</h5>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <div
                    className={`rating d-flex align-items-center gap-1 border-radius-4 py-1 px-1`}
                  >
                    <Image
                      src={images["location.svg"]}
                      alt="location"
                      className={`star_img`}
                    />
                    <a
                      href="https://goo.gl/maps/ZP7DRb4XDrKWAdQB9"
                      className="green_text"
                    >
                      {tour?.location?.destination}
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7050661.956303697!2d68.9966984!3d30.3593034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1695309976008!5m2!1sen!2s"
                    width="90%"
                    height="120"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="rating small-text d-flex align-items-center gap-2 mt-4">
                  <Image src={images["calander.svg"]} alt="location" />
                  <span className="green_text">
                    {" "}
                    {tour?.totalDays} {tour?.totalDays > 1 ? "Days" : "Day"}
                  </span>
                  <div
                    className={`green_text d-flex align-items-center gap-2   `}
                  >
                    <Image src={images["couple.svg"]} alt="location" />
                    <span> From 3 to 5 people</span>
                  </div>
                </div>
                <div className="mt-2">
                  <h5 className="title card_title">Requirements</h5>
                  <div className=" gap-2  mt-3">
                    <div className={`rating  gap-1   py-1 px-4`}>
                      <li> Covid-19 Vaccination card</li>
                    </div>
                    <div className={`rating gap-1 py-1 px-4  `}>
                      <li> National ID card</li>
                    </div>
                    <div className={`rating gap-1  py-1 px-4  `}>
                      <li> Face mask</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------next------------- */}

        <div className="container">
          <div className="bg-white rounded">
            <div className={`  ${style.details_singlepage_left}`}>
              <div className={`${style.tabs} d-flex gap-5`}>
                <Link
                  className={`${style.tab} mt-3 ${
                    asPath.includes("overview") ? style.active : ""
                  }`}
                  href="#overview"
                >
                  Details
                </Link>
                <Link
                  className={`${style.tab} mt-3 ${
                    asPath.includes("itinerary") ? style.active : ""
                  }`}
                  href="#itinerary"
                >
                  Itinerary
                </Link>
                <Link
                  className={`${style.tab} mt-3 ${
                    asPath.includes("options") ? style.active : ""
                  }`}
                  href="#options"
                >
                  Options
                </Link>
                <Link
                  className={`${style.tab} mt-3 ${
                    asPath.includes("policy") ? style.active : ""
                  }`}
                  href="#policy"
                >
                  Policy
                </Link>
              </div>

              <div className={style.underline}></div>
            </div>
            <div className={` grid grid-cols-5 ${style.details_singlepage}`}>
              <div
                className={`  ${style.details_singlepage_left}  col-span-3 mt-3 `}
              >
                <Disclosure as="div" className=" py-1">
                  {({ open = true }) => (
                    <div id="overview" className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon_world.svg"]}
                            alt=""
                          />
                          Overview
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel className="">
                          <p className={style.overview_paragraph}>
                            {tour?.details?.overview}
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure as="div" className=" py-1">
                  {({ open }) => (
                    <div className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-location.svg"]}
                            alt=""
                          />
                          Location
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <p className={`  ${style.pic_up_title}`}>
                            {" "}
                            Pick-up:
                            <span className={style.pickup_paragraph}>
                              {tour?.location?.departure}
                            </span>
                          </p>
                          <p className={`  ${style.pic_up_title}`}>
                            {" "}
                            Around:{" "}
                            <span className={style.pickup_paragraph}>
                              {tour?.details?.around}
                            </span>
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure as="div" className={`${style.Disclosure} py-1`}>
                  {({ open }) => (
                    <div className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-clock.svg"]}
                            alt=""
                          />
                          Timing
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <p className={`  ${style.pic_up_title}`}>
                            {" "}
                            Duration:
                            <span className={style.pickup_paragraph}>
                              {tour?.totalDays}{" "}
                              {tour?.totalDays > 1 ? "Days" : "Day"}
                            </span>
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure as="div" className={`${style.Disclosure} py-1`}>
                  {({ open }) => (
                    <div id="itinerary" className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-itinair.svg"]}
                            alt=""
                          />
                          Itinerary
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className={style.location_all_details}>
                        <Tabs
                          defaultActiveKey="day0"
                          id="uncontrolled-tab-example"
                          data-v-d27cb9aa
                          className={`mb-3  ${style.day_tabs}`}
                        >
                          {tour?.itinerary?.map((item, i) => {
                            return (
                              <Tab
                                data-v-d27cb9aa
                                className={`${style.day_title}`}
                                eventKey={`day${i}`}
                                title={`Day ${i + 1}`}
                                key={i}
                              >
                                <Day item={item} />
                              </Tab>
                            );
                          })}
                        </Tabs>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure as="div" className={`${style.Disclosure} py-1`}>
                  {({ open }) => (
                    <div className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-users_person.svg"]}
                            alt=""
                          />
                          Inclusion & Exclusion
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <div>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: tour?.inclusionAndexclusion,
                              }}
                            ></p>
                          </div>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure as="div" className={`${style.Disclosure} py-1`}>
                  {({ open }) => (
                    <div className="dropdown_cta" id="options">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon_articals.svg"]}
                            alt=""
                          />
                          Description
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <p className={style.overview_paragraph}>
                            {tour?.description}
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>

                <Disclosure
                  as="div"
                  id="policy"
                  className={`${style.Disclosure} py-1`}
                >
                  {({ open }) => (
                    <div className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-warning.svg"]}
                            alt=""
                          />
                          Additional Information
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <p
                            dangerouslySetInnerHTML={{
                              __html: tour?.additionalInfo,
                            }}
                          ></p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>
                <div className={style.underline}></div>
                <Disclosure
                  as="div"
                  id="policy"
                  className={`${style.Disclosure} py-1`}
                >
                  {({ open }) => (
                    <div className="dropdown_cta">
                      <Disclosure.Button
                        className={`d-flex align-item-center justify-content-between w-100  ${style.filter_item} `}
                      >
                        <div
                          className={` d-flex  align-item-center gap-3  ${style.overwiew_details}`}
                        >
                          <Image
                            className={style.world_icon_overwiew}
                            src={images["icon-warning.svg"]}
                            alt=""
                          />
                          Policy
                        </div>
                        <Image
                          className={`${open ? "rotate-180 transform" : ""}  `}
                          src={images["down_arrow.svg"]}
                          alt=""
                        />
                      </Disclosure.Button>
                      <div>
                        <Disclosure.Panel
                          className={style.location_all_details}
                        >
                          <p
                            dangerouslySetInnerHTML={{
                              __html: tour?.policy,
                            }}
                          ></p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  )}
                </Disclosure>

                <div className={style.underline}></div>
              </div>
              {tour?.vendor !== user?._id && <TourBooking tour={tour} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SingleTour.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default SingleTour;
