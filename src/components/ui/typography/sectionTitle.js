import React from "react";
import style from "../../../styles/ui/typography/sectionTitle.module.scss";

export const SectionTitle = ({ children }) => {
  return <h4 className={style.sectiontitle}>{children}</h4>;
};
