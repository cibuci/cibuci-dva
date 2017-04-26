import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';

function TopicAddPage({ topic }) {
  return (
    <div>
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
