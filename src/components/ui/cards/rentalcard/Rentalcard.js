import Image from "next/image";
import Link from "next/link";

import React from "react";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/hotelcard.module.scss";

export const RentalCard = () => {
  return (
    <Link href="/singlerental">

    <div
      className={`px-3 py-3 ${style.hotel_card} grid grid-cols-3 gap-2 position-relative`}
    >
      <div
        className={`${style.hotline} d-flex align-items-center gap-1 position-absolute`}
      >
        <Image
          src={images["award_line.svg"]}
          alt=""
          className={`${style.hotline_img}`}
        />
        <p>Top Selling</p>
      </div>

      <Image
        className="border-radius-4"
        alt="hotel_card_img"
        src={images["hotelroom.jpg"]}
      />
      <div className="col-span-2">
        <h5 className={`title`}>Hotel Elites</h5>
        <div className="d-flex align-items-center justify-content-between">
          {/* ----------------------left_Side-------------------- */}
          <div>
            <div className="d-flex align-items-center gap-2 mt-3">
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

            {/* ------------------------remaining rooms-------------- */}
            <p className={`${style.remaining} my-4`}>8 Rooms Remaining</p>
            {/* ----------------------------- */}
            <div className="d-flex align-items-center gap-2 flex-wrap">
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
          {/* ---------------------right-side--------------------- */}

          <div className="d-flex align-items-center gap-2 flex-column">
            <p className={`discount`}>46% off</p>
            {/* --------------------price------------ */}
            <div
              data-v-6443285c=""
              className="price-amount d-flex flex-column align-items-center gap-2"
            >
              <span data-v-6443285c="" className="price-before-discount">
                PKR 18,975
              </span>
              <span data-v-6443285c="" className="discount-price">
                PKR 10,175
              </span>
            </div>
            <p className={`rent`}>For One Night Per Room</p>
          </div>
        </div>
      </div>

    </div>
    </Link> 

  );
};
