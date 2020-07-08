import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import Tasks from '../../components/dashboard/Tasks';

const DashboardRouter = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={5000}>
        <Switch location={location}>
          <Route exact path="/dashboard/tasks" component={Tasks} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default DashboardRouter;
