import React from 'react';
import { Menu } from 'antd';
import { connect } from 'dva';

const TopicList = ({ topics }) => {
  if (!topics) return null;

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '3.4rem' }}
    >
      <Menu.Item key="{topic.type}">全部</Menu.Item>
      <Menu.Item key="2">精华</Menu.Item>
      <Menu.Item key="3">问答</Menu.Item>
    </Menu>
  );
};

TopicList.propTypes = {
};

function mapStateToProps(state) {
  return {
    topics: state.topic.list,
  };
}

export default connect(mapStateToProps)(TopicList);
