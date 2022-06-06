import React, { useState, useEffect } from "react";
import styles from "./SideMenuList.module.scss";
import cb from "classnames/bind";
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import { sideMenuItemValue } from "./SideMenuItem/mockupData";
const cn = cb.bind(styles);

const SideMenuList = () => {
  const [isSelected, setIsSelected] = useState<number>(0);

  useEffect(() => {}, [isSelected]);
  return (
    <div className={cn(`container`)}>
      {sideMenuItemValue.map((item, num) => {
        return (
          <SideMenuItem
            className={`${isSelected === num ? `active` : ``}`}
            key={num}
            data={item}
            onClick={() => setIsSelected(num)}
          ></SideMenuItem>
        );
      })}
    </div>
  );
};

export default SideMenuList;
