import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TopicPage from './routes/TopicPage';
import TopicDetailPage from './routes/TopicDetailPage';
import TopicAddPage from './routes/TopicAddPage';
import ArticlePage from './routes/ArticlePage';
import ArticleDetailPage from './routes/ArticleDetailPage';
import AboutPage from './routes/AboutPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="topic" component={TopicPage}>
        <Route path="add" component={TopicAddPage} />
        <Route path=":id" component={TopicDetailPage} />
      </Route>
      <Route path="article" component={ArticlePage}>
        <Route path=":id" component={ArticleDetailPage} />
      </Route>
      <Route path="about" component={AboutPage} />
    </Router>
  );
}

export default RouterConfig;
