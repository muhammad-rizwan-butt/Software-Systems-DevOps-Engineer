import React from "react";
import style from "../../../../styles/ui/cards/tovercard.module.scss";
import { Grid } from "swiper";
import Image from "next/image";
import { images } from "../../../../lib/images";
const ToverCard = () => {
  return (
    <>
      <div
        className={`${style.tover_card} grid grid-cols-4 grid-cols-md-1  grid-cols-sm-1 grid-cols-xs-1  `}
      >
        <div className={`${style.card_left} `}>
          <Image
            className={style.card_img_main}
            src={images["time_fill.svg"]}
            alt=""
          />
        </div>
        <div className={`${style.card_right} col-span-3`}>
          <div className={style.tover_title_starting}>
            <h4 className={style.tover_title}>
              3 Days (By Air) Tour To Hunza, Hopper & Naltar
            </h4>
            <p className={style.tover_startin_from}>Starting From</p>
          </div>
          <span className={style.cencel_pkr_headings}>
            {" "}
            PKR <h5 className={style.pkr_price_cencle}>16 60</h5>
          </span>
          <div className={style.location_title_headings}>
            <span className={style.location_icon_headings}>
              <Image
                src={images["time_fill.svg"]}
                className={style.location_icon}
                alt=""
              />
              Hunza Valley
            </span>
            <span className={style.location_pkr_headings}>
              {" "}
              PKR <h5 className={style.pkr_price}>16 60</h5>
            </span>
          </div>
          <p className={style.cencel_perperson_headings}>per person</p>

          <div className={style.tover_time}>
            <div className={style.timers_and_icons}>
              <span className={style.tover_icon_headings}>
                <Image
                  src={images["time_fill.svg"]}
                  className={style.day_time_icon}
                  alt=""
                />
                3 days
              </span>
              <span className={style.tover_icon_headings}>
                <Image
                  src={images["time_fill.svg"]}
                  className={style.day_time_icon}
                  alt=""
                />
                From 1 to 12 people
              </span>
            </div>
            <h5 className={style.offer_heading}> 10% off</h5>
          </div>
          <div className={style.cars_air_tover_details}>
            <span className={style.tover_days_headings}>3 days Tours</span>
            <span className={style.tover_days_headings}>
              <Image
                src={images["airplane_fill.svg"]}
                className={style.air_time_icon}
                alt=""
              />{" "}
              Air Tours
            </span>
            <span className={style.tover_days_headings}>
              <Image
                src={images["car_fill.svg"]}
                className={style.air_time_icon}
                alt=""
              />
              Private Tours
            </span>
          </div>
        </div>
      </div>
      <div className={style.information}>
        <Image
          src={images["information_line.svg"]}
          className={style.information_icon}
          alt=""
        />
        <p className={style.information_heading}>
          *Additional discount on payment
        </p>
      </div>
    </>
  );
};

export default ToverCard;
