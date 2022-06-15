import React, { ReactNode } from "react";
import styles from "./MainCard.module.scss";
import cb from "classnames/bind";
import { Panel } from "../../../../../component";
import { SizeTheme } from "../../../../../interface/style";
const cn = cb.bind(styles);

export enum MainCardColorTheme {
  purple = "purple",
  green = "green",
  none = "none",
}
interface MainCardProps {
  title: string;
  children?: ReactNode;
  colorTheme?: MainCardColorTheme;
  shadow?: boolean;
}
const MainCard = (props: MainCardProps) => {
  const {
    title,
    children,
    colorTheme = MainCardColorTheme.none,
    shadow = false,
  } = props;
  return (
    <div className={cn(`container`)}>
      <Panel
        className={cn(`panel`, `first`)}
        size={SizeTheme.medium}
        shadow={shadow}
      >
        <div className={cn(`wrapper`, `card`, `colorTheme-${colorTheme}`)}>
          <div className={cn(`wrapper`, `healthList`)}>{children}</div>
          <p>{title}</p>
        </div>
      </Panel>
    </div>
  );
};

export default MainCard;
