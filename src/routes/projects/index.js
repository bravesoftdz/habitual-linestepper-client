import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import KeyboardDrumkit from "../../components/projects/keyboardDrumkit/KeyboardDrumkit";

const ProjectsRouter = () => (
  <Router>
    <Route exact path="/projects/1" component={KeyboardDrumkit} />
    {/* <Route path="/projects/2" component={ReactTetris} /> */}
  </Router>
);

export default ProjectsRouter;
