import React, { ReactNode } from "react";
import styles from "./BottomCard.module.scss";
import cb from "classnames/bind";
import Panel from "component/HealthGuide/panel";

import { BorderTheme } from "interface/style";

const cn = cb.bind(styles);

interface BottomCardProps {
  border?: BorderTheme;
  title?: string;
  icon?: ReactNode;
  time?: string;
  className?: string;
}
const BottomCard = (props: BottomCardProps) => {
  const { border = BorderTheme.solid, title, icon, time, className } = props;
  return (
    <div className={cn(`container`)}>
      <Panel border={border}>
        <div className={cn(`wrapper`, `contents`, `${className}`)}>
          <p className={cn(`title`)}>{title}</p>
          <div className={cn(`icon`)}>{icon}</div>
          <p className={cn(`test`)}>11347</p>
          <p className={cn(`time`)}>Last Update: {time}</p>
        </div>
      </Panel>
    </div>
  );
};

export default BottomCard;
