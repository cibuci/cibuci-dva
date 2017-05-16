import React from 'react';
import { connect } from 'dva';
import Base from '../components/Layout/Base';
import styles from './ProfilePage.less';

function ProfilePage() {
  return (
    <Base>
      123
    </Base>
  );
}

ProfilePage.propTypes = {
};

export default connect()(ProfilePage);
