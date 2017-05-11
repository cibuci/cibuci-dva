import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Layout from '../components/Layout';
import PkPanel from '../components/PkPanel';
import PkCommentList from '../components/PkCommentList';
import NewPkComment from '../components/Editor/NewPkComment';

function IndexPage({ current }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          PK 有价值的东西
        </div>
        <div className={styles.content}>
          <div>
            <PkPanel pk={current} />
          </div>
          <div className={`${styles.up}`}>
            <PkCommentList />
          </div>
          <div className={styles.down}>
            <NewPkComment />
          </div>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.pk.current,
  };
}

export default connect(mapStateToProps)(IndexPage);
