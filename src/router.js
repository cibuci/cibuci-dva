import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TopicPage from './routes/TopicPage';
import ArticlePage from './routes/ArticlePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/topic" component={TopicPage} />
      <Route path="/article" component={ArticlePage} />
    </Router>
  );
}

export default RouterConfig;
