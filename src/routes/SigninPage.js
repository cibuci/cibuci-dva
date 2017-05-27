import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import Helmet from 'react-helmet';
import SimpleLayout from '../components/Layout/Simple';
import SigninForm from '../components/Form/SigninForm';
import styles from './SignPage.less';

function SigninPage() {
  return (
    <SimpleLayout>
      <Helmet>
        <title>登录 - 辞不辞</title>
      </Helmet>
      <Block className={styles.container} layout horizontal centered>
        <div>
          <div className={styles.logowrapper}>
            <Link to="/">
              <img role="presentation" alt="logo" className={styles.logo} src="https://cdn-up0.cibuci.com/static/community/logo-horizontal.png" />
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.tab}>
              <Menu
                mode="horizontal"
                selectedKeys={['signin']}
                className={styles.menu}
              >
                <Menu.Item key="signin"><Link to="/signin">登录</Link></Menu.Item>
                <Menu.Item key="signup"><Link to="/signup">注册</Link></Menu.Item>
              </Menu>
            </div>
            <SigninForm />
            <div className={styles.moresign}>
              <h6>社交账号登录</h6>
            </div>
          </div>
        </div>
      </Block>
    </SimpleLayout>
  );
}

SigninPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(SigninPage);
