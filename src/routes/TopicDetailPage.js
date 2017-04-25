import { Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './TopicDetailPage.less';
import TopicContent from '../components/TopicContent';
import TopicAuthor from '../components/TopicAuthor';

function TopicDetailPage({ topic }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarlist}>
          <Link to="/topic/add"><Button type="primary" size="large">发表新话题</Button></Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.up} scroller`}>
          <TopicContent topic={topic} />
        </div>
        <div className={styles.footer}>
          <TopicAuthor topic={topic} />
        </div>
      </div>
    </div>
  );
}

TopicDetailPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicDetailPage);
