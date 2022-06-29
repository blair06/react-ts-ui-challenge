import React, { useState } from "react";
import styles from "./productCard.module.scss";
import cb from "classnames/bind";
import chair from "asset/img/chair.png";
import { BsHandbagFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
const cn = cb.bind(styles);
interface ProductCardProps {
  imgURL?: string;
  title?: string;
  price?: string;
  className?: string;
  info?: boolean;
  onClick?: () => void;
}
const ProductCard = (props: ProductCardProps) => {
  const {
    imgURL,
    title = "title",
    price = "30.00",
    onClick,
    info = true,
    className,
  } = props;
  const [heart, setHeart] = useState<boolean>(false);
  return (
    <div className={cn(`container`, className)} onClick={onClick}>
      <div className={cn(`wrapper`, `img`)}>
        <img src={imgURL} alt="productImg" />
        {info && (
          <AiOutlineHeart
            className={cn(`heart_Icon`, heart && `active`)}
            color={"#acacac"}
            size={15}
            onClick={() => {
              setHeart(!heart);
            }}
          />
        )}
      </div>
      {info && (
        <div className={cn(`wrapper`, `contents`)}>
          <div className={cn(`info`)}>
            <p>{title}</p>
            <p>${price}</p>
          </div>
          <div className={cn(`circleBtn`)}>
            <BsHandbagFill color="#fff" size={15} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
