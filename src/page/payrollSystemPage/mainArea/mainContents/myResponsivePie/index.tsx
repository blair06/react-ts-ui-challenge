import React from "react";

import { ResponsivePie } from "@nivo/pie";

const MyResponsivePie = ({ data }: any) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.85}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          // effects: [
          //   {
          //     on: "hover",
          //     style: {
          //       itemTextColor: "#000",
          //     },
          //   },
          // ],
        },
      ]}
    />
  );
};
export default MyResponsivePie;
