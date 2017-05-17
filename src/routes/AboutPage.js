import React from 'react';
import { connect } from 'dva';
import Base from '../components/Layout/Base';
import LogoGather from '../components/LogoGather';

import styles from './AboutPage.less';

function AboutPage() {
  return (
    <Base>
      <div style={{ width: '100%', height: '100%' }}>
        <LogoGather pixSize={20} pointSizeMin={10} />
      </div>
    </Base>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);
