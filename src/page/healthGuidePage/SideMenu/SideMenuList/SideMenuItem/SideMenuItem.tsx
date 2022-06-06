import React from "react";
import { sideMenuItemValueInterface } from "./mockupData";
import styles from "./SideMenuItem.module.scss";
import cb from "classnames/bind";
import { FaRegEye } from "react-icons/fa";
import { IconBase } from "react-icons";

const cn = cb.bind(styles);

interface IProps {
  data: sideMenuItemValueInterface;
}
const SideMenuItem = (props: IProps) => {
  const { data } = props;

  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `icon`)}>
        {React.createElement(data.icon, {
          width: 20,
          height: 20,
          color: "#bdbdbd",
          className: "sideMenuIcon",
        })}
      </div>
      <div className={cn(`wrapper`, `title`)}>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default SideMenuItem;
