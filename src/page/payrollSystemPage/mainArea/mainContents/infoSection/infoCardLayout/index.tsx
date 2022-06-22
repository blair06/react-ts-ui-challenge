import React, { ReactNode } from "react";
import style from "./infoCardLayout.module.scss";
import cb from "classnames/bind";

import { BsThreeDotsVertical, BsDownload } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
const cn = cb.bind(style);

interface InfoCardProps {
  title: string;
  menuButtonColor?: "white" | "blue";
  children: ReactNode;
  viewAll?: boolean;
  headerOption?: boolean;
}
const InfoCardLayout = (props: InfoCardProps) => {
  const {
    title,
    menuButtonColor = "blue",
    viewAll = true,
    headerOption = false,
    children,
  } = props;

  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `header`)}>
        <p className={cn(`title`)}>{title}</p>
        {headerOption ? (
          <>
            <div className={cn(`wrapper`, `option`)}>
              <p>Sort by: </p>
              <div className={cn(`dropdown`)}>
                <p>Month</p>
                <RiArrowDropDownLine size={20} color={`#192b80`} />
              </div>
              <div className={cn(`downloadButton`)}>
                <BsDownload size={15} color={`#192b80`} />
              </div>
              <BsThreeDotsVertical
                color={menuButtonColor === "white" ? "#fff" : "#192b80"}
                size={20}
              />
            </div>
          </>
        ) : (
          <BsThreeDotsVertical
            color={menuButtonColor === "white" ? "#fff" : "#192b80"}
            size={20}
          />
        )}
      </div>
      <div className={cn(`wrapper`, `contents`)}>{children}</div>
      {viewAll && (
        <div className={cn(`viewAll`)}>
          <p>View All</p>
        </div>
      )}
    </div>
  );
};

export default InfoCardLayout;
