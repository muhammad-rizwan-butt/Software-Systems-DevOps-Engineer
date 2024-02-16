import Image from "next/image";
import Link from "next/link";

import React from "react";
import { BiTime } from "react-icons/bi";
import { ImRoad } from "react-icons/im";
import { MdOutlineTour } from "react-icons/md";
import { baseURL } from "../../../../axios/axios";
import { currencyFormatter } from "../../../../data/currency";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/hotelcard.module.scss";

export const TourCard = ({ tour }) => {
  return (
    <Link href={`tour/${tour?._id}`}>
      <div
        className={`px-3 py-3 ${style.hotel_card} grid grid-cols-xl-3 grid-cols-lg-3 grid-cols-md-3 grid-cols-sm-3 grid-cols-1 gap-sm-3 gap-2 position-relative`}
      >
        <Image
          className={`border-radius-4 w-100  object-fit-cover ${style.hotel__featureImg}`}
          alt="hotel_card_img"
          src={`${baseURL}${tour?.featureImage}`}
          width={0}
          height={0}
        />
        <div className="col-span-2">
          <h5 className={`title`}>{tour?.title}</h5>
          <div className="d-flex align-items-center justify-content-between">
            {/* ----------------------left_Side-------------------- */}
            <div>
              <div className="d-flex align-items-center gap-2 mt-3">
                <div className={`rating d-flex align-items-center gap-1   `}>
                  <Image src={images["location.svg"]} alt="location" />
                  <span> {tour?.location?.destination}</span>
                </div>
              </div>

              {/* ------------------------remaining rooms-------------- */}
              <div className="d-flex align-item-center gap-3">
                <p className={`${style.remaining} my-4`}>
                  <BiTime fontSize="16" />
                  <span className="ms-2">
                    {tour?.totalDays} {tour?.totalDays == 1 ? "Day" : "Days"}
                  </span>
                </p>
              </div>
              {/* ----------------------------- */}
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div
                  className={`rating d-flex align-items-center gap-1   bg-secondary text-white px-3 py-1 rounded`}
                >
                  <MdOutlineTour fontSize={12} />
                  <span>
                    {tour?.totalDays} {tour?.totalDays == 1 ? "Day" : "Days"}{" "}
                    Tour
                  </span>
                </div>
                <div
                  className={`rating d-flex align-items-center gap-1 bg-secondary text-white px-3 py-1 rounded`}
                >
                  <ImRoad fontSize="12" />
                  <span>{tour?.tourType}</span>
                </div>
              </div>
            </div>
            {/* ---------------------right-side--------------------- */}

            <div className="d-flex align-items-center gap-2 flex-column mt-3">
              {/* <p className={`discount`}>46% off</p> */}
              {/* --------------------price------------ */}
              <div
                data-v-6443285c=""
                className="price-amount d-flex flex-column align-items-center gap-2"
              >
                <span data-v-6443285c="" className="price-before-discount">
                  {currencyFormatter.format(tour?.price)}
                </span>
                <span data-v-6443285c="" className="discount-price">
                  {currencyFormatter.format(tour?.discountPrice)}
                </span>
              </div>
              <p className={`rent`}>Per Person</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
