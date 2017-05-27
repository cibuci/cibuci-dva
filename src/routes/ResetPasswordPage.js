import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Link } from 'dva/router';
import SimpleLayout from '../components/Layout/Simple';
import ResetPasswordForm from '../components/Form/ResetPasswordForm';
import NewPasswordForm from '../components/Form/NewPasswordForm';

import styles from './SignPage.less';

class ResetPasswordPage extends React.Component {

  render() {
    const { token } = this.props.params;

    return (
      <SimpleLayout>
        <Block className={styles.container} layout horizontal centered>
          <div>
            <div className={styles.logowrapper}>
              <Link to="/">
                <img role="presentation" alt="logo" className={styles.logo} src="https://cdn-up0.cibuci.com/static/community/logo-horizontal.png" />
              </Link>
            </div>
            <div className={styles.card}>
              { token ? (
                <div>
                  <p style={{ marginBottom: '1rem' }}>设置新密码</p>
                  <NewPasswordForm token={token} />
                </div>
              ) : (
                <div>
                  <p style={{ marginBottom: '1rem' }}>输入邮箱，重置密码。</p>
                  <ResetPasswordForm />
                </div>
              ) }
            </div>
          </div>
        </Block>
      </SimpleLayout>
    );
  }
}

ResetPasswordPage.propTypes = {
};

export default connect()(ResetPasswordPage);
