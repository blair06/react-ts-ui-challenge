import React from "react";
import styles from "./InfoCard.module.scss";
import cb from "classnames/bind";
import Panel from "component/HealthGuide/panel";
import { SizeTheme } from "interface/style";
import InfoCardItem from "./InfoCardItem/InfoCardItem";
import { InfoCardItemValue } from "./mockupData";

const cn = cb.bind(styles);
const InfoCard = () => {
  return (
    <Panel background={true} shadow={true} size={SizeTheme.large}>
      <div className={cn(`wrapper`, `infoCard`)}>
        {InfoCardItemValue.map((item, num: number) => {
          return <InfoCardItem key={num} data={item}></InfoCardItem>;
        })}
      </div>
    </Panel>
  );
};

export default InfoCard;
