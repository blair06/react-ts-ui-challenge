import React from "react";
import styles from "./sideMenuListItem.module.scss";
import cb from "classnames/bind";
import { menuListInterface } from "../..";

const cn = cb.bind(styles);
interface SideMenuListProps {
  data: menuListInterface;
  className?: string;
  onClick?: () => void;
}
const SideMenuListItem = (props: SideMenuListProps) => {
  const { data, className, onClick } = props;
  return (
    <div className={cn(`container`, className)} onClick={onClick}>
      <div className={cn(`icon`)}>{data.icon}</div>
      <div className={cn(`title`)}>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

export default SideMenuListItem;
