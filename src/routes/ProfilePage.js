import React from 'react';
import { connect } from 'dva';
import BaseLayout from '../components/Layout/Base';
import styles from './ProfilePage.less';

function ProfilePage() {
  return (
    <BaseLayout>
      123
    </BaseLayout>
  );
}

ProfilePage.propTypes = {
};

export default connect()(ProfilePage);
