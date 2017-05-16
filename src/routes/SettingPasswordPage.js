import React from 'react';
import { connect } from 'dva';
import PasswordForm from '../components/Form/PasswordForm';

import styles from './SettingPasswordPage.less';

function SettingPasswordPage() {
  return (
    <div className={styles.container}>
      <PasswordForm />
    </div>
  );
}

SettingPasswordPage.propTypes = {
};

export default connect()(SettingPasswordPage);
