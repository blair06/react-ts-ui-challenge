import React, { useEffect, useState } from "react";
import styles from "./healthGuidePage.module.scss";
import cb from "classnames/bind";
import { Panel } from "../../component";
import { SizeTheme } from "../../interface/style";
import SideMenu from "./SideMenu";
const cn = cb.bind(styles);

interface IProps {
  children?: React.ReactNode;
}
const HealthGuidePage = (props: IProps) => {
  const { children } = props;
  return (
    // <div className={cn("container")}>
    //   <div className={cn("sideMenuContainer")}>side</div>
    // </div>
    <>
      <Panel size={SizeTheme.large} background={true} shadow={true}>
        <div className={cn(`wrapper`)}>
          <SideMenu></SideMenu>

          <div className={cn(`contentsArea`)}>contents</div>
        </div>
      </Panel>
    </>
  );
};

export default HealthGuidePage;
