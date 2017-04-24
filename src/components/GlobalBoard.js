import React from 'react';
import UrlPattern from 'url-pattern';
import * as Boards from './Board/';

const GlobalBoard = (props, context) => {
  const { router, location } = context;

  let result = null;

  if (router.isActive('/')) {
    result = (<Boards.Pk />);
  }
  if (router.isActive('/topic')) {
    const info = new UrlPattern('/topic(/:id)').match(location.pathname);

    if (info.id) {
      result = (<Boards.TopicDetail />);
    } else {
      result = (<Boards.TopicList />);
    }
  }
  if (router.isActive('/article')) {
    const info = new UrlPattern('/article(/:id)').match(location.pathname);

    if (info.id) {
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
