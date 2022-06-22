import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Write TypeScript code!
const data = {
  labels: ["green", "yellow", "green", "purple", "blue"],
  datasets: [
    {
      weight: 0,
      data: [50, 805, 50, 600, 200],
      backgroundColor: ["green", "yellow", "green", "purple", "blue"],
    },
  ],
};

const DoughnutGraph = (props: any) => {
  return <Doughnut data={data}></Doughnut>;
};

export default DoughnutGraph;
