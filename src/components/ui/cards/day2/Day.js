import Image from "next/image";
import React from "react";
import { baseURL } from "../../../../axios/axios";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/singeltourcard.module.scss";
export const Day = ({ item }) => {
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
  return (
    <>
      <div className={`${style.tour_card} grid grid-cols-6 `}>
        <div className={`${style.tour_location_icon} `}>
          <Image
            className={style.tour_icon_location}
            src={images["icon-tour-locataion.svg"]}
            alt=""
          />
          <p className={` ${style.tour_time}`}>{tConvert(item?.time)}</p>
        </div>
        <div className={`${style.tour_location_icon2} mx-2 col-span-2 `}>
          <Image
            className={style.tour_city_img}
            src={`${baseURL}${item?.image}`}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={`${style.tour_list_details3} mx-3 col-span-3 `}>
          <h2 className={` heading`}>{item?.title}</h2>
          <span className={` ${style.tour_location_icon_islamabad}`}>
            <Image
              className={style.location_icon}
              src={images["location_fill.svg"]}
              alt=""
            />
            {item?.location}
          </span>
          <ul className="mx-5">
            {item?.details?.split("\n").map((detail, i) => (
              <li className={`${style.tour_list_islamabad} `} key={i + detail}>
                {detail}
              </li>
            ))}
          </ul>
          <span className={`${style.tour_location_icon_islamabad} `}>
            {item?.note}
          </span>
        </div>
      </div>
    </>
  );
};
