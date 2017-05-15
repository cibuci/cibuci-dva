import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import DropMenu from '../DropMenu';
import styles from './Header.less';

const Header = (props) => {
  const { authorized } = props;

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <div className={styles.logo} />
      </Link>
      <ul className={styles.nav}>
        <li className={styles.item}><Link to="/" activeClassName={styles.active} >P·K</Link></li>
        <li className={styles.item}><Link to="/topic" activeClassName={styles.active} >话题</Link></li>
        <li className={styles.item}><Link to="/article" activeClassName={styles.active} >精选</Link></li>
        { authorized ? (
          <li className={styles.user}>
            <span>
              <DropMenu />
            </span>
          </li>
        ) : (
          <li className={styles.sign}>
            <span className={styles.right}>
              <Link style={{ marginRight: '1rem' }} to="/signin">登录</Link>
              <Link to="/signup">注册</Link>
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
