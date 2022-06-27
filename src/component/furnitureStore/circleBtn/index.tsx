import React from "react";
import styles from "./circleBtn.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);
interface CircleBtnProps {
  imgURL?: string;
  title?: string;
  className?: string;
}
const CircleBtn = (props: CircleBtnProps) => {
  const { imgURL, title = "title", className } = props;
  return (
    <div className={cn(`container`, className)}>
      <div className={cn(`wrapper`, `img`)}>
        <img src={imgURL} alt="img" />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default CircleBtn;
