import React, { useEffect, useState } from "react";
import styles from "./healthGuidePage.module.scss";
import cb from "classnames/bind";
import HealthGuidePanel from "./healthGuidePanel";
const cn = cb.bind(styles);
const healthGuidePage: React.FC<{}> = ({}) => {
  return <HealthGuidePanel>child</HealthGuidePanel>;
};

export default healthGuidePage;
