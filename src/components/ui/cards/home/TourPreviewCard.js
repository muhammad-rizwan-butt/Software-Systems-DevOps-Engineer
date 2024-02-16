import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/home.module.scss";

export const TourPreviewCard = () => {
  return (
    <Link href={"/singalTour"}>
      <div
        className={`${style.tourPreview_card}  tourmaster-tour-frame tourmaster-tour-grid-style-2 tourmaster-price-right-title`}
      >
        <div className={style.tourmaster_tour_grid_inner}>
          <div className={style.ourmaster_media_image}>
 
            <p className={style.gdlr_core_js}>
              <Image src={images["tour.jpeg"]} alt="" className={style.img} />
            </p>
 
          </div>
          <div className={style.tourmaster_tour_content_wrap}>
            <div className={style.tourmaster_thumbnail_ribbon}>
              <div className="tourmaster-thumbnail-ribbon-cornor"></div>
              Best Seller
            </div>
            <h3 className={style.tourmaster_tour_title}>
 
              <Link href="#">
 
                <Image
                  src={images["light.svg"]}
                  alt=""
                  className={style.light_icon}
                />
                <span>Enquiry Form Only – Paris – 6 Days</span>
 
              </Link>
 
            </h3>
            <div className={style.tourmaster_tour_price_wrap}>
              <span className={style.tourmaster_tour_price}>
                {/* <span className="tourmaster-head">From</span> */}
                <span className={style.tourmaster_tail}>$3,700</span>
              </span>
              <span className={style.tourmaster_tour_discount_price}>
                $2,000
              </span>
            </div>
            <div className={style.tourmaster_tour_info_wrap}>
              <div className={style.tourmaster_tour_info}>
                <Image
                  src={images["time.svg"]}
                  alt=""
                  className={style.time__icon}
                />
                5 Days{" "}
              </div>
            </div>
            <div className={style.tourmaster_tour_rating}>
              {[...new Array(5)].map((_, i) => (
                <Image
                  src={images["star_fill.svg"]}
                  alt=""
                  key={i}
                  className={style.tour_rating_icon}
                />
              ))}

              <span className={style.tourmaster_tour_rating_text}>
                (2 Reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
