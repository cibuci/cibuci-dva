import React from 'react';
import Block from 'react-blocks';
import { connect } from 'dva';
import { Link } from 'dva/router';
import SimpleLayout from '../components/Layout/Simple';

import styles from './ResetPasswordPage.less';

function ResetPasswordPage() {
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
            123
          </div>
        </div>
      </Block>
    </SimpleLayout>
  );
}

ResetPasswordPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(ResetPasswordPage);
