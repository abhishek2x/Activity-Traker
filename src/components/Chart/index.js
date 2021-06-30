import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./style.js";

function Chart({ DATA_ARRAY, LABEL_ARRAY, BG_ARRAY }) {
  const [data, setdata] = useState({
    labels: LABEL_ARRAY,
    cutoutPercentage: 10,
    datasets: [
      {
        data: DATA_ARRAY,
        backgroundColor: BG_ARRAY,
        borderColor: BG_ARRAY,
      },
    ],
  });

  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: "left",
        },
      }}
    />
  );
}

export default Chart;
