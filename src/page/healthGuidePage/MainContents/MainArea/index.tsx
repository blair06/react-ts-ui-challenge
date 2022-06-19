import React from "react";
import styles from "./MainArea.module.scss";
import cb from "classnames/bind";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import MainCard, { MainCardColorTheme } from "./MainCard";
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
        <MainCard
          title={`Diet & Exercise`}
          colorTheme={MainCardColorTheme.purple}
        />
        <MainCard title={`Screening & Tests`} shadow={true}>
          <div className={cn(`container_secondCard`)}>
            <div className={cn(`wrapper_secondCard`, `header`)}>
              <p>
                09/<span>15</span>
              </p>
              <IoIosArrowForward />
            </div>
            <div className={cn(`container_graph`)}>
              <div className={cn(`gradiantBar`)}></div>
            </div>
            <p>Check your health list</p>
            <div className={cn(`wrapper_stethoscope`)}>
              <img
                src={
                  "https://us.123rf.com/450wm/yupiramos/yupiramos1904/yupiramos190417905/123390180-%EC%B2%AD%EC%A7%84%EA%B8%B0-%EC%8B%AC%EC%9E%A5-%EC%9E%A5%EC%B9%98-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg?ver=6"
                }
                alt="icon"
              />
            </div>
          </div>
        </MainCard>
        <MainCard
          title={`Rest & Healing`}
          colorTheme={MainCardColorTheme.green}
        />
      </div>
    </div>
  );
};

export default MainArea;
