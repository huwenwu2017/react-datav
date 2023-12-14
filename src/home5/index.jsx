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
      xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
      },
      yAxis: {},
      series: [
        {
          type: 'candlestick',
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
  };

  useEffect(() => {
    mydata();
  });

  return (
    <BorderBox12 class={style.boxc}>
      <div
        ref={chartsNode}
        className={style.boxc}
        
      ></div>
    </BorderBox12>
  );
}
