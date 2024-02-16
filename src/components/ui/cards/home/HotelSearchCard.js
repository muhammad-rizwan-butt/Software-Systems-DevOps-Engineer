import Image from "next/image";
import React, { useState } from "react";
import { AirportList } from "../../../../data/AirportList";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/home.module.scss";
import { BootstrapDateRangePicker } from "../../../base/BootstrapDateRangePicker";
import { MobileSlider } from "../../MobileSlider";
import { FlightsListCard } from "./FlightsListCard";

export const HotelSearchCard = () => {
  const [start, setStart] = useState(AirportList[0]);
  const [dates, setDatesState] = useState({
    startDate: "",
    endDate: "",
  });
  const [isSelected, setIsSelected] = useState("");
  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD"),
    });
  };
  let { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClick(false);
  return (
    <div className={`${style.flight_Search_card} ${style.hotel_Search_card}`}>
      <div className={style.flight}>
        <div
          className={`grid grid-cols-xl-5 grid-cols-lg-4 gapX-lg_1 gapX_1  ${style.flight_search}`}
        >
          <div
            className={`${style.box} col-span-2  ${
              isSelected == "location" ? style.active : ""
            }`}
          >
            <div
              onClick={() => {
                setIsSelected("location");
                setIsComponentVisible("location");
              }}
            >
              <span className={style.label}>City/Hotel/Resort/Area</span>
              <div className={style.value}>{start?.city}</div>
              <span className={style.sub_value}>{start?.name}</span>
            </div>

            <>
              {isSelected == "location" &&
                isComponentVisible &&
                window?.innerWidth > 592 && (
                  <div ref={ref}>
                    <FlightsListCard
                      setJourney={setStart}
                      setIsSelected={setIsSelected}
                      dataList={AirportList}
                    />
                  </div>
                )}
            </>
            <MobileSlider
              show={isSelected == "location"}
              handleClose={() => setIsSelected("")}
            >
              <FlightsListCard
                setJourney={setStart}
                setIsSelected={setIsSelected}
                dataList={AirportList}
              />
            </MobileSlider>
          </div>

          <div
            className={`${style.box}  ${
              isSelected == "depart" ? style.active : ""
            } `}
            onClick={() => {
              setIsSelected("depart");
            }}
          >
            <span className={style.label}>Check In</span>
            <div className={style.value}>
              20 <span className={style.sub_value}>May 23</span>
            </div>
            <span className={style.sub_value}>Saturday</span>
            <BootstrapDateRangePicker setDates={setDates} single={false} />
          </div>
          <div
            className={`${style.box}  ${
              isSelected == "return" ? style.active : ""
            } `}
            onClick={() => {
              setIsSelected("return");
            }}
          >
            <span className={style.label}>Check Out</span>
            <div className={style.value}>
              22 <span className={style.sub_value}>Jun 23</span>
            </div>
            <span className={style.sub_value}>Thursday</span>
            <span className={style.remove_return_date}></span>
            {<BootstrapDateRangePicker setDates={setDates} single={false} />}
          </div>

          <div
            className={`${style.box} ${style.traveler} ${
              isSelected == "traveler" ? style.active : ""
            } col-span-xs-2`}
          >
            <div
              onClick={() => {
                setIsSelected("traveler");
                setIsComponentVisible(true);
              }}
              ref={ref}
            >
              <span className={style.label}>Rooms & Guests</span>
              <div className={style.value}>
                1 <span className={style.sub_value}>Room , </span> 2{" "}
                <span className={style.sub_value}>Guests</span>
              </div>
              <span className={style.sub_value}>Economy</span>
            </div>

            {isComponentVisible && isSelected == "traveler" && (
              <div id="guestPicker" className={style.guestPicker} ref={ref}>
                <div className={`${style.edit_mode} ${style.passenger}`}>
                  <div data-v-52b51d08="" className={style.title}>
                    <h5 data-v-52b51d08="" className={style.room_name}>
                      Room 1<p className={style.total_passenger}>1 Adult</p>
                    </h5>
                    <div data-v-52b51d08="" className={style.action}>
                      <button type="button" className={style.action_btn}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className={style.adults}>
                    <div className={style.label}>
                      Adults <span>12 years+</span>
                    </div>
                    <div className={style.input_container}>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                      >
                        <Image src={images["remove.svg"]} alt="add-icon" />
                      </button>
                      <div className={style.adult_count}>3</div>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                      >
                        <Image src={images["add.svg"]} alt="add-icon" />
                      </button>
                    </div>
                  </div>
                  <div className={style.children_age_wrapper}>
                    <div className={`${style.adults} ${style.children}`}>
                      <div className={style.label}>
                        Child <span>0-12 years</span>
                      </div>
                      <div className={style.input_container}>
                        <button
                          type="button"
                          className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        >
                          <Image src={images["remove.svg"]} alt="add-icon" />
                        </button>
                        <div className={style.adult_count}>3</div>
                        <button
                          type="button"
                          className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        >
                          <Image src={images["add.svg"]} alt="add-icon" />
                        </button>
                      </div>
                    </div>
                    <div className={style.children_age}>
                      <div className={style.child_age_wrapper}>
                        <label>Child 1 Age</label>
                        <select
                          className={style.custom_select}
                          id="__BVID__107"
                        >
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.room_actions}>
                  <div className={style.message}>
                    <p>
                      More than 3 guests? <br />
                      Add another room to get more options.
                    </p>
                  </div>
                  <div className={style.button_wrapper}>
                    <button type="button" className={style.btn_secondary}>
                      <Image src={images["add.svg"]} alt="add-icon" />
                      <span>Add Another Room</span>
                    </button>
                    <button
                      className={style.btn}
                      onClick={() => {
                        setIsSelected("");
                        setIsComponentVisible(false);
                      }}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`${style.hotel_pre_filter} d-flex gap-2 align-items-center flex-wrap my-2`}
      >
        <span className={`font-weight-bolder  me-2 ${style.text_primary}`}>
          Search for
        </span>
        <div className={`me-1 ${style.custom_checkbox}`}>
          <input
            type="checkbox"
            name="business"
            className={style.custom_control_input}
            value="for_business"
            id="business"
          />
          <label className={style.custom_control_label} htmlFor="business">
            Business
          </label>
        </div>
        <div className={`me-1 ${style.custom_checkbox}`}>
          <input
            type="checkbox"
            name="couple"
            className={style.custom_control_input}
            value="for_business"
            id="couple"
          />
          <label className={style.custom_control_label} htmlFor="couple">
            Couples
          </label>
        </div>
        <div className={`me-1 ${style.custom_checkbox}`}>
          <input
            type="checkbox"
            name="family"
            className={style.custom_control_input}
            value="for_business"
            id="family"
          />
          <label className={style.custom_control_label} htmlFor="family">
            Families
          </label>
        </div>
        <div className={`me-1 ${style.custom_checkbox}`}>
          <input
            type="checkbox"
            name="friends"
            className={style.custom_control_input}
            value="for_business"
            id="friends"
          />
          <label className={style.custom_control_label} htmlFor="friends">
            Friends
          </label>
        </div>
        <div className={`me-1 ${style.custom_checkbox}`}>
          <input
            type="checkbox"
            name="solo"
            className={style.custom_control_input}
            value="for_business"
            id="solo"
          />
          <label className={style.custom_control_label} htmlFor="solo">
            Solo
          </label>
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
