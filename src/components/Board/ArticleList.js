import React from 'react';
import { Menu } from 'antd';
import { connect } from 'dva';

const ArticleList = ({ articles }) => {
  if (!articles) return null;

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '3.4rem' }}
    >
      <Menu.Item key="1">所有</Menu.Item>
      <Menu.Item key="2">精华</Menu.Item>
      <Menu.Item key="3">问答</Menu.Item>
    </Menu>
  );
};

ArticleList.propTypes = {
};

function mapStateToProps(state) {
  return {
    articles: state.article.list,
  };
}

export default connect(mapStateToProps)(ArticleList);
