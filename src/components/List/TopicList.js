import React from 'react';
import { Spin } from 'antd';
import { connect } from 'dva';
import { TopicItem } from '../Card/';

const TopicList = (props) => {
  const { loading, list } = props;
  return (
    <Spin spinning={loading}>
      <div style={{ minHeight: 40 }}>
        { list.map(item => <TopicItem key={item.id} topic={item} />) }
      </div>
    </Spin>
  );
};

TopicList.propTypes = {
};

function mapStateToProps(state) {
  return {
    loading: state.loading.models.topic,
    list: state.topic.list,
  };
}

export default connect(mapStateToProps)(TopicList);
