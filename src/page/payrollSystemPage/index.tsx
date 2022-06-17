import React from "react";
import SideMenuArea from "./sideMenuArea";
import styles from "./payrollSystemPage.module.scss";
import cb from "classnames/bind";
import MainArea from "./mainArea";

const cn = cb.bind(styles);
const PayrollSystemPage = () => {
  return (
    <div className={cn(`container`)}>
      <SideMenuArea />
      <MainArea />
    </div>
  );
};

export default PayrollSystemPage;
