import React from "react";
import styles from "./CircleProfile.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface IProps {
  img: string;
  shadow?: true;
  className?: string;
}
const CircleProfile = (props: IProps) => {
  const { img, shadow = false, className } = props;
  return (
    <div className={cn(`container`, shadow, className)}>
      <div className={cn(`wrapper`)}>
        <img className={cn(`profileImg`)} src={img} alt="circle profile" />
      </div>
    </div>
  );
};

export default CircleProfile;
