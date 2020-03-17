import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ProjectsRouter from "./projects";
import BlogRouter from './blog'
import App from "../App";


const AppRoutes = (props) => (
  <Router { ...props }>
    <Route exact path="/" component={App} />
    <Route path="/projects" component={ProjectsRouter} />
    <Route path="/blog" component={BlogRouter} />
  </Router>
);

export default AppRoutes;
