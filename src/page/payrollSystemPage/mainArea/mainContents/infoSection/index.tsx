import React, { useRef } from "react";
import style from "./infoSection.module.scss";
import cb from "classnames/bind";
import Panel from "component/panel";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import CircleProfile from "component/healthGuide/circleProfile/CircleProfile";
import { IoIosArrowDroprightCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { BsTriangleFill } from "react-icons/bs";
import ProfileImg from "asset/img/profile.png";
import CharacterImg from "asset/img/characterImg.png";
import InfoCardLayout from "./infoCardLayout";

import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const cn = cb.bind(style);
ChartJS.register(ArcElement, Tooltip, Legend);

const InfoSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const data = {
    labels: ["completed", "in progress"],
    datasets: [
      {
        label: "80",
        data: [20, 80],
        backgroundColor: ["#576cd9", "#192b80"],
        borderColor: ["#576cd9", "#192b80"],
        borderWidth: 0,
        weight: 0.1,
      },
    ],
  };
  const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];
  const optionsSet: ApexOptions = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: ["Jun 03", "Jun 04", "Jun 05", "Jun 06"],
    },
    tooltip: {
      x: {
        format: "MM/dd",
      },
    },
  };
  return (
    <div className={cn(`infoSection`)}>
      <Panel className={cn(`infoPanel`, `first`)} background={true}>
        {/* <MyResponsivePie data={data}></MyResponsivePie> */}
        {/* <canvas ref={canvasRef} className={cn(`myChart`)}></canvas> */}

        <Doughnut data={data} />
      </Panel>
      <Panel className={cn(`infoPanel`, `second`)} background={true}>
        <InfoCardLayout title="Check Stubs" menuButtonColor="white">
          <div className={cn(`wrapper`, `middle`)}>
            <p className={cn(`subTitle`)}>Pay Period</p>
            <div className={cn(`list`)}>
              <IoMdCheckmarkCircle
                className={cn(`list_icon`)}
                color={`#192b80`}
                size={20}
              />
              <p>Nov 30</p>
            </div>
            <div className={cn(`list`)}>
              <IoMdCheckmarkCircle
                className={cn(`list_icon`)}
                color={`#576cd9`}
                size={20}
              />
              <p>Oct 30</p>
            </div>
            <div className={cn(`list`)}>
              <IoMdCheckmarkCircle
                className={cn(`list_icon`)}
                color={`#576cd9`}
                size={20}
              />
              <p>Sep 30</p>
            </div>
          </div>
        </InfoCardLayout>
        <div className={cn(`circle`)}>
          <div className={cn(`wrapper`, `contents`)}>
            <p>$6.100</p>
            <p>View Detail</p>
          </div>
        </div>
      </Panel>
      <Panel className={cn(`infoPanel`, `third`)} background={true}>
        <p>Product Meetings</p>
        <p>02:00-03:00 PM</p>
        <div className={cn(`time`)}>
          <p>15 Min Left</p>
        </div>
        <div className={cn(`wrapper`, `profile`)}>
          <CircleProfile img={ProfileImg} />
          <CircleProfile img={ProfileImg} />
          <IoIosArrowDroprightCircle color="#fff" size={20} />
        </div>
      </Panel>
      <Panel className={cn(`infoPanel`, `fourth`)} background={true}>
        <InfoCardLayout title="Tax Documents">
          <div className={cn(`wrapper`, `middle`)}>
            <div className={cn(`list`)}>
              <BsTriangleFill className={cn(`list_icon`)} />
              <p>2020 W2</p>
            </div>
            <div className={cn(`list`)}>
              <BsTriangleFill className={cn(`list_icon`)} />
              <p>2019 W2</p>
            </div>
            <div className={cn(`list`)}>
              <BsTriangleFill className={cn(`list_icon`)} />
              <p>2018 W3</p>
            </div>
          </div>
          <img className={cn(`characterImg`)} src={CharacterImg} alt="pdfImg" />
        </InfoCardLayout>
      </Panel>
      <Panel className={cn(`infoPanel`, `fifth`)} background={true}>
        <InfoCardLayout title="Retirement" viewAll={false} headerOption={true}>
          {/* <ReactApexChart
            options={optionsSet}
            series={series}
            type="area"
            height={350}
            className={cn(`areaChart`)}
          /> */}
        </InfoCardLayout>
      </Panel>
    </div>
  );
};

export default InfoSection;
