import React from "react";
import style from "./mainArea.module.scss";
import cb from "classnames";
import MainAreaLayout from "./mainAreaLayout";

const cn = cb.bind(style);

const MainArea = () => {
  return <MainAreaLayout></MainAreaLayout>;
};

export default MainArea;
