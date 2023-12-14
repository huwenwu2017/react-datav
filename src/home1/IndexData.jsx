import React, { useState, useRef, useEffect } from "react";
import { BorderBox12 } from "@jiaminghi/data-view-react";
import * as echarts from "echarts";
import style from "../style.module.css";
export default function Indexdata() {
  const chartsNode = useRef(null);
  const [xdata,setxdata]= useState(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"])
  const [ydata,setydata]= useState([150, 230, 224, 218, 135, 147, 260])
  const mydata = () => {
    var myChart = echarts.init(chartsNode.current);
    var option;
    option = {
      xAxis: {
        type: "category",
        data: xdata,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: ydata,
          type: "line",
        },
      ],
    };
    option && myChart.setOption(option);
  };

  useEffect(() => {
    mydata();
  });

  return (
    <BorderBox12 class={style.boxc}>
      <div ref={chartsNode} className={style.boxc}></div>
    </BorderBox12>
  );
}
