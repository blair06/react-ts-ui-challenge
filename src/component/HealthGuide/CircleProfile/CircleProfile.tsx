import React from "react";
import styles from "./CircleProfile.module.scss";
import cb from "classnames/bind";

const cn = cb.bind(styles);

interface IProps {
  img: string;
  shadow?: true;
}
const CircleProfile = (props: IProps) => {
  const { img, shadow = false } = props;
  return (
    <div className={cn(`container`, `${shadow}`)}>
      <div className={cn(`wrapper`)}>
        <img className={cn(`profileImg`)} src={img} alt="circle profile" />
      </div>
    </div>
  );
};

export default CircleProfile;
