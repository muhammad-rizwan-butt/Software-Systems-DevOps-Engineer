import Image from "next/image";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import { GiDiscGolfBag } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { LuLuggage } from "react-icons/lu";
import { TbManualGearbox } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

import React from "react";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/carcard.module.scss";

export const CarRentalCard = () => {
  return (
    <div className={`${style.hotel_card}`}>
      <div
        className={`px-3 py-3 mt-3  grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-1 gap-lg-2 gap-0 `}
      >
        <div>
          <Image
            className="border-radius-4"
            alt="car_img"
            src={images["car.jpg"]}
          />
        </div>

        <div className="col-span-2">
          <div>
            <div className={`${style.hotline} d-flex align-items-center gap-1`}>
              <p>Top Pick</p>
            </div>
            <h5 className={`title`}>
              Toyota Corolla{" "}
              <span className="rating"> or similar medium car</span>
            </h5>
            <div className="d-flex justify-content-between flex-sm-row flex-column">
              <div>
                {/* ----------------------left_Side-------------------- */}
                <div className="mt-3 d-flex gap-md-5 gap-2 align-items-center ">
                  <div className={`rating d-flex gap-md-4 gap-1`}>
                    <GoPerson className={style.log} />
                    <span> 5 seats</span>
                  </div>
                  <div className={`rating d-flex gap-md-4 gap-1  `}>
                    <TbManualGearbox className={style.log} />
                    <span> Manual</span>
                  </div>
                </div>
                <div className="mt-3 d-flex gap-md-5 gap-3 align-items-center">
                  <div className={` rating d-flex gap-md-4 gap-1   `}>
                    <GiDiscGolfBag className={style.log} />
                    <span> 1 large bag</span>
                  </div>
                  <div className={`mt-3 rating d-flex gap-md-4 gap-1   `}>
                    <LuLuggage className={style.log} />
                    <span> 1 small bag</span>
                  </div>
                </div>

                <div className={`mt-3 rating d-flex gap-4   `}>
                  <BsSpeedometer className={style.log} />
                  <span> Unlimited mileage</span>
                </div>

                <div className="d-flex flex-column mt-3 ">
                  <p className="card_title"> Manchester Airport</p>
                  <span className="small-text">13.5km from center</span>
                </div>
              </div>

              {/* ---------------------right-side--------------------- */}

              <div className="d-flex align-items-center gap-2 flex-sm-column flex-row mt-sm-0 mt-2">
                {/* <p className={`discount`}>46% off</p> */}
                {/* --------------------price------------ */}
                <div
                  data-v-6443285c=""
                  className={`${style.price_amount} d-flex flex-column align-items-center gap-2`}
                >
                  <span
                    data-v-6443285c=""
                    className={style.price_before_discount}
                  ></span>
                  <span data-v-6443285c="" className={style.discount_price}>
                    $39.95
                  </span>
                </div>
                <p className={`d-flex align-items-center card_title`}>
                  <TiTick /> <span>cancellation</span>
                </p>
                <Link href="/singlerental">
                  <button type="button" className="btn btn-primary">
                    View Deal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.underline_checkbox}></div>
      <div className="d-flex align-items-center  ">
        <div className="d-flex m-2">
          <Image
            className={`${style.car_logo}`}
            src={images["carlogo_200.png"]}
          />
        </div>
        <div className="d-flex p-2 green_text ms-auto">
          <span>
            <AiOutlineInfoCircle /> important info
          </span>
        </div>
      </div>
    </div>
  );
};
