import React from "react";
import style from "../../../../styles/ui/cards/filter.module.scss";
import Image from "next/image";
import { images } from "../../../../lib/images";
export const Filter = () => {
  return (
    <>
      <div className={`${style.filters} box-shadow`}>
        <div className={style.filter_title_reset}>
          <h5 className={style.filter_title}>Filters</h5>
          <button className={style.reset_btn_filter}>Reset</button>
        </div>
        <h6 className={style.Popular_Filters_heading}>Popular Filters</h6>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            className={style.coustom_control_checkbox}
            id="star3"
          />
          <label for="star3" className={style.coustom_control_checkbox_title}>
            3 star
          </label>
        </div>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            id="star4"
            className={style.coustom_control_checkbox}
          />
          <label for="star4" className={style.coustom_control_checkbox_title}>
            4 star
          </label>
        </div>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            id="Hotel"
            className={style.coustom_control_checkbox}
          />
          <label for="Hotel" className={style.coustom_control_checkbox_title}>
            Hotel
          </label>
        </div>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            id="Breakfast"
            className={style.coustom_control_checkbox}
          />
          <label
            for="Breakfast"
            className={style.coustom_control_checkbox_title}
          >
            Breakfast
          </label>
        </div>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            id="WiFi"
            className={style.coustom_control_checkbox}
          />
          <label for="WiFi" className={style.coustom_control_checkbox_title}>
            WiFi
          </label>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Property Name</h6>
        <div className={style.filter_searchbar}>
          <input
            type="text"
            placeholder="Property Name"
            className={style.prperty_name}
          />
          <button className={style.search_btn_filter}>
            <Image
              className={style.search_icon}
              src={images["icon_search.svg"]}
              alt="search_icon"
            />
          </button>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Price Range</h6>

        <div className={style.min_max_input}>
          <input type="number" placeholder="Min" className={style.min_input} />
          <h6 className={style.Popular_Filters_heading}>To</h6>
          <input type="number" placeholder="Max" className={style.min_input} />
          <button className={style.arrow_btn_filter}>
            <Image
              className={style.arrow_icon}
              src={images["right_line (1).svg"]}
              alt="right_line"
            />
          </button>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Star Rating</h6>

        <div className={`d-flex align-items-center gap-1 flex-wrap`}>
          {/* ------------------------checkboxes------------------------ */}
          <label data-v-a69845bc="" className="box-checkbox">
            <input data-v-a69845bc="" type="checkbox" name="star" value="5" />
            <span data-v-a69845bc="" className="text-content">
              1
              <Image
                src={images["star_fill_blue.svg"]}
                className="start-img"
                alt="star_fill"
              />
            </span>
          </label>
          <label data-v-a69845bc="" className="box-checkbox">
            <input data-v-a69845bc="" type="checkbox" name="star" value="5" />
            <span data-v-a69845bc="" className="text-content">
              2
              <Image
                src={images["star_fill_blue.svg"]}
                className="start-img"
                alt=""
              />
            </span>
          </label>
          <label data-v-a69845bc="" className="box-checkbox">
            <input data-v-a69845bc="" type="checkbox" name="star" value="5" />
            <span data-v-a69845bc="" className="text-content">
              3
              <Image
                src={images["star_fill_blue.svg"]}
                className="start-img"
                alt=""
              />
            </span>
          </label>
          <label data-v-a69845bc="" className="box-checkbox">
            <input data-v-a69845bc="" type="checkbox" name="star" value="5" />
            <span data-v-a69845bc="" className="text-content">
              4
              <Image
                src={images["star_fill_blue.svg"]}
                className="start-img"
                alt=""
              />
            </span>
          </label>
          <label data-v-a69845bc="" className="box-checkbox">
            <input data-v-a69845bc="" type="checkbox" name="star" value="5" />
            <span data-v-a69845bc="" className="text-content">
              5
              <Image
                src={images["star_fill_blue.svg"]}
                className="start-img"
                alt=""
              />
            </span>
          </label>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Accommodation Type</h6>

        <div className={style.accommodation_ceckboxes}>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Resort"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Resort"
              className={style.coustom_control_checkbox_title}
            >
              Resort
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Lodge"
              className={style.coustom_control_checkbox}
            />
            <label for="Lodge" className={style.coustom_control_checkbox_title}>
              Lodge
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Inn"
              className={style.coustom_control_checkbox}
            />
            <label for="Inn" className={style.coustom_control_checkbox_title}>
              Inn
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel2"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel2"
              className={style.coustom_control_checkbox_title}
            >
              Hotel
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel3"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel3"
              className={style.coustom_control_checkbox_title}
            >
              Cottage
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel4"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel4"
              className={style.coustom_control_checkbox_title}
            >
              Apartment
            </label>
          </div>
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Facilities</h6>

        <div className={style.Facilities_ceckboxes}>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel5"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel5"
              className={style.coustom_control_checkbox_title}
            >
              Breakfast
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel6"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel6"
              className={style.coustom_control_checkbox_title}
            >
              Wifi
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel7"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel7"
              className={style.coustom_control_checkbox_title}
            >
              Non-smoking
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel8"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel8"
              className={style.coustom_control_checkbox_title}
            >
              Restaurant
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel9"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel9"
              className={style.coustom_control_checkbox_title}
            >
              Parking
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel10"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel10"
              className={style.coustom_control_checkbox_title}
            >
              Apartment
            </label>
          </div>
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Amenities</h6>

        <div className={style.Facilities_ceckboxes}>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel11"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel11"
              className={style.coustom_control_checkbox_title}
            >
              Air Conditioning
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel12"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel12"
              className={style.coustom_control_checkbox_title}
            >
              Balcony
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel13"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel13"
              className={style.coustom_control_checkbox_title}
            >
              Bathtub
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel14"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel14"
              className={style.coustom_control_checkbox_title}
            >
              Ceiling Fan
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel15"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel15"
              className={style.coustom_control_checkbox_title}
            >
              Connecting Rooms
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel16"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel16"
              className={style.coustom_control_checkbox_title}
            >
              Cooker
            </label>
          </div>
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Neighbourhood</h6>

        <div className={style.Facilities_ceckboxes}>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel17"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel17"
              className={style.coustom_control_checkbox_title}
            >
              Ayubia
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel18"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel18"
              className={style.coustom_control_checkbox_title}
            >
              Changla Gali
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Hotel19"
              className={style.coustom_control_checkbox}
            />
            <label
              for="Hotel19"
              className={style.coustom_control_checkbox_title}
            >
              Donga Gali
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="hotel20"
              className={style.coustom_control_checkbox}
            />
            <label
              for="hotel20"
              className={style.coustom_control_checkbox_title}
            >
              Hotel
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="hotel21"
              className={style.coustom_control_checkbox}
            />
            <label
              for="hotel21"
              className={style.coustom_control_checkbox_title}
            >
              Nathiagali
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="hotel22"
              className={style.coustom_control_checkbox}
            />
            <label
              for="hotel22"
              className={style.coustom_control_checkbox_title}
            >
              Thandiani
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
