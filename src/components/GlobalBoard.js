import React from 'react';
import { Menu } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import styles from './GlobalBoard.less';

const GlobalBoard = (props, context) => {
  const { router, topic } = props;
  let result = null;
  console.log(context.location.pathname);
  console.log(router.path);
  console.log(router.pathname);
  if (router.isActive('/')) {
    result = (<span className={styles.title}>你的兴趣能谋生吗？</span>);
  }
  if (router.isActive('/topic')) {
    result = (
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '3.4rem' }}
        >
          <Menu.Item key="{topic.type}">全部</Menu.Item>
          <Menu.Item key="2">精华</Menu.Item>
          <Menu.Item key="3">问答</Menu.Item>
        </Menu>
      </div>
    );
  }
  if (router.isActive('/article')) {
    result = (
      <div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '3.4rem' }}
        >
          <Menu.Item key="{topic.type}">全部</Menu.Item>
          <Menu.Item key="2">精华</Menu.Item>
          <Menu.Item key="3">问答</Menu.Item>
        </Menu>
      </div>
    );
  }
  return result;
};

GlobalBoard.propTypes = {
};

GlobalBoard.contextTypes = {
  location: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    topic: state.topic,
  };
}

export default withRouter(connect(mapStateToProps)(GlobalBoard));
