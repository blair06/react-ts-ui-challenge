import React, { useEffect, useState } from "react";
import styles from "./panel.module.scss";
import cb from "classnames/bind";
import { BorderTheme, SizeTheme } from "../../interface/style";
const cn = cb.bind(styles);

interface IProps {
  children: React.ReactNode;
  size?: SizeTheme;
  border?: BorderTheme;
  background?: boolean;
  shadow?: boolean;
  className?: string;
}
const HealthGuidePanel = (props: IProps) => {
  const {
    children,
    size = SizeTheme.small,
    border = BorderTheme.none,
    background = false,
    shadow = false,
    className,
  } = props;
  return (
    <div
      className={cn(
        `container`,
        `size-${size}`,
        `border-${border}`,
        `background-${background}`,
        `shadow-${shadow}`,
        `${className}`
      )}
    >
      {children}
    </div>
  );
};

export default HealthGuidePanel;
