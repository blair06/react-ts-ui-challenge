import React from "react";
import styles from "./MainContents.module.scss";
import cb from "classnames/bind";
import CircleProfile from "../../../component/HealthGuide/CircleProfile/CircleProfile";
import profile from "../../../asset/img/profile.png";
import aa from "../../../asset/img/aa.png";
import SearchInput from "./SearchInput";

const cn = cb.bind(styles);
const MainContents = () => {
  return (
    <div className={cn("container")}>
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
      <div className={cn("wrapper", "main")}>main</div>
      <div className={cn("wrapper", "bottom")}>bottom</div>
    </div>
  );
};

export default MainContents;
