import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import BlogHome from '../../components/blog/BlogHome';
import BlogPosts from '../../components/blog/BlogPosts';

const BlogRouter = () => (
  <Router>
    <Route exact path="/blog/:page" component={BlogHome} />
    <Route path="/blog/post/:slug" component={BlogPosts} />
  </Router>
);

export default BlogRouter;
