import React from "react";
import styles from "./sideMenu.module.scss";
import cb from "classnames/bind";
import logo from "../../../asset/img/logo.png";
import SideMenuList from "./SideMenuList/SideMenuList";
import InfoCard from "./InfoCard/InfoCard";
const cn = cb.bind(styles);
const SideMenu = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`align`, `top`)}>
        <div className={cn(`wrapper`, `img`)}>
          <img src={logo} alt="logo img"></img>
        </div>
        <SideMenuList />
      </div>
      <div className={cn(`wrapper`, `infoCard`)}>
        <InfoCard />
      </div>
    </div>
  );
};

export default SideMenu;
