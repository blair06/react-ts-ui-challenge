import CircleBtn from "component/furnitureStore/circleBtn";
import React from "react";
import chair from "asset/img/chair.png";
import ProductCard from "component/furnitureStore/productCard";

const MainPage = () => {
  return (
    <div>
      <ProductCard
        imgURL={chair}
        title={"newYork Chair"}
        price={`30.00`}
      ></ProductCard>
    </div>
  );
};

export default MainPage;
