import React, { lazy } from "react";
import style from "../style.module.css"
import { FullScreenContainer, BorderBox11 } from "@jiaminghi/data-view-react";
const Home1 = lazy(() => import("../home1/IndexData"));
const Home2 = lazy(() => import("../home2/index"));
const Home3 = lazy(() => import("../home3/index"));
const Home4 = lazy(() => import("../home4/index"));
const Home5 = lazy(() => import("../home5/index"));
const Home6 = lazy(() => import("../home6/IndexData"));
const Home7 = lazy(() => import("../home7/index"));
const Home8 = lazy(() => import("../home8/Index"));
export default function index() {
  return (
    <FullScreenContainer class={style.box}>
      <BorderBox11 title="香蕉麻花皮测试" class={style.boxa}>
        <div className={style.box1}>
          <div>
            <div className={style.box2}>
              <Home1 />
            </div>
            <div className={style.box2}>
              <Home2 />
            </div>
            <div className={style.box2}>
              <Home3 />
            </div>
          </div>
          <div>
            <div className={style.box2}>
              <Home4 />
            </div>
            <div className={style.box3}>
              <Home8 />
            </div>
          </div>
          <div>
            <div className={style.box2}>
              <Home5 />
            </div>
            <div className={style.box2}>
              <Home6 />
            </div>
            <div className={style.box2}>
              <Home7 />
            </div>
          </div>
        </div>
      </BorderBox11>
    </FullScreenContainer>
  );
}
