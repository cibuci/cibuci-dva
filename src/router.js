import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TopicPage from './routes/TopicPage';
import ArticlePage from './routes/ArticlePage';
import AboutPage from './routes/AboutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="topic" component={TopicPage} />
      <Route path="topic/:id" component={TopicPage} />
      <Route path="article" component={ArticlePage} />
      <Route path="about" component={AboutPage} />
    </Router>
  );
}

export default RouterConfig;
