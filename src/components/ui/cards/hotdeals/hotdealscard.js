import React from "react";
import style from "../../../../styles/ui/cards/hotdealscard.module.scss";

export const HotDealsCard = () => {
  return (
    <div className={style.coupon_card}>
      <h3>
        20% flat off on all rides within the city
        <br className="d-lg-block d-none" />
        using HDFC Credit Card
      </h3>
      <div className={style.coupon_row}>
        <span id={style.cpnCode}>STEALDEAL20</span>
        <span id={style.cpnBtn}>Copy Code</span>
      </div>
      <p>Valid Till: 20Dec, 2021</p>
      <div className={style.circle1}></div>
      <div className={style.circle2}></div>
    </div>
  );
};
