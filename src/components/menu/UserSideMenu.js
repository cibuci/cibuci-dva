import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

const style = {
  menu: {
    border: 'none',
    backgroundColor: 'white',
  },
};

function UserSideMenu() {
  return (
    <Menu style={style.menu} defaultSelectedKeys={['base']}>
      <Menu.Item key="base">
        <Link to="/setting">
          <Icon type="user" />基本信息
        </Link>
      </Menu.Item>
      <Menu.Item key="password">
        <Link to="/setting/password">
          <Icon type="lock" />密码管理
        </Link>
      </Menu.Item>
    </Menu>
  );
}

UserSideMenu.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(UserSideMenu);
