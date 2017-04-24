import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './TopicPage.less';
import Layout from '../components/Layout';

function TopicDetailPage({ topic }) {
  return (
    <div>
      123
    </div>
  );
}

TopicDetailPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicDetailPage);
