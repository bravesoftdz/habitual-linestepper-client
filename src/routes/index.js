import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ProjectsRouter from "./projects";
import App from "../App";

const AppRoutes = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/projects" component={ProjectsRouter} />
  </Router>
);

export default AppRoutes;
