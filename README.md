**效果图**
<p>
    <img src="https://img520.com/s6LQ1j.png" alt="react.png" title="react.png" />
</p>

### 一，项目描述
- 基于react+datav的基础大屏版本
- 已经做了适配，可以放心使用
- 项目需要按f11全屏展示
- 注意，这是基础版基础版，但是用在真实项目上是没问题的

友情链接：

1.  [react 官方文档](https://zh-hans.react.dev/)
2.  [DataV 官方文档](http://datav.jiaminghi.com/guide/)
3.  [echarts 实例](https://echarts.apache.org/examples/zh/index.html)，[echarts API 文档](https://echarts.apache.org/zh/api.html#echarts)


### 二，文件描述

| 文件                | 作用/功能                                                              |
| ------------------- | --------------------------------------------------------------------- |
| index.js             | 入口文件，项目的开始                                    |      
| app.js                | 根组件，执行路由逻辑                                                        |
| src/index/index.jsx      | 主架构组件，相当于大屏骨架                                     |
| src/home*  | 大屏里的每个小模块                                              |
| src/adaptive/index.jsx | 兼容组件                                           |


### 三，大屏兼容组件
通过插槽的方式，将大屏内容加入到容器组件里去，摒弃了vw，rem的兼容方式，更换了缺点更少的css3：scale方案，对更多分辨率的设备更友好
```html
import React, { useState,useEffect } from "react";
import styles from "./style.module.css";

export default function Index({ children, height = "1080", width = "1920" }) {
  // 使用useState定义一个状态变量style，并初始化为包含width, height和transform的对象
  const [style, setStyle] = useState({
    width: width + "px",
    height: height + "px",
    transform: "scale(1) translate(-50%, -50%)",
  });
  const Debounce = (fn, t) => {
    const delay = t || 500;
    let timer;
    return function () {
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        timer = null;
        fn.apply(args);
      }, delay);
    };
  };
  const getScale = () => {
    const w = window.innerWidth / width;
    const h = window.innerHeight / height;
    return w < h ? w : h;
  };
  const setScale = () => {
    setStyle(item=>({
        ...item,
        transform :'scale(' + getScale() + ') translate(-50%, -50%)'
    }))
}
 useEffect(()=>{
    setScale()
    window.onresize = Debounce(setScale, 1000)  //通过节流来控制，当屏幕尺寸更换时控制缩放，减少性能的损耗。
 })
  return (
    <div className={styles.ScreenAdapter} style={style}>
      {children}
    </div>
  );
}


```
### 四，外层容器
在项目中，src/index/index.jsx文件是初始文件，大屏里的内容都在这里面填充，这相当于是一个骨架，至关重要
而Adaptive组件则是容器组件，在里面代码里有介绍
```html
import React, { lazy } from "react";
import style from "../style.module.css";
import { FullScreenContainer, BorderBox11 } from "@jiaminghi/data-view-react";
const Home1 = lazy(() => import("../home1/IndexData"));
const Home2 = lazy(() => import("../home2/index"));
const Home3 = lazy(() => import("../home3/index"));
const Home4 = lazy(() => import("../home4/index"));
const Home5 = lazy(() => import("../home5/index"));
const Home6 = lazy(() => import("../home6/IndexData"));
const Home7 = lazy(() => import("../home7/index"));
const Home8 = lazy(() => import("../home8/Index"));
const Adaptive = lazy(() => import("../Adaptive/index"));
export default function index() {
  return (
    <!--Adaptive兼容组件-->
    <Adaptive>
        <!--BorderBox11边框组件-->
        <BorderBox11 title="香蕉麻花皮测试" class={style.boxa}>
            <!--以下是内容-->
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
    </Adaptive>
  );
}
```

### 五，其余
项目是个人写的基础款作品，开始的时候本来想写的是一个全面的作品，但是后续考虑到怕项目太臃肿，所以只写了基础版，虽然是基础版
但是该有的基本上都有了，完全可以作为正式项目来使用，后续在往里面添加功能也是非常简单的。
