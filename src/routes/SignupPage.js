import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import SimpleLayout from '../components/Layout/Simple';
import SignupForm from '../components/Form/SignupForm';

import styles from './SignPage.less';

function SignupPage() {
  return (
    <SimpleLayout>
      <Block className={styles.container} layout horizontal centered>
        <div>
          <div className={styles.logowrapper}>
            <Link to="/">
              <img role="presentation" alt="logo" className={styles.logo} src="http://cdn-qn0.cibuci.com/static/community/logo-horizontal.png" />
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.tab}>
              <Menu
                mode="horizontal"
                selectedKeys={['signup']}
                className={styles.menu}
              >
                <Menu.Item key="signin"><Link to="/signin">登录</Link></Menu.Item>
                <Menu.Item key="signup"><Link to="/signup">注册</Link></Menu.Item>
              </Menu>
            </div>
            <SignupForm />
          </div>
        </div>
      </Block>
    </SimpleLayout>
  );
}

SignupPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(SignupPage);
