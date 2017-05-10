import React from 'react';
import { connect } from 'dva';
import * as Boards from './Board/';

const GlobalBoard = (props) => {
  const { board } = props;

  let result = null;
  switch (board) {
    case 'PK_HOME':
      result = (<Boards.Pk />);
      break;
    case 'TOPIC_HOME':
      result = (<Boards.TopicList />);
      break;
    case 'TOPIC_ONE':
      result = (<Boards.TopicDetail />);
      break;
    case 'ARTICLE_HOME':
      result = (<Boards.ArticleList />);
      break;
    case 'ARTICLE_ONE':
      result = (<Boards.ArticleDetail />);
      break;
    case 'TOPIC_ADD':
      result = (<Boards.NormalTitle title="发表新话题" />);
      break;
    default:
      break;
  }

  return result;
};

GlobalBoard.propTypes = {
};

function mapStateToProps(state) {
  return {
    board: state.app.board,
  };
}

export default connect(mapStateToProps)(GlobalBoard);
