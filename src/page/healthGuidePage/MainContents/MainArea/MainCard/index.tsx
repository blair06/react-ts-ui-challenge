import React from "react";
import styles from "./MainCard.module.scss";
import cb from "classnames/bind";
import { Panel } from "../../../../../component";
import { SizeTheme } from "../../../../../interface/style";
const cn = cb.bind(styles);
const MainCard = () => {
  return (
    <Panel className={cn(`panel`, `first`)} size={SizeTheme.medium}>
      <div className={cn(`wrapper`, `card`)}>
          
      </div>
    </Panel>
  );
};

export default MainCard;
