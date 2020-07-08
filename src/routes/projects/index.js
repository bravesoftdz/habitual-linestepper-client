import React from 'react';
import { Route } from 'react-router-dom';

import AnimatedSwitch from '../../common/animatedSwitch/AnimatedSwitch';

import KeyboardDrumkit from '../../components/projects/keyboardDrumkit/KeyboardDrumkit';
import Tetris from '../../components/projects/tetris/components/Tetris';
// import StravaOverlay from '../../components/projects/stravaOverlay/StravaOverlay';

const ProjectsRouter = () => (
  <AnimatedSwitch>
    <Route exact path="/projects/drums" component={KeyboardDrumkit} />
    <Route exact path="/projects/tetris" component={Tetris} />
    {/* <Route exact path="/projects/strava-overlay" component={StravaOverlay} /> */}
  </AnimatedSwitch>
);

export default ProjectsRouter;
