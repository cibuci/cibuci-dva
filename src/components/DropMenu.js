import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import React from 'react';
import Avatar from './Avatar';

class DropMenu extends React.Component {
  handleSignout = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'app/logout' });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">我的主页</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/setting">设置</Link>
        </Menu.Item>
        <Menu.Item>
          <Link onClick={this.handleSignout}>登出</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown overlay={menu}>
        <span>
          <Avatar /> <Icon type="down" />
        </span>
      </Dropdown>
    );
  }
}

DropMenu.propTypes = {
};

export default connect()(DropMenu);
