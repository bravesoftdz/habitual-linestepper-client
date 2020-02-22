import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import KeyboardDrumkit from "../../components/projects/keyboardDrumkit/KeyboardDrumkit";
import Tetris from "../../components/projects/tetris/components/Tetris";
import Clock from "../../components/projects/clock/Clock";
import {MenuTest} from './menutest/MenuTest'

const ProjectsRouter = () => (
  <Router>
    <Route exact path="/projects/1" component={KeyboardDrumkit} />
    <Route path="/projects/2" component={Tetris} />
    <Route path="/projects/3" component={Clock} />
    <Route path="/projects/4" component={MenuTest} />

  </Router>
);

export default ProjectsRouter;
