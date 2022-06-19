import React from "react";
import style from "./mainArea.module.scss";
import cb from "classnames";

const cn = cb.bind(style);

const MainArea = () => {
  return <div className={cn(`container`)}></div>;
};

export default MainArea;
