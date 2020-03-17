import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import KeyboardDrumkit from "../../components/projects/keyboardDrumkit/KeyboardDrumkit";
import Tetris from "../../components/projects/tetris/components/Tetris";
import Clock from "../../components/projects/clock/Clock";

const ProjectsRouter = () => (
  <Router>
    <Route exact path="/projects/1" component={KeyboardDrumkit} />
    <Route exact path="/projects/2" component={Tetris} />
    <Route exact path="/projects/3" component={Clock} />
  </Router>
);

export default ProjectsRouter;
