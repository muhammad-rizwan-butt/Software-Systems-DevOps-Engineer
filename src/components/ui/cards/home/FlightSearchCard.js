import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { AirportList } from "../../../../data/AirportList";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { images } from "../../../../lib/images";
import style from "../../../../styles/ui/cards/home.module.scss";
import { BootstrapDateRangePicker } from "../../../base/BootstrapDateRangePicker";
import { MobileSlider } from "../../MobileSlider";
import { FlightsListCard } from "./FlightsListCard";

export const FlightSearchCard = ({ singlePage = false }) => {
  const [way, setWay] = useState("one-way");
  const [flightClass, setFlightClass] = useState("Economy");
  const [adults, setAdults] = useState(1);
  const [infant, setInfant] = useState(0);
  const [children, setChildren] = useState(0);
  const [traveler, setTraveler] = useState(1);
  const [start, setStart] = useState(AirportList[0]);
  const [destination, setDestination] = useState(AirportList[1]);
  const [dates, setDatesState] = useState({
    startDate: moment().startOf("hour").toDate(),
    endDate: moment().startOf("hour").add(32, "hour").toDate(),
  });
  const [isSelected, setIsSelected] = useState("");

  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate,
      endDate: endDate,
    });
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideClick(false);

  return (
    <div className={style.flight_Search_card}>
      <div className={style.flight}>
        <form
          className={style.flight_type_wrapper}
          onChange={(e) => setWay(e.target.value)}
        >
          <label className={style.radio}>
            <input
              type="radio"
              name="flight-type"
              value="one-way"
              checked={way == "one-way"}
              readOnly
            />
            <span className={style.radio_btn}></span>
            <span className={style.flight_type_text}>One Way</span>
          </label>
          <label className={style.radio}>
            <input
              type="radio"
              name="flight-type"
              value="two-way"
              checked={way == "two-way"}
              readOnly
            />
            <span className={style.radio_btn}></span>
            <span className={style.flight_type_text}>Round Way</span>
          </label>
        </form>
        <div
          className={`grid grid-cols-xl-${
            !singlePage ? 5 : 6
          } grid-cols-2 gapX-lg_1 gx-md-3 gx-sm-3 gx-xs-3  ${
            style.flight_search
          }`}
        >
          <div
            className={`${style.box}  ${
              isSelected == "location" ? style.active : ""
            }`}
          >
            <div
              onClick={() => {
                setIsSelected("location");
                setIsComponentVisible(true);
              }}
            >
              <span className={style.label}>From</span>
              <div className={style.value}>{start?.city}</div>
              <span className={style.sub_value}>{start?.name}</span>
            </div>
            <>
              {isSelected == "location" &&
                isComponentVisible &&
                window?.innerWidth > 592 && (
                  <div ref={ref}>
                    <FlightsListCard
                      dataList={AirportList}
                      setJourney={setStart}
                      setIsSelected={setIsSelected}
                    />
                  </div>
                )}
              <div className="d-sm-none d-block">
                <MobileSlider
                  show={isSelected == "location"}
                  handleClose={() => setIsSelected("")}
                >
                  <FlightsListCard
                    dataList={AirportList}
                    setJourney={setStart}
                    setIsSelected={setIsSelected}
                  />
                </MobileSlider>
              </div>
            </>
          </div>
          <div
            className={`${style.box} ${style.has_swapper} ${
              isSelected == "destination" ? style.active : ""
            }`}
          >
            <span
              className={style.swapper}
              onClick={() => {
                setStart(destination);
                setDestination(start);
              }}
            ></span>
            <div
              onClick={() => {
                setIsSelected("destination");
                setIsComponentVisible(true);
              }}
            >
              <span className={style.label}>To</span>
              <div className={style.value}>{destination?.city}</div>
              <span className={style.sub_value}>{destination?.name}</span>
            </div>
            <>
              {isComponentVisible &&
                isSelected == "destination" &&
                window?.innerWidth > 592 && (
                  <div ref={ref}>
                    <FlightsListCard
                      dataList={AirportList}
                      setJourney={setDestination}
                      setIsSelected={setIsSelected}
                    />
                  </div>
                )}
            </>
            <MobileSlider
              show={isSelected == "destination"}
              handleClose={() => setIsSelected("")}
            >
              <FlightsListCard
                dataList={AirportList}
                setJourney={setDestination}
                setIsSelected={setIsSelected}
              />
            </MobileSlider>
          </div>

          <div
            className={`${style.box} ${style.depart} ${
              isSelected == "depart" ? style.active : ""
            } `}
            onClick={() => {
              setIsSelected("depart");
            }}
          >
            <span className={style.label}>Journey Date</span>
            <div className={style.value}>
              {moment(dates?.startDate).day()}{" "}
              <span>
                {moment(dates?.startDate).format("MMMM")}{" "}
                {moment(dates?.startDate, "M/D/YY").format("YY")}
              </span>
            </div>
            <span className={style.sub_value}>
              {moment(dates?.startDate).format("dddd")}
            </span>
            {way == "one-way" ? (
              <BootstrapDateRangePicker
                setDates={setDates}
                single={true}
                dates={dates}
              />
            ) : (
              <BootstrapDateRangePicker setDates={setDates} dates={dates} />
            )}
          </div>
          <div
            className={`${style.box} ${style.return} ${
              isSelected == "return" ? style.active : ""
            }`}
            onClick={() => {
              setIsSelected("return");
              setWay("two-way");
            }}
          >
            <span className={style.label}>Return Date</span>
            <div className={style.value}>
              {moment(dates?.endDate).day()}{" "}
              <span>
                {moment(dates?.endDate).format("MMMM")}{" "}
                {moment(dates?.endDate, "M/D/YY").format("YY")}
              </span>
            </div>
            <span className={style.sub_value}>Thursday</span>
            <span className={style.remove_return_date}></span>
            {<BootstrapDateRangePicker setDates={setDates} dates={dates} />}
          </div>

          <div
            className={`${style.box} ${style.traveler} ${
              isSelected == "traveler" ? style.active : ""
            }  col-span-xs-2`}
          >
            <div
              onClick={() => {
                setIsSelected("traveler");
                setIsComponentVisible(true);
              }}
            >
              <span className={style.label}>Traveler, Class</span>
              <div className={style.value}>
                {traveler == 1
                  ? `${traveler} Traveler`
                  : `${traveler} Travelers`}
              </div>
              <span className={style.sub_value}>{flightClass}</span>
            </div>
            {isComponentVisible && isSelected == "traveler" && (
              <div id="guestPicker" className={style.guestPicker} ref={ref}>
                <div className={style.passenger}>
                  <div className={style.adults}>
                    <div className={style.label}>
                      Adults <span>12 years and above</span>
                    </div>
                    <div className={style.input_container}>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        onClick={() =>
                          setAdults((prev) => (prev == 0 ? prev : prev - 1))
                        }
                      >
                        <Image src={images["remove.svg"]} alt="add-icon" />
                      </button>
                      <div className={style.adult_count}>{adults}</div>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        onClick={() =>
                          setAdults((prev) => (prev >= 5 ? prev : prev + 1))
                        }
                      >
                        <Image src={images["add.svg"]} alt="add-icon" />
                      </button>
                    </div>
                  </div>
                  <div className={style.children_age_wrapper}>
                    <div className={`${style.adults} ${style.children}`}>
                      <div className={style.label}>
                        Children <span>2-11 years</span>
                      </div>
                      <div className={style.input_container}>
                        <button
                          type="button"
                          className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                          onClick={() =>
                            setChildren((prev) => (prev == 0 ? prev : prev - 1))
                          }
                        >
                          <Image src={images["remove.svg"]} alt="add-icon" />
                        </button>
                        <div className={style.adult_count}>{children}</div>
                        <button
                          type="button"
                          className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                          onClick={() =>
                            setChildren((prev) => (prev >= 4 ? prev : prev + 1))
                          }
                        >
                          <Image src={images["add.svg"]} alt="add-icon" />
                        </button>
                      </div>
                    </div>
                    {/* <div className={style.children_age}>
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
                    </div> */}
                  </div>

                  <div className={style.adults}>
                    <div className={style.label}>
                      Infant <span>Below 2 years</span>
                    </div>
                    <div className={style.input_container}>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        onClick={() => {
                          setInfant((prev) => (prev == 0 ? prev : prev - 1));
                        }}
                      >
                        <Image src={images["remove.svg"]} alt="add-icon" />
                      </button>
                      <div className={style.adult_count}>{infant}</div>
                      <button
                        type="button"
                        className={`${style.btn} ${style.adjust} ${style.btn_link}`}
                        onClick={() =>
                          setInfant((prev) => (prev >= 4 ? prev : prev + 1))
                        }
                      >
                        <Image src={images["add.svg"]} alt="add-icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={style.class}>
                  <div className={style.label}>Class</div>
                  <div
                    className={style.radio_container}
                    onChange={(e) => setFlightClass(e.target.value)}
                  >
                    <label className={style.brand_radio}>
                      <input
                        type="radio"
                        name="flight-class"
                        value="Economy"
                        defaultChecked
                      />
                      <span className={style.radio}></span>
                      <span className={style.text}>Economy</span>
                    </label>
                    <label className={style.brand_radio}>
                      <input
                        type="radio"
                        name="flight-class"
                        value="Business"
                      />
                      <span className={style.radio}></span>
                      <span className={style.text}>Business</span>
                    </label>
                  </div>
                  <div className={style.button_wrapper}>
                    <button
                      type="button"
                      className={style.picker_mb_btn}
                      onClick={() => {
                        setTraveler(adults + infant + children);
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
          {singlePage && (
            <div
              className={`${style.search_btn_container} ${style.singlePage_btn}`}
            >
              <button type="button" className={style.search_btn}>
                Modify Search
              </button>
            </div>
          )}
        </div>
      </div>
      {!singlePage && (
        <div className={style.search_btn_container}>
          <button type="button" className={style.search_btn}>
            Search
          </button>
        </div>
      )}
    </div>
  );
};
