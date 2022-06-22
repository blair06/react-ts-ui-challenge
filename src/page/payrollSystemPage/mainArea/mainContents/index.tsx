import React from "react";
import style from "./mainContents.module.scss";
import cb from "classnames/bind";
import Panel from "component/panel";
import InfoSection from "./infoSection";
import Calender from "../calender";

const cn = cb.bind(style);

const MainContents = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `info`)}>
        <InfoSection />
      </div>
      <div className={cn(`wrapper`, `calender`)}>
        <Panel className={cn(`calenderPanel`)} background={true}>
          <Calender />
        </Panel>
      </div>
    </div>
  );
};

export default MainContents;
