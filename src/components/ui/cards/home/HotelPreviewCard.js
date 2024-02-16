import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../../../../lib/images";
// import Link from "next/link";

import style from "../../../../styles/ui/cards/home.module.scss";

export const HotelPreviewCard = () => {
  return (
 
    <Link href={"/singlehotel"}>
      <div className={style.hotelPreview__card}>
        <Image src={images["room.jpeg"]} alt="" className={style.img} />
        <div className={style.card_text__box}>
          <p className={style.card__secondaryText}>From $250/night</p>
          <p className={style.card_text}>Junior Suite</p>
          <p className={style.card__link}>Read more</p>
        </div>
 
      </div>
    </Link>
  );
};
