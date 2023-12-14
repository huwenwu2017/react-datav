import React, { useState, useRef, useEffect } from "react";
import { BorderBox12 } from "@jiaminghi/data-view-react";
import * as echarts from "echarts";
import style from "../style.module.css";
export default function Indexdata() {
  const chartsNode = useRef(null);
  const mydata = () => {
    var myChart = echarts.init(chartsNode.current);
    var option;
    option = {
      title: {
        text: "Referer of a Website",
        subtext: "Fake Data",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
      <div ref={chartsNode} className={style.boxc} style={{paddingTop:"30px"}}></div>
    </BorderBox12>
  );
}
