import React from "react";
import styles from "./MainContents.module.scss";
import cb from "classnames/bind";
import HeaderArea from "./HeaderArea";
import MainArea from "./MainArea";
import BottomArea from "./BottomArea";

const cn = cb.bind(styles);
const MainContents = () => {
  return (
    <div className={cn("container")}>
      <HeaderArea />
      <MainArea />
      <BottomArea />
    </div>
  );
};

export default MainContents;
