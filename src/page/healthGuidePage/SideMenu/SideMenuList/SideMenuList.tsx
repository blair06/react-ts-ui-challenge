import React from "react";
import styles from "./SideMenuList.module.scss";
import cb from "classnames/bind";
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import { sideMenuItemValue } from "./SideMenuItem/mockupData";
const cn = cb.bind(styles);

const SideMenuList = () => {
  return (
    <div className={cn(`container`)}>
      {sideMenuItemValue.map((item, num) => {
        return <SideMenuItem key={num} data={item}></SideMenuItem>;
      })}
    </div>
  );
};

export default SideMenuList;
