import React from "react";
import style from "../../../../styles/ui/cards/flightlistcard.module.scss";

export const FlightsListCard = ({ dataList, setIsSelected, setJourney }) => {
  return (
    <div className={style.location_box}>
      <div className={style.madule}>
        <input className={style.search_bar} placeholder="Type to Search" />
      </div>
      <div className={style.airport_list}>
        {dataList.map((data, i) => (
          <div
            className={style.country_names}
            key={i}
            onClick={() => {
              setJourney(data);
              setIsSelected("");
            }}
          >
            <div className={style.country_city_name}>
              <h3 className={style.country_name_heading}>
                {`${data?.city} , ${data?.country}`}
              </h3>
              <h5 className={style.airport_name_headings}>{data?.name}</h5>
            </div>
            <h3 className={style.city_code_heading}>{data?.iata_code}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
