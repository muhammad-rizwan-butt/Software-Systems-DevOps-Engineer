import React from "react";
import style from "../../../../styles/ui/tourfilter.module.scss";
import { Checkbox } from "../../Checkbox";
import MultiRangeSlider from "../../MultiRangeSlider";

const durationArray = [1, 2, 3, 4, 5, 6, 7, 15, 30];
export const TourFilter = ({
  duration,
  tourType,
  setDuration,
  setPrice,
  setTourType,
  getAllTours,
  price,
  length,
  setIsReset,
  setShow = () => {},
}) => {
  return (
    <>
      <div className={`${style.filters} box-shadow`}>
        <div className={style.total__detination}>
          <h2 className={style.total__detination}>
            Destination : {length} Places Found
          </h2>
        </div>
        <div className={style.underline_checkbox}></div>
        <div className={style.filter_title_reset}>
          <h5 className={style.filter_title}>Filters</h5>
          <button
            className={style.reset_btn_filter}
            onClick={() => {
              setPrice(null);
              setTourType("");
              setDuration([]);
              setIsReset(true);
            }}
          >
            Reset
          </button>
        </div>
        <h6 className={style.Popular_Filters_heading}>Duration</h6>
        {durationArray?.map((data, i) => (
          <Checkbox
            key={i + data}
            id={i + data}
            value={data}
            label={`${data} ${data > 1 ? "days" : "day"}`}
            onChange={(e) => {
              if (duration.includes(data)) {
                setDuration((prev) => prev.filter((item) => item !== data));
              } else {
                setDuration((prev) => [...prev, Number(e.target.value)]);
              }
            }}
            checked={duration?.includes(data)}
          />
        ))}
        <div className={style.underline_checkbox}></div>

        <h6 className={style.Popular_Filters_heading}>Price Range</h6>

        <div className={style.min_max_input}>
          <div className={style.double_rangeSlider}>
            <MultiRangeSlider
              min={10000}
              max={120000}
              onChange={({ min, max }) => setPrice({ from: min, to: max })}
            />
          </div>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Tour Type</h6>
        <div className={style.accommodation_ceckboxes}>
          <div className={style.chekbox_filter}>
            <input
              type="radio"
              id="Resort"
              name="tour-type"
              className={style.coustom_control_checkbox}
              value={"air"}
              checked={tourType == "air"}
              onChange={(e) => setTourType(e.target.value)}
            />
            <label
              for="Resort"
              className={style.coustom_control_checkbox_title}
            >
              Air
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="radio"
              id="Lodge"
              name="tour-type"
              value={"road"}
              checked={tourType == "road"}
              className={style.coustom_control_checkbox}
              onChange={(e) => setTourType(e.target.value)}
            />
            <label for="Lodge" className={style.coustom_control_checkbox_title}>
              Road
            </label>
          </div>
        </div>

        <div className={style.underline_checkbox}></div>
        <div className="text-center">
          <button
            className={style?.apply__btn}
            onClick={() => {
              if (duration || price || tourType) {
                getAllTours();
                setShow(false);
              } else {
                return;
              }
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};
