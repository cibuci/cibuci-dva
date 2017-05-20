import React from 'react';
import { connect } from 'dva';
import Block from 'react-blocks';
import { Popover, Icon } from 'antd';
import { Link } from 'dva/router';
import DropMenu from '../DropMenu';
import styles from './Header.less';

const Header = (props) => {
  const { authorized } = props;

  const content = (
    <nav>
      <ul className={styles.mobilenav}>
        <li><Link to="/article" activeClassName={styles.active} >精选</Link></li>
        <li><Link to="/topic" activeClassName={styles.active} >话题</Link></li>
      </ul>
    </nav>
  );

  return (
    <div>
      <div className={styles.wrapper}>
        <Link to="/">
          <div className={styles.logo} />
        </Link>
        <ul className={styles.nav}>
          <li className={styles.item}><Link to="/article" activeClassName={styles.active} >精选</Link></li>
          <li className={styles.item}><Link to="/topic" activeClassName={styles.active} >话题</Link></li>
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
      <div className={styles.mobile}>
        <Block className="demo" layout horizontal>
          <Block>
            <div className={styles.menu}>
              <Popover placement="bottomLeft" content={content} trigger="click">
                <div className={styles.icon}>
                  <Icon type="bars" />
                </div>
              </Popover>
            </div>
          </Block>
          <Block flex>
            <div className={styles.center}>
              <Link to="/">
                <img alt="logo" src="http://cdn-qn0.cibuci.com/static/community/logo-horizontal.png" />
              </Link>
            </div>
          </Block>
          <Block>
            <div className={styles.right}>
              { authorized ? (
                <span>
                  <DropMenu />
                </span>
              ) : (
                <span>
                  <Link style={{ marginRight: '1rem' }} to="/signin">登录</Link>
                  <Link to="/signup">注册</Link>
                </span>
              ) }
            </div>
          </Block>
        </Block>
      </div>
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
