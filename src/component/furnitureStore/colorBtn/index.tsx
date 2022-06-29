import React from "react";
import styles from "./colorBtn.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);
interface ColorBtnProps {
  color: string;
  selected?: boolean;
  className?: string;
}
const ColorBtn = (props: ColorBtnProps) => {
  const { color, selected = false, className } = props;
  return (
    <div className={cn(`container`, selected && `selected`, className)}>
      <div className={cn(`wrapper`)}>
        <div
          className={cn(`colorFill`)}
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};

export default ColorBtn;
