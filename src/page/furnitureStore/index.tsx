import React from "react";
import styles from "./furnitureStore.module.scss";
import cb from "classnames/bind";
import chair from "asset/img/chair.png";
import { useNavigate } from "react-router-dom";
const cn = cb.bind(styles);

const FurnitureStore = () => {
  const navigate = useNavigate();
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)}>
        <p className={cn(`title`)}> Elegant,</p>
        <p className={cn(`title`)}>Unique</p>
        <p className={cn(`sub_title`)}>Furnitures for you</p>
      </div>
      <div className={cn(`wrapper`, `img`)}>
        <img className={cn(`img`)} src={chair} alt="chairImg" />
      </div>
      <div className={cn(`wrapper`, `footer`)}>
        <div className={cn(`desc`)}>
          <p>Afforadable furniture</p>
          <p>For your dream house</p>
        </div>
        <div className={cn(`btn`)} onClick={() => navigate(`/main`)}>
          <p>Start</p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureStore;
