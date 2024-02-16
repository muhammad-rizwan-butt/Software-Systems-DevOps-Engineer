import React from "react";
import style from "../../../../styles/ui/cards/singeltourcard.module.scss";
import Image from "next/image";
import { images } from "../../../../lib/images";
export const SingleTourCard = () => {
  return (
    <>
      <div className={`${style.tour_card} grid grid-cols-6 `}>
        <div className={`${style.tour_location_icon} `}>
          <Image
            className={style.tour_icon_location}
            src={images["icon-tour-locataion.svg"]}
            alt=""
          />
          <p className={style.tour_time}>08:00 AM</p>
        </div>
        <div className={`${style.tour_location_icon2} mx-2 col-span-2 `}>
          <Image
            className={style.tour_city_img}
            src={images["tour-img.jpeg"]}
            alt=""
          />
        </div>
        <div className={`${style.tour_list_details3} mx-3 col-span-3 `}>
          <h2 className={style.heading_islamabad}>Fly back to Islamabad</h2>
          <span className={style.tour_location_icon_islamabad}>
            <Image
              className={style.location_icon}
              src={images["location_fill.svg"]}
              alt=""
            />
            Islamabad
          </span>
          <ul className="mx-5">
            <li className={style.tour_list_islamabad}>Breakfast</li>
            <li className={style.tour_list_islamabad}>Drive back to Gilgit</li>
            <li className={style.tour_list_islamabad}>
              Drop off at Gilgit Airpor
            </li>
            <li className={style.tour_list_islamabad}>Fly back to Islamabad</li>
            <li className={style.tour_list_islamabad}>End of services</li>
          </ul>
        </div>
      </div>
    </>
  );
};
