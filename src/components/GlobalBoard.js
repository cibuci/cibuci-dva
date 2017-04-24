import React from 'react';
import * as Boards from './Board/';

const GlobalBoard = (props, context) => {
  const { router } = context;

  let result = null;

  if (router.isActive('/')) {
    result = (<Boards.Pk />);
  }
  if (router.isActive('/topic')) {
    if (router.isActive('/topic/0')) {
      result = (<Boards.TopicDetail />);
    } else {
      result = (<Boards.TopicList />);
    }
  }
  if (router.isActive('/article')) {
    result = (<Boards.ArticleList />);
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
