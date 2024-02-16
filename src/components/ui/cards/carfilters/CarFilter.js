import React from "react";
import style from "../../../../styles/ui/cards/filter.module.scss";
export const CarFilter = () => {
  return (
    <>
      <div className={`${style.car_filters} box-shadow`}>
        <div className={style.filter_title_reset}>
          <h5 className={style.filter_title}>Filters</h5>
          <button className={style.reset_btn_filter}>Reset</button>
        </div>
        <h6 className={style.Popular_Filters_heading}>Location</h6>
        <div className={style.chekbox_filter}>
          <input
            type="checkbox"
            className={style.coustom_control_checkbox}
            id="star3"
          />
          <label for="star3" className={style.coustom_control_checkbox_title}>
            All other locations
          </label>
        </div>
      
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Price per day</h6>
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
              $0 - $50
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Lodge"
              className={style.coustom_control_checkbox}
            />
            <label for="Lodge" className={style.coustom_control_checkbox_title}>
              $50 - $100
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Inn"
              className={style.coustom_control_checkbox}
            />
            <label for="Inn" className={style.coustom_control_checkbox_title}>
              $100 - $150
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
              $150-$200
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
              $200+
            </label>
          </div>
          
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Car Specs</h6>

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
              Air Conditioning
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Lodge"
              className={style.coustom_control_checkbox}
            />
            <label for="Lodge" className={style.coustom_control_checkbox_title}>
              4+ doors
            </label>
          </div>
         
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Electric cars</h6>
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
              Fully electric
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Lodge"
              className={style.coustom_control_checkbox}
            />
            <label for="Lodge" className={style.coustom_control_checkbox_title}>
              Hybrid
            </label>
          </div>
          <div className={style.chekbox_filter}>
            <input
              type="checkbox"
              id="Inn"
              className={style.coustom_control_checkbox}
            />
            <label for="Inn" className={style.coustom_control_checkbox_title}>
              Plug-in hybid
            </label>
          </div>
         
        </div>
        
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Mileage</h6>

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
              Limited
            </label>
          </div>
         
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Transmission</h6>

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
              Automatic
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
              Manual
            </label>
          </div>
          
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Car Category</h6>

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
              Medium
            </label>
          </div>
         
        </div>

        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Fuel Policy</h6>

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
              Like for like
            </label>
          </div>
         
         
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Security deposit at pick-up</h6>

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
              $0-$600
            </label>
          </div>
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
              $600-$900
            </label>
          </div>
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
              $900-$1,200
            </label>
          </div>
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
              $1,200+
            </label>
          </div>
        </div>
        <div className={style.underline_checkbox}></div>
        <h6 className={style.Popular_Filters_heading}>Supplier</h6>

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
      EuropCar
    </label>
  </div>
 
 
</div>
      </div>
    </>
  );
};