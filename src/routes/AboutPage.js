import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Layout from '../components/Layout';
import LogoGather from '../components/LogoGather';

function AboutPage() {
  return (
    <Layout noheader>
      <div style={{ width: '100%', height: '100%'}}>
        <LogoGather pixSize={20} pointSizeMin={10} />
      </div>
    </Layout>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);
