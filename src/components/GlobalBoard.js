import React from 'react';
import pathToRegexp from 'path-to-regexp';
import * as Boards from './Board/';

const GlobalBoard = (props, context) => {
  const { router, location } = context;
  let result = null;
  console.log(location.pathname);
  console.log(location);
  if (router.isActive('/')) {
    result = (<Boards.Pk />);
  }
  if (router.isActive('/topic')) {
    const id = pathToRegexp('/topic/:id?').exec(location.pathname)[1];
    if (id) {
      result = (<Boards.TopicDetail />);
    } else {
      result = (<Boards.TopicList />);
    }
  }
  if (router.isActive('/article')) {
    const id = pathToRegexp('/article/:id?').exec(location.pathname)[1];

    if (id) {
      result = (<Boards.ArticleDetail />);
    } else {
      result = (<Boards.ArticleList />);
    }
  }
  return result;
};

GlobalBoard.propTypes = {
};

GlobalBoard.contextTypes = {
  location: React.PropTypes.object,
  router: React.PropTypes.object,
};

export default GlobalBoard;
