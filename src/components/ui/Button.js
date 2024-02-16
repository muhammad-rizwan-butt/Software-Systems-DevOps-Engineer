import React from "react";
import styles from "../../styles/ui/button.module.scss";

export const Button = ({
  children,
  variant,
  size,
  shape,
  className = "",
  background,
  ...props
}) => {
  let buttonClassName = `${styles.button}  ${styles[background]}  ${styles[variant]} ${styles[size]} ${styles[shape]} ${className}`;
  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};
