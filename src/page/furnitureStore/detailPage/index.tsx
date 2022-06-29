import React, { useState } from "react";
import DetailLayout from "./detailLayout";
import styles from "./detailPage.module.scss";
import cb from "classnames/bind";
import ProductCard from "component/furnitureStore/productCard";
import chair from "asset/img/chair.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import ColorBtn from "component/furnitureStore/colorBtn";
const cn = cb.bind(styles);
export interface detailDataInterface {
  category: string;
  name: string;
  desc: string;
  imgURL: string;
  color: string[];
  price: string;
}
const detailData: detailDataInterface = {
  category: "Home",
  name: "Leatherett Chair",
  desc: "Amazing stylish in multiple colors choice we have for Most selling item of this year",
  imgURL: chair,
  color: ["#000000", "#ff0000", "#ffe4e1"],
  price: "30.0",
};
const DetailPage = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <DetailLayout>
      <ProductCard
        imgURL={detailData.imgURL}
        info={false}
        className={cn(`productCard`)}
      />
      <div className={cn(`wrapper`)}>
        <p className={cn(`title`)}>{detailData.category}</p>
        <p className={cn(`name`)}>{detailData.name}</p>
        <p>{detailData.desc}</p>
        <p className={cn(`readMore`)}> Read more</p>
      </div>
      <div className={cn(`wrapper`)}>
        <p className={cn(`title`)}>Color</p>
        <div className={cn(`carousel`)}>
          {detailData.color.map((item, num) => {
            return (
              <ColorBtn
                className={cn(`colorBtn`)}
                key={num}
                color={item}
                selected={0 === num && true}
              />
            );
          })}
        </div>
      </div>
      <div className={cn(`wrapper`)}>
        <p className={cn(`title`)}>Price</p>
        <div className={cn(`wrapper_price`)}>
          <div className={cn(`price`)}>${detailData.price}</div>
          <div className={cn(`amount`)}>
            <BiMinus size={20} onClick={() => setCount(count - 1)}></BiMinus>
            <p>{count}</p>
            <BiPlus size={20} onClick={() => setCount(count + 1)}></BiPlus>
          </div>
        </div>
      </div>
    </DetailLayout>
  );
};

export default DetailPage;
