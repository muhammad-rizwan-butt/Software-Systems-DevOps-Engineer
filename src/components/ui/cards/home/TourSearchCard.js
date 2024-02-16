import React, { useState } from "react";
import { AirportList } from "../../../../data/AirportList";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import style from "../../../../styles/ui/cards/home.module.scss";
import { FlightsListCard } from "./FlightsListCard";

export const TourSearchCard = () => {
  const [start, setStart] = useState(AirportList[3]);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClick(false);
  return (
    <div className={style.flight_Search_card}>
      <div className={style.flight}>
        <div className={`grid grid-cols-1  ${style.flight_search}`}>
          <div className={`${style.box} `}>
            <div
              onClick={() => {
                setIsComponentVisible(true);
              }}
            >
              <span className={style.label}>Location/Tour</span>
              <div className={style.value}>{start?.city}</div>
              <span className={style.sub_value}>{start?.name}</span>
            </div>
            {isComponentVisible && (
              <div ref={ref}>
                <FlightsListCard
                  dataList={AirportList}
                  setJourney={setStart}
                  setIsSelected={setIsComponentVisible}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.search_btn_container}>
        <button type="button" className={style.search_btn}>
          Search
        </button>
      </div>
    </div>
  );
};
