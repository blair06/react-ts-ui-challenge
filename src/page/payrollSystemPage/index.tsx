import React from "react";
import style from "./payrollSystemPage.module.scss";
import cb from "classnames";
import MainArea from "./mainArea";

const cn = cb.bind(style);
const PayrollSystemPage = () => {
  return (
    <>
      <div className={cn(`sideMenuTest`)}></div>
      <MainArea></MainArea>
    </>
  );
};

export default PayrollSystemPage;
