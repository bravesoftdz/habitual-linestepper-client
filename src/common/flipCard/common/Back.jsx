import React from "react";
import style from "../FlipCard.module.scss";

const Back = ({ children }) => {
  return <div className={style.back}>{children}</div>;
};

Back.displayName = "back";

export default Back;
