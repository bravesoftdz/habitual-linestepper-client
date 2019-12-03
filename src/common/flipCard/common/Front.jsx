import React from "react";
import style from "../FlipCard.module.scss";

const Front = ({ children }) => {
  return <div className={style.front}>{children}</div>;
};

Front.displayName = "front";

export default Front;
