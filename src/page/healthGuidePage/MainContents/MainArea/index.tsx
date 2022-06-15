import React from "react";
import styles from "./MainArea.module.scss";
import cb from "classnames/bind";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

import MainCard from "./MainCard";
const cn = cb.bind(styles);
const MainArea = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)}>
        <p>Health guide</p>
        <div className={cn(`wrapper`, `arrow`)}>
          <HiOutlineArrowNarrowLeft
            className={cn(`firstArrow`)}
            size={30}
            color={`#3837371a`}
          />
          <HiOutlineArrowNarrowRight size={30} />
        </div>
      </div>
      <div className={cn(`wrapper`, `contents`)}>
        <MainCard />
      </div>
    </div>
  );
};

export default MainArea;
