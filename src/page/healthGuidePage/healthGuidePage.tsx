import React from "react";
import styles from "./healthGuidePage.module.scss";
import cb from "classnames/bind";
import Panel from "component/panel";
import { SizeTheme } from "interface/style";
import SideMenu from "./SideMenu";
import MainContents from "./MainContents";
const cn = cb.bind(styles);

const HealthGuidePage = () => {
  return (
    <Panel
      className={cn(`inCardPanel`)}
      size={SizeTheme.large}
      background={true}
    >
      <div className={cn(`wrapper`)}>
        <SideMenu />
        <MainContents />
      </div>
    </Panel>
  );
};

export default HealthGuidePage;
