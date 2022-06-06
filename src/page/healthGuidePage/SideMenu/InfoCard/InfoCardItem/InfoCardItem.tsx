import React from "react";
import styles from "./InfoCardItem.module.scss";
import cb from "classnames/bind";
import { InfoCardItemValueInterface } from "../mockupData";

const cn = cb.bind(styles);
interface IProps {
  data: InfoCardItemValueInterface;
}
const InfoCardItem = (props: IProps) => {
  const { data } = props;
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `title`)}>
        <p>{data.title}</p>
      </div>
      <div className={cn(`wrapper`, `data`)}>
        <p>{data.data}</p>
        <p>{data.unit}</p>
      </div>
    </div>
  );
};

export default InfoCardItem;
