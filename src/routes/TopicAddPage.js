import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './TopicPage.less';
import Layout from '../components/Layout';
import TopicEditor from '../components/TopicEditor';

function TopicAddPage({ topic }) {
  return (
    <div>
      <TopicEditor />
    </div>
  );
}

TopicAddPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicAddPage);
