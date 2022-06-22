import React from "react";
import style from "./mainArea.module.scss";
import cb from "classnames";
import MainAreaLayout from "./mainAreaLayout";
import MainContents from "./mainContents";

const cn = cb.bind(style);

const MainArea = () => {
  return (
    <MainAreaLayout>
      <MainContents />
    </MainAreaLayout>
  );
};

export default MainArea;
