import React, { ReactNode } from "react";
import styles from "./sideMenuArea.module.scss";
import cb from "classnames/bind";

import SideMenuList from "./sideMenuList";
import SearchInput from "component/SearchInput";
const cn = cb.bind(styles);
export interface menuListInterface {
  icon: ReactNode;
  title: string;
}

const SideMenuArea = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `top`)}>
        <div className={cn(`wrapper`, `circleLogo`)}>
          <div className={cn(`circleLogo-white`)}></div>
        </div>
      </div>
      <div className={cn(`wrapper`, `search`)}>
        <SearchInput className={cn(`searchInput`)} iconColor={"#afbeff"} />
      </div>
      <SideMenuList />
    </div>
  );
};

export default SideMenuArea;
