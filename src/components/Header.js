import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button } from 'antd';
import styles from './Header.less';
import GlobalBoard from './GlobalBoard';
import DropMenu from './DropMenu';

const Header = (props) => {
  const { authorized } = props || {};

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.left}>
          <GlobalBoard />
        </li>

        { authorized ? (
          <li style={{ float: 'right', cursor: 'pointer' }}>
            <span className={styles.mine}>
              <DropMenu />
            </span>
          </li>
        ) : (
          <li style={{ float: 'right' }}>
            <span className={styles.right}>
              <Link style={{ marginRight: '1rem' }} to="/signin">登录</Link>
              <Button type="primary"><Link to="/signup">注册</Link></Button>
            </span>
          </li>
        ) }
      </ul>
    </div>
  );
};

Header.propTypes = {
};

function mapStateToProps(state) {
  return {
    authorized: state.app.authorized,
  };
}

export default connect(mapStateToProps)(Header);
