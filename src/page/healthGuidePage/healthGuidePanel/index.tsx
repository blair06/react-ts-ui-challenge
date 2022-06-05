import React, { useEffect, useState } from "react";
import styles from "./healthGuidePanel.module.scss";
import cb from "classnames/bind";
import { Panel } from "../../../component";
import { BorderTheme, SizeTheme } from "../../../interface/style";
const cn = cb.bind(styles);

interface IProps {
  children: React.ReactNode;
}
const HealthGuidePanel = (props: IProps) => {
  const { children } = props;
  return (
    // <div className={cn("container")}>
    //   <div className={cn("sideMenuContainer")}>side</div>
    // </div>
    <>
      <Panel size={SizeTheme.large} background={true} shadow={true}>
        child
      </Panel>
    </>
  );
};

export default HealthGuidePanel;
