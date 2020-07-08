import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectsRouter from './projects';
import BlogRouter from './blog';
import DashboardRouter from './dashboard';
import App from '../App';

const AppRoutes = (props) => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={App} />
      <Route path="/projects" component={ProjectsRouter} />
      <Route path="/blog" component={BlogRouter} />
      <Route path="/dashboard" component={DashboardRouter} />
    </Switch>
  );
};

export default AppRoutes;
