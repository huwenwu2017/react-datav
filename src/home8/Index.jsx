import React, { useState, useEffect } from "react";
import image from "../comment/img/y1.jpg";
import image1 from "../comment/img/y2.jpg";
import image2 from "../comment/img/y3.jpg";
import image3 from "../comment/img/y4.jpg";
import { BorderBox6 } from "@jiaminghi/data-view-react";
import { Carousel } from "antd";
import style from "../style.module.css";
export default function Index() {
  const [imgs, setimgs] = useState([image, image1, image2, image3]);
  const [log, setlog] = useState(false);
  useEffect(() => {
    setlog(true);
  });
  return (
    <BorderBox6>
      <div style={{paddingTop:"20px"}}>
        <Carousel autoplaySpeed={1000} autoplay dots={false}>
          {imgs.map((item) => {
            return <img src={item} className={style.boxe} alt="Image1"></img>;
          })}
        </Carousel>
      </div>
    </BorderBox6>
  );
}
