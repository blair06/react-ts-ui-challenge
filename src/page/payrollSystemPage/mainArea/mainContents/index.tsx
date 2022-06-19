import React from "react";
import style from "./mainContents.module.scss";
import cb from "classnames/bind";
import Panel from "component/panel";
import MyResponsivePie from "./myResponsivePie";
import CircleProfile from "component/healthGuide/circleProfile/CircleProfile";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ProfileImg from "asset/img/profile.png";
const cn = cb.bind(style);
const data = [
  {
    id: "completed",
    label: "completed",
    value: 352,
    color: "hsl(201, 70%, 50%)",
  },
  {
    id: "in progress",
    label: "in progress",
    value: 83,
    color: "hsl(221, 70%, 50%)",
  },
];
const MainContents = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `info`)}>
        <div className={cn(`infoSection`)}>
          <Panel className={cn(`infoPanel`, `first`)} background={true}>
            <div className={cn(`gr`)}>
              <MyResponsivePie data={data}></MyResponsivePie>
            </div>
          </Panel>
          <Panel className={cn(`infoPanel`, `second`)} background={true}>
            2
          </Panel>
          <Panel className={cn(`infoPanel`, `third`)} background={true}>
            <p>Product Meetings</p>
            <p>02:00-03:00 PM</p>
            <div className={cn(`time`)}>
              <p>15 Min Left</p>
            </div>
            <div className={cn(`wrapper_profile`)}>
              <CircleProfile img={ProfileImg} />
              <CircleProfile img={ProfileImg} />
              <IoIosArrowDroprightCircle color="#fff" size={20} />
            </div>
          </Panel>
          <Panel className={cn(`infoPanel`, `fourth`)} background={true}>
            4
          </Panel>
          <Panel className={cn(`infoPanel`, `fifth`)} background={true}>
            bottom
          </Panel>
        </div>
      </div>
      <div className={cn(`wrapper`, `calender`)}>
        <Panel className={cn(`calenderPanel`)} background={true}>
          calender
        </Panel>
      </div>
    </div>
  );
};

export default MainContents;
