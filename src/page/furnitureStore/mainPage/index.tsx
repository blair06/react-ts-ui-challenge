import React from "react";
import styles from "./mainPage.module.scss";
import cb from "classnames/bind";
import chair from "asset/img/chair.png";
import chair2 from "asset/img/chair2.png";
import ProductCard from "component/furnitureStore/productCard";
import CircleBtn from "component/furnitureStore/circleBtn";

import { useNavigate } from "react-router-dom";
import SearchInput from "component/SearchInput";
import { BsSliders } from "react-icons/bs";
import { RiArrowRightFill } from "react-icons/ri";
const cn = cb.bind(styles);
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`)}>
        <p className={cn(`header`, `title`)}>Best Furnitures For</p>
        <p className={cn(`header`, `title`)}>Your Home</p>
        <SearchInput className={cn(`searchInput`)} iconColor={"#acacac"}>
          <div className={cn(`suffix`)}>
            <BsSliders color={"#acacac"} size={15}></BsSliders>
          </div>
        </SearchInput>
        <div className={cn(`subTitle`)}>
          <p>Hot Deals</p>
        </div>
        <div className={cn(`banner`)}>
          <div className={cn(`info`)}>
            <p>Best Deals on</p>
            <p>furniture</p>
            <div className={cn(`shopNow`)}>
              <p>Shop Now</p>
              <RiArrowRightFill size={15} color="#df9144" />
            </div>
          </div>
          <img src={chair2} alt="bannerImg" />
        </div>
      </div>
      <div className={cn(`carousel`)}>
        <CircleBtn imgURL={chair} />
        <CircleBtn imgURL={chair} />
        <CircleBtn imgURL={chair} />
        <CircleBtn imgURL={chair} />
        <CircleBtn imgURL={chair} />
      </div>
      <div className={cn(`wrapper`)}>
        <div className={cn(`subTitle`)}>
          <p>New Arrivals</p>
          <p>View all</p>
        </div>
      </div>
      <div className={cn(`carousel`)}>
        <ProductCard imgURL={chair} onClick={() => navigate(`/detail`)} />
        <ProductCard imgURL={chair} />
        <ProductCard imgURL={chair} />
        <ProductCard imgURL={chair} />
        <ProductCard imgURL={chair} />
        <ProductCard imgURL={chair} />
      </div>
    </div>
  );
};

export default MainPage;
