import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Link } from 'dva/router';
import SimpleLayout from '../components/Layout/Simple';
import NormalSigninForm from '../components/Form/NormalSigninForm';
import styles from './SignPage.less';

function SigninPage() {
  return (
    <SimpleLayout>
      <Block className={styles.container} layout horizontal centered>
        <div className={styles.card}>
          <div className={styles.logowrapper}>
            <Link to="/">
              <img role="presentation" alt="logo" className={styles.logo} src="http://cdn-qn0.cibuci.com/static/community/logo.png" />
            </Link>
          </div>
          <NormalSigninForm />
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
