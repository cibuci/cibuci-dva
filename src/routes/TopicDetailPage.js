import { Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Helmet } from 'react-helmet';
import styles from './TopicDetailPage.less';
import TopicContent from '../components/TopicContent';
import TopicCommentList from '../components/List/TopicCommentList';
import TopicAuthor from '../components/TopicAuthor';
import NewTopicComment from '../components/Editor/NewTopicComment';

function TopicDetailPage({ topic, comments }) {
  if (!topic) return null;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{`${topic.title} - 辞不辞`}</title>
      </Helmet>
      <div className={styles.sidebar}>
        <div className={styles.sidebarlist}>
          <Link to="/topic/add"><Button type="primary" size="large">发表新话题</Button></Link>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.up}>
          <TopicContent topic={topic} />
          <TopicCommentList list={comments} />
          <NewTopicComment />
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
    comments: state.topic.comments,
  };
}

export default connect(mapStateToProps)(TopicDetailPage);
