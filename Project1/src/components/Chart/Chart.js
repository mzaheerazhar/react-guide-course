import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart = (props) => {
  const maxValue = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={maxValue}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
