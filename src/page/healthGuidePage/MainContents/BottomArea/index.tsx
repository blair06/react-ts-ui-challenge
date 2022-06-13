import React from "react";
import styles from "./BottomArea.module.scss";
import cb from "classnames/bind";
import BottomCard from "./BottomCard";
import { IoFootstepsOutline } from "react-icons/io5";
import { BorderTheme } from "../../../../interface/style";
const cn = cb.bind(styles);
const BottomArea = () => {
  return (
    <div className={cn(`container`)}>
      <div className={cn(`wrapper`, `text`)}>
        <p>Daily activity</p>
        <p>
          Your Health is also about tapping into resources that can help you
          achieve your health goal
        </p>
      </div>
      <div className={cn(`wrapper`, `card`)}>
        <BottomCard
          title="steps"
          icon={<IoFootstepsOutline size={40} />}
          time="3m"
        />
        <BottomCard
          title="steps"
          icon={<IoFootstepsOutline size={40} />}
          time="3m"
        />

        <div className={cn(`bottomCard`)}>
          <BottomCard
            // title="steps"
            border={BorderTheme.dashed}
            // icon={<IoFootstepsOutline size={40} />}
            // time="3m"
          />
          <div className={cn(`moveContainer`)}>
            <BottomCard
              className="cardItemBlack"
              title="SLEEP"
              icon={
                <img
                  className={cn(`moonImg`)}
                  src="https://mblogthumb-phinf.pstatic.net/20161019_110/annaholic37_14768674954102uq1M_JPEG/%A4%A4%A4%B7%A4%A9.jpg?type=w2"
                ></img>
              }
              time="5h"
            />
          </div>
        </div>

        <BottomCard
          title="steps"
          icon={<IoFootstepsOutline size={40} />}
          time="3m"
        />
        {/* <BottomCard></BottomCard>
        <BottomCard></BottomCard> */}
      </div>
    </div>
  );
};

export default BottomArea;
