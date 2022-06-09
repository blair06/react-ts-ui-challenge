import React from "react";
import styles from "./HeaderArea.module.scss";
import cb from "classnames/bind";
import CircleProfile from "../../../../component/HealthGuide/CircleProfile/CircleProfile";
import profile from "../../../../asset/img/profile.png";
import aa from "../../../../asset/img/aa.png";
import SearchInput from "./SearchInput";

const cn = cb.bind(styles);
const HeaderArea = () => {
  return (
    <div className={cn("wrapper", "header")}>
      <div className={cn(`align`, `left`)}>
        <SearchInput />
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
