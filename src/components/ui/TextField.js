import React from "react";
import style from "../../styles/ui/input.module.css";

const TextField = ({
  value,
  onChange = () => {},
  onBlur = () => {},
  error,
  label,
  name,
  containerClass,
  placeholder,
  type = "text",
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={` relative d-flex flex-column ${containerClass || ""}`}>
      {label && (
        <label className={` ${style.textfield_label}`} htmlFor={name}>
          {label}
        </label>
      )}
      <div className=" w-100 relative d-flex justify-content-end align-items-center">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          {...props}
          className={` 
            ${style.textfield}
            w-100
            ${className || ""}
            ${error ? " error-field " : ""}
            ${disabled ? "disabled" : ""}
      `}
        />
      </div>
      {error ? (
        <div className={` ${style.textfield_error}`}>{error}</div>
      ) : null}
    </div>
  );
};

export { TextField };
