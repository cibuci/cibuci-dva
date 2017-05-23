import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import TopicPage from './routes/TopicPage';
import TopicDetailPage from './routes/TopicDetailPage';
import TopicAddPage from './routes/TopicAddPage';
import TopicEditPage from './routes/TopicEditPage';
import ArticlePage from './routes/ArticlePage';
import ArticleAddPage from './routes/ArticleAddPage';
import ArticleEditPage from './routes/ArticleEditPage';
import ArticleDetailPage from './routes/ArticleDetailPage';
import AboutPage from './routes/AboutPage';
import SigninPage from './routes/SigninPage';
import SignupPage from './routes/SignupPage';
import VerifyPage from './routes/VerifyPage';
import ResetPasswordPage from './routes/ResetPasswordPage';
import ProfilePage from './routes/ProfilePage';
import SettingPage from './routes/SettingPage';
import SettingPasswordPage from './routes/SettingPasswordPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Redirect from="/" to="/article" />
      <Route path="/topic" component={TopicPage}>
        <Route path="add" component={TopicAddPage} />
        <Route path="edit/:id" component={TopicEditPage} />
        <Route path=":id" component={TopicDetailPage} />
      </Route>
      <Route path="/article" component={ArticlePage}>
        <Route path="add" component={ArticleAddPage} />
        <Route path="edit/:id" component={ArticleEditPage} />
        <Route path=":id" component={ArticleDetailPage} />
      </Route>
      <Route path="/about" component={AboutPage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/verify/:userid" component={VerifyPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/reset-password/:token" component={ResetPasswordPage} />
      <Route path="/@/:username" component={ProfilePage} />
      <Route path="/setting" component={SettingPage}>
        <Route path="password" component={SettingPasswordPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
