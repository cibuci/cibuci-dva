import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'dva/router';
import React from 'react';
import Avatar from './Avatar';

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/profile">我的主页</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/setting">设置</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/signout">登出</Link>
    </Menu.Item>
  </Menu>
);

const DropMenu = () => {
  return (
    <Dropdown style={{ cursor: 'pointer' }} overlay={menu}>
      <span>
        <Avatar /> <Icon type="down" />
      </span>
    </Dropdown>
  );
};

DropMenu.propTypes = {
};

export default DropMenu;
