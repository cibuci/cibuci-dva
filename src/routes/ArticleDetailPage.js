import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './TopicDetailPage.less';

function ArticleDetailPage({ detail }) {
  return (
    <p>{detail.title}</p>
  );
}

ArticleDetailPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    detail: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleDetailPage);
