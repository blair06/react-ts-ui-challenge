import React, { ReactNode } from "react";
import styles from "./detailLayout.module.scss";
import cb from "classnames/bind";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const cn = cb.bind(styles);

interface DetailLayoutProps {
  children: ReactNode;
}
const DetailLayout = (props: DetailLayoutProps) => {
  const { children } = props;
  const navigate = useNavigate();
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)} onClick={() => navigate(-1)}>
        <IoIosArrowBack size={20} />
        <p>Details</p>
        <BsThreeDotsVertical size={20} />
      </div>
      {children}

      <button className={cn(`wrapper`, `buyBtn`)}>Buy Now</button>
    </div>
  );
};

export default DetailLayout;
