import { Icon, message, Popover } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import React from 'react';
import Avatar from './Avatar';

import styles from './DropMenu.less';

class DropMenu extends React.Component {
  handleSignout = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'app/logout' });
    message.success('您已经成功登出。');
  }

  render() {
    const { user } = this.props;

    const menu = (
      <ul className={styles.menu}>
        <li>
          <Link to={`/@/${user.username}`}>我的主页</Link>
        </li>
        <li>
          <Link to="/setting">设置</Link>
        </li>
        <li>
          <Link onClick={this.handleSignout}>登出</Link>
        </li>
      </ul>
    );

    return (
      <Popover placement="bottomRight" content={menu} trigger="click">
        <div>
          <Avatar size="middle" user={user} /> <Icon type="down" />
        </div>
      </Popover>
    );
  }
}

DropMenu.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(DropMenu);
