import Image from "next/image";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { Room_Gallery } from "../../data/RoomGallery";
import { images } from "../../lib/images";
// import style from "../../styles/pages/singlehotel/singlehotel.module.scss";
import Link from "next/link";
import { Layout } from "../../components/layout/layout";
import { RoomCard } from "../../components/ui/cards/roomcard/RoomCard";

const Index = () => {
  const [activeItem, setActiveItem] = useState("rooms");
  return (
    <>
      <section className="my-4">
        <div className="container">
          <div className="grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-3 gap-2">
            <div className="col-span-3 border-radius-4">
              <ImageGallery
                items={Room_Gallery}
                showPlayButton={false}
                thumbnailPosition={"right"}
              />
            </div>
            <div className="px-1 col-span-xl-2 col-span-lg-2 col-span-3">
              <h5 className="title">Magpie Lodge</h5>
              <div className="d-flex align-items-center gap-2 mt-4">
                <div
                  className={`rating d-flex align-items-center gap-1 border border-radius-4 py-1 px-1`}
                >
                  <Image
                    src={images["star.svg"]}
                    alt="star"
                    className={`star_img`}
                  />
                  <span> 4.5 Star</span>
                </div>
                <div className={`rating d-flex align-items-center gap-1   `}>
                  <Image src={images["location.svg"]} alt="location" />
                  <span> Nathia Gali Abbottabad</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-4">
                <span className="small-text"> Whats Nearby</span>

                <div className={`rating d-flex align-items-center gap-1   `}>
                  <Image src={images["location.svg"]} alt="location" />
                  <span> Nathia Gali Abbottabad</span>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="title">Facilities</h5>
                <div className="d-flex align-items-center gap-2 flex-wrap  mt-3">
                  <div
                    className={`rating d-flex align-items-center gap-1   py-1 px-1`}
                  >
                    <Image
                      src={images["langra.svg"]}
                      alt="langra"
                      className={`star_img`}
                    />
                    <span> Accessible Bathroom</span>
                  </div>
                  <div className={`rating d-flex align-items-center gap-1   `}>
                    <Image src={images["cold.svg"]} alt="air condition" />
                    <span> Air Conditioning</span>
                  </div>
                  <div className={`rating d-flex align-items-center gap-1   `}>
                    <Image src={images["couple.svg"]} alt="couple" />
                    <span> Couple Friendly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------details----------------- */}
      <section className="my-4">
        <div className="container">
          <div
            className={` content-container px-3 border-radius-4 d-flex align-items-center gap-md-5 gap-3 mb-2`}
          >
            <button
              className={`menuItem ${
                activeItem == "rooms" ? "active" : ""
              }   py-3 `}
              onClick={() => setActiveItem("rooms")}
            >
              Rooms
            </button>
            <button
              className={` menuItem ${
                activeItem == "nearby" ? "active" : ""
              }   py-3 `}
              onClick={() => setActiveItem("nearby")}
            >
              Whats Nearby
            </button>
            <button
              className={`menuItem ${
                activeItem == "facility" ? "active" : ""
              }   py-3 `}
              onClick={() => setActiveItem("facility")}
            >
              Facilities
            </button>
            <button
              className={`menuItem ${
                activeItem == "policy" ? "active" : ""
              }   py-3 `}
              onClick={() => setActiveItem("policy")}
            >
              Policy
            </button>
          </div>
        </div>
      </section>
      {/* ------------------------------hotel desc---------------- */}
      <section className="my-4">
        <div className="container">
          <div className="content-container px-3 py-4">
            <h5 className="card_title mb-2">Hotel Description</h5>
            <div className="d-flex align-items-center gap-lg-3 gap-2 my-3 flex-wrap">
              <p className="label-title"> No Of Rooms : 30</p>
              <p className="label-title"> No Of Floors : 3</p>
              <p className="label-title"> Year of construction: 1999</p>
            </div>
            <p className="secondary_info">
              Adjacent to Civil Hospital, Hotel Elites offers luxury
              accommodations in Nathia Gali with the popular tourist Pipeline
              Track, Mushkpuri, Ayubia, and Lalazaar nearby. The hotel has fully
              furnished rooms and all modern amenities like a flat-screen TV,
              wifi, and more. Enjoy complimentary breakfast or tasty meals from
              one of the three on-site restaurants featuring different cuisines.
              There is a pool table, children’s playground, barbeque, various
              leisure activities like musical nights and bonfires, and a terrace
              overlooking the stunning views of the surrounding landscape for
              guests to spend quality time during their stay or tasty meals from
              one of the three on-site restaurants featuring different cuisines.
              There is a pool table, children’s playground, barbeque, various
              leisure activities like musical nights and bonfires, and a terrace
              overlooking the stunning views of the surrounding landscape for
              guests to spend quality time during their stay.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------room details-------------------- */}
      <section className="my-4">
        <div className="container">
          <div className="grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-2 gap-2 my-2">
            <div className="col-span-2  grid grid-cols-1 gap-2">
              {[...new Array(5)].map((_, i) => (
                <RoomCard key={i} />
              ))}
            </div>

            <div className="border border-radius-4 h-370 col-span-xl-1 col-span-lg-1 col-span-2">
              <h4 className="card_header px-3 py-3 card_title">
                Pricing Summary
              </h4>
              <div className="added-room-container">
                <span className="secondary_info">Add Rooms to Continue</span>
              </div>
              <div className="mt-4 px-3">
                <Link href={"/checkout"}>
                  <button className="btn btn-primary hover-box-shadow  w-100">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------whatsNearby-------------------- */}
      <section className="my-4">
        <div className="container">
          <div className=" ">
            <h6 className="card_title">Whats Nearby</h6>
            <div className="content-container px-3 py-4 grid grid-cols-xl-5 grid-cols-lg-5 grid-cols-1 gap-2 my-3">
              <div className="col-span-xl-3 col-span-lg-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4610.466398849225!2d74.33074951206837!3d31.513678947363523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190460e97d35a9%3A0xb34cbe2044387a60!2sGaddafi%20Stadium!5e1!3m2!1sen!2s!4v1684495894972!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="col-span-xl-2 col-span-lg-2">
                <span>Interested Points</span>
                <div className="d-flex align-items-center gap-2 my-3">
                  <Image
                    src={images["location.svg"]}
                    alt="location"
                    className="icon-img"
                  />
                  <p className="secondary_info">
                    1 km from Nathia Gali Main Bazaar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------facilities-------------------------- */}
      <section className="my-4">
        <div className="container">
          <div className="">
            <h6 className="card_title">Facilities</h6>
            <div className="content-container px-3 py-4   my-3">
              {/* ------------------------business------------------ */}

              <div className="my-3">
                <label className="label-title mb-2">Business Facilities</label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Business Center</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Meeting Room</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Conference Room</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Auditorium</p>
                  </div>
                </div>
              </div>
              {/* -----------------------------food drink--------------- */}
              <div className="my-3">
                <label className="label-title mb-2">Food & Drink</label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Free BreakFast</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Lunch</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Dinner</p>
                  </div>
                </div>
              </div>
              {/* ------------------------general--------------- */}
              <div className="my-3">
                <label className="label-title mb-2">General</label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>In-room Accessibility</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Shuttle Service</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Check-In</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 ">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>No Alcohol</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>24-Hour Front Desk</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Smoking Zone</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Check-Out</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Sofa Bed</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Restaurant</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Newspaper</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Clothes Dryer</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>CTowel</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Terrace</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Payment Method</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Coffee/Tea in Lobby</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Couple Friendly</p>
                  </div>
                </div>
              </div>
              {/* -----------------------------Indoor Ent--------------- */}
              <div className="my-3">
                <label className="label-title mb-2">Indoor Entertainment</label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Billiards</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Table Tennis</p>
                  </div>
                </div>
              </div>
              {/* -----------------------------Media and Tech--------------- */}
              <div className="my-3">
                <label className="label-title mb-2">Media and Technology</label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Free Wi-Fi</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Telephone </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Mobile Phone Coverage </p>
                  </div>
                </div>
              </div>
              {/* -----------------------------Parking--------------- */}
              <div className="my-3">
                <label className="label-title mb-2">Parking </label>
                <div className="grid grid-cols-xl-4 grid-cols-lg-3 grid-cols-md-2 grid-cols-2 gap-2">
                  <div className="d-flex align-items-center gap-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Parking</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>
                      Free Large Vehicle Parking{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Garage </p>
                  </div>
                  <div className="d-flex align-items-center gap-2 py-2 py-2">
                    <Image
                      src={images["icon_tick.svg"]}
                      alt="tick"
                      className="icon-img"
                    />
                    <p className={`secondary_info`}>Large Vehicle Parking </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------policy------------------ */}
      <section className="my-4">
        <div className="container">
          <div>
            <h4 className="card_title">Policy</h4>
            <div className="content-container px-3 py-4   my-3">
              <div className="grid grid-cols-5 my-4">
                <div className="d-flex align-items-center gap-2 col-span-2">
                  <Image
                    src={images["calander.svg"]}
                    alt="calander"
                    className="icon-img"
                  />
                  <p className="secondary_info">Check In</p>
                </div>
                <div className="col-span-3">
                  <p className="label-title ">14:00 - 15:00</p>
                </div>
              </div>
              {/* --------------------checkout---------------- */}
              <div className="grid grid-cols-5 my-4">
                <div className="d-flex align-items-center gap-2 col-span-2">
                  <Image
                    src={images["calander.svg"]}
                    alt="calander"
                    className="icon-img"
                  />
                  <p className="secondary_info">Check Out</p>
                </div>
                <div className="col-span-3">
                  <p className="label-title ">11:00 - 12:00</p>
                </div>
              </div>
              {/* --------------------------isntructions-------------------- */}
              <div className="grid grid-cols-5 my-4 align-items-start">
                <div className="d-flex align-items-center gap-2 col-span-2 ">
                  <Image
                    src={images["calander.svg"]}
                    alt="calander"
                    className="icon-img"
                  />
                  <p className="secondary_info">Instructions </p>
                </div>
                <ul className="col-span-3">
                  <li className="secondary_info list-style-disc my-2">
                    Extra-person charges may apply and vary depending on
                    property policy{" "}
                  </li>
                  <li className="secondary_info list-style-disc my-2">
                    Government-issued photo identification and a cash deposit{" "}
                    <br />
                    may be required at check-in for incidental charges
                  </li>
                  <li className="secondary_info list-style-disc my-2">
                    Special requests are subject to availability upon check-in
                    and <br /> may incur additional charges; special requests
                    cannot be guaranteed
                  </li>

                  <li className="secondary_info list-style-disc my-2">
                    This property accepts cash
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Index.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export default Index;
