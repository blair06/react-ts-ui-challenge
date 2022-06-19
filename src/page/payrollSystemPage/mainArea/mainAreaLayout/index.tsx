import React from "react";
import styles from "./mainAreaLayout.module.scss";
import cb from "classnames/bind";
import CircleProfile from "component/healthGuide/circleProfile/CircleProfile";
import profile from "asset/img/profile.png";
import { FiSettings } from "react-icons/fi";

const cn = cb.bind(styles);
const MainAreaLayout = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)}>
        <div className={cn(`wrapper`, `title`)}>
          <p>Dashboard</p>
        </div>

        <div className={cn(`wrapper`, `profile`)}>
          <CircleProfile img={profile} className={cn(`profileImg`)} />
          <p>David Mills</p>
          <div className={cn(`settings`)}>
            <FiSettings size={30}></FiSettings>
          </div>
        </div>
      </div>
      <div className={cn(`wrapper`, `contents`)}>contents</div>
    </div>
  );
};

export default MainAreaLayout;
