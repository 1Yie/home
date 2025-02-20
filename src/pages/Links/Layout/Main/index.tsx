import React from "react";
import style from "./main.module.css";

const Main: React.FC = () => {
  return (
    <>
      <div className={style.linkContainer}>
        <section id={style.links}>
          <h1>Links / My Friends</h1>
          <p>江南无所有，聊赠一枝春。</p>
        </section>
      </div>
      <div className={style.space}>
        <section id={style.spaceConent}></section>
      </div>
    </>
  );
};

export default Main;
