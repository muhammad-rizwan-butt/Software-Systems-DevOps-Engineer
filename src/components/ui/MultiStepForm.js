import React from "react";

import style from "../../styles/ui/multistepform.module.scss";

export const MultiStepForm = ({ activeStep, list }) => {
  return (
    <div className={style.stepform__container}>
      <ul className={style.stepform__listBox}>
        {list.map(({ title, icon, step }, i) => {
          let Icon = icon;
          return (
            <li
              className={`${style.stepform__list} ${
                activeStep == step && style.active
              }`}
              key={i + title}
            >
              <span className={style.list__icon}>{Icon}</span>
              <p className={style.list__text}>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
