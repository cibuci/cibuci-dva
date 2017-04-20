import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './TopicPage.less';
import Layout from '../components/Layout';
import TopicList from '../components/TopicList';
import HotTopicList from '../components/HotTopicList';

function TopicPage({ topics }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarlist}>
            <Button type="primary" size="large">发表新话题</Button>
            <HotTopicList title="热门话题" list={topics} />
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
