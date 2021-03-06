import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import BlogHome from '../../components/blog/BlogHome';
import BlogPosts from '../../components/blog/BlogPosts';

const BlogRouter = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={2000}>
        <Switch location={location}>
          <Route exact path="/blog/:page" component={BlogHome} />
          <Route path="/blog/post/:slug" component={BlogPosts} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default BlogRouter;
