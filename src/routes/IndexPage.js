import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Layout from '../components/Layout';
import PkPanel from '../components/PkPanel';
import PkCommentList from '../components/PkCommentList';

function IndexPage({ comments }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          111
        </div>
        <div className={styles.content}>
          <div>
            <PkPanel />
          </div>
          <div className={`${styles.up}`}>
            <PkCommentList comments={comments} />
          </div>
          <div className={styles.down}>
            222
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
    comments: state.comment.list,
  };
}

export default connect(mapStateToProps)(IndexPage);
