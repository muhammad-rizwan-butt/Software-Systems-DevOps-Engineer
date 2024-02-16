import Image from "next/image";
import Link from "next/link";
import React from "react";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/home.module.scss";

export const HomePreviewCard = () => {
  return (
    <div className={style.card}>
      <Image src={images["city.jpeg"]} alt="" className={style.img} />
      <div className={style.overlay}></div>
      <div className={style.overlay_bg}></div>
      <div className={style.card_text__box}>
        <span className={style.card_text}>Testing Name</span>
        <p className={style.card__secondaryText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          velit tempora eum animi consequuntur cum?
        </p>
        <Link href="/tour" className={style.card__link}>
          View All Tours
        </Link>
      </div>
      <p className={style.card__tour}>3 tours</p>
    </div>
  );
};
