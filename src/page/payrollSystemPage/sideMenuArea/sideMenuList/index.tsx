import React, { useState } from "react";
import styles from "./sideMenuList.module.scss";
import cb from "classnames/bind";
import { menuListInterface } from "..";
import SideMenuListItem from "./sideMenuListItem";
import { FaRegUser } from "react-icons/fa";
import { BiWalletAlt, BiHelpCircle } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBell } from "react-icons/fi";
const cn = cb.bind(styles);
const topMenuList: menuListInterface[] = [
  {
    icon: <MdOutlineDashboard size={20} />,
    title: "Dashboard",
  },
  {
    icon: <FaRegUser size={20} />,
    title: "My Profile",
  },
  {
    icon: <BiWalletAlt size={20} />,
    title: "My Pay",
  },
  {
    icon: <TiDocumentText size={20} />,
    title: "My Documents",
  },
  {
    icon: <TbHeartRateMonitor size={20} />,
    title: "My Retirement",
  },
];
const bottomMenuList: menuListInterface[] = [
  {
    icon: <BiHelpCircle size={20} />,
    title: "Help Center",
  },
  {
    icon: <FiBell size={20} />,
    title: "Notifications",
  },
];
const SideMenuList = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <>
      <div className={cn(`container`, `top`)}>
        {topMenuList.map((item: menuListInterface, num: number) => {
          return (
            <SideMenuListItem
              data={item}
              className={selected === num ? `selected` : ``}
              key={num}
              onClick={() => setSelected(num)}
            />
          );
        })}
      </div>

      <div className={cn(`divisionLine`)}>
        <div className={cn(`horizonBar`)} />
        <div className={cn(`verticalBar`)} />
      </div>
      <div className={cn(`container`, `bottom`)}>
        {bottomMenuList.map((item: menuListInterface, num: number) => {
          return (
            <SideMenuListItem
              data={item}
              className={selected === num + 5 ? `selected` : ``}
              key={num}
              onClick={() => setSelected(num + 5)}
            />
          );
        })}
      </div>
    </>
  );
};

export default SideMenuList;
