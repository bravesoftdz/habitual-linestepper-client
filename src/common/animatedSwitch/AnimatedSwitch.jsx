import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, useLocation } from 'react-router-dom';
import './animatedSwitch.css';

const AnimatedSwitch = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        in
        key={location.key}
        classNames="animated-switch"
        timeout={2000}
      >
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedSwitch;
