import { Pagination } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './TopicPage.css';
import Layout from '../components/Layout';
import TopicList from '../components/TopicList';

function TopicPage({ topics }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarlist}>
            123
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.up} scroller`}>
            <TopicList topics={topics} />
          </div>
          <div className={styles.footer}>
            <Pagination defaultCurrent={2} total={500} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

TopicPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    topics: state.topic.list,
  };
}

export default connect(mapStateToProps)(TopicPage);
