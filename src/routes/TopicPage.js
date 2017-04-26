import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './TopicPage.less';
import Layout from '../components/Layout';
import TopicList from '../components/TopicList';
import HotTopicList from '../components/HotTopicList';

function TopicPage({ topics, children }) {
  let content = null;
  // /topic/0 or /topic/new
  if (children) {
    content = children;
  } else {
    content = (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarlist}>
            <Link to="/topic/add"><Button type="primary" size="large">发表新话题</Button></Link>
            <HotTopicList title="热门话题" list={topics} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.up}`}>
            <TopicList topics={topics} />
          </div>
          <div className={styles.footer}>
            <Pagination defaultCurrent={2} total={500} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
}

TopicPage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    topics: state.topic.list,
    children: ownProps.children,
  };
}

export default connect(mapStateToProps)(TopicPage);
