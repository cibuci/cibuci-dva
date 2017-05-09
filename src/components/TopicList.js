import React from 'react';
import { Spin } from 'antd';
import { connect } from 'dva';
import { TopicItem } from './Card/';
import Spacer from './Spacer';

const TopicList = (props) => {
  const { loading, list } = props;
  return (
    <Spacer>
      <Spin spinning={loading}>
        { list.map(item => <TopicItem key={item.id} topic={item} />) }
      </Spin>
    </Spacer>
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
