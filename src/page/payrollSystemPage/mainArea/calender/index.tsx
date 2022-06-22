import React from "react";
import style from "./calender.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(style);
const Calender = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)}>
        <p className={cn(`title`)}>
          <span>Jan 10,</span>Tuesday
        </p>
      </div>
    </div>
  );
};

export default Calender;
