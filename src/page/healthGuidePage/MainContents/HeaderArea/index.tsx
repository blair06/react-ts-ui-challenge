import React from "react";
import styles from "./HeaderArea.module.scss";
import cb from "classnames/bind";
import CircleProfile from "component/healthGuide/circleProfile/CircleProfile";
import profile from "asset/img/profile.png";
import aa from "asset/img/aa.png";
import SearchInput from "component/SearchInput";

const cn = cb.bind(styles);
const HeaderArea = () => {
  return (
    <div className={cn("wrapper", "header")}>
      <div className={cn(`align`, `left`)}>
        <SearchInput className={cn(`searchInput`)} iconColor={"#696969"} />
      </div>
      <div className={cn(`align`, `right`)}>
        <p>
          Hello,<span>Kim!</span>
        </p>
        <CircleProfile img={profile} shadow={true} />
        <CircleProfile img={aa} />
      </div>
    </div>
  );
};

export default HeaderArea;
