import React from "react";
import style from "./content.module.css";

const Content: React.FC = () => {
  return (
    <>
      <div className={style.contentContainer}>
        <section id={style.content}>
          <div className={style.contentInner}>
            <span className={style.nameInfo}>
              <h1>ichiyo</h1>
              <p>
                取自罗马音<strong>一葉</strong>（Ichiyō）为名。
              </p>
            </span>
            <p>
              就如“一叶知秋”，“一蓑烟雨任平生”一样，“一葉”也代表着一种感觉，一种对生命的眷恋。
            </p>
            <h1 className={style.title}>关于 <code>ichiyo.in</code> </h1>
            <p>“.in”域名取自“Internet”的缩写，寓意着连接全球的网络世界。它象征着无尽的可能性和无限的信息流通，承载着将思想、文化与创意跨越界限地传播的力量。</p>
            <p>网站样式灵感来自于 <a href="https://voidzero.dev/">VoidZero</a> 简单的几何线条构造，我很喜欢这种简洁的风格，所以我将它应用到这个网站上。</p>
          </div>
        </section>
      </div>

      <div className={style.space}>
        <section id={style.spaceConent}></section>
      </div>
    </>
  );
};

export default Content;
