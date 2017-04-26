import React from 'react';
import { Router, Route } from 'dva/router';
import TestPage from './routes/TestPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={TestPage} />
    </Router>
  );
}

export default RouterConfig;
