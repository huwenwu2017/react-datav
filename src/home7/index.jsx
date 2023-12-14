import React, { useEffect, useRef, useState } from "react";
import { BorderBox12 } from "@jiaminghi/data-view-react";
import style from "../style.module.css"
import * as echarts from "echarts";
export default function  Index() {
  const refdata = useRef(null);
  const [numberdata, setnumberdata] = useState(20);
  const getdatua = () => {
    var myChart = echarts.init(refdata.current);
    var option;
    option = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: 30,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 30,
            },
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: -20,
            color: "#999",
            fontSize: 20,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            width: "60%",
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 60,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "inherit",
          },
          data: [
            {
              value: numberdata,
            },
          ],
        },
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          itemStyle: {
            color: "#FD7347",
          },
          progress: {
            show: true,
            width: 8,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 20,
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  };
  useEffect(()=>{
    getdatua()
  })
  return (
    <BorderBox12 class={style.boxc}>
      <div ref={refdata} className={style.boxc}></div>
    </BorderBox12>
  );
}
