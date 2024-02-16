import React from "react";
import style from "../../styles/ui/checkbox.module.scss";

export const Checkbox = ({ label, onChange, value, id, ...props }) => {
  return (
    <div className={style.chekbox_filter}>
      <input
        type="checkbox"
        id={id}
        value={value}
        className={style.coustom_control_checkbox}
        onChange={onChange}
        {...props}
      />
      <label for="WiFi" className={style.coustom_control_checkbox_title}>
        {label}
      </label>
    </div>
  );
};
