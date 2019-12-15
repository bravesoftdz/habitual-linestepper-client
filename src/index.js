import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./routes/index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div className="container">
    <h1 className="background-title">Habitual Linestepper</h1>

    <div className="content">
      <AppRoutes />
    </div>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
