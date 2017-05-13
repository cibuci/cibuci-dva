import React from 'react';
import { Badge } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from 'moment';
import styles from './TopicItem.less';
import Avatar from '../Avatar';

const badgeStyle = {
  backgroundColor: '#fff',
  color: '#999',
  boxShadow: '0 0 0 1px #d9d9d9 inset',
};

const TopicItem = ({ topic, tabs }) => {
  const { id, author, authorId, title, tab, lastReplyAt } = topic;
  const commentsCount = topic.commentsCount || 0;

  function tabName() {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === tab) {
        return tabs[i].name;
      }
    }

    return tab;
  }

  return (
    <div className={styles.normal}>

      <div className={styles.media}>
        <div className={`${styles.left} ${styles.middle}`}>
          <Avatar size="large" user={author} />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            <Link to={`/topic/${id}`}>{title}</Link>
          </div>
          <div className={styles.meta}>
            <Link to={`/user/${authorId}`}>{author.username}</Link>
            ·
            <Link to={`/topic?tab=${tab}&page=1`}>{tabName()}</Link>
            ·
            最后由
            <Link to={`/user/${authorId}`}>{author.username}</Link>
            回复于 {moment(lastReplyAt).fromNow()}
          </div>
        </div>
        <div className={`${styles.right} ${styles.middle}`}>
          <Badge count={commentsCount} className={styles.badge} style={badgeStyle} />
        </div>
      </div>
    </div>
  );
};

TopicItem.propTypes = {
};

function mapStateToProps(state) {
  return {
    tabs: state.topic.tabs,
  };
}

export default connect(mapStateToProps)(TopicItem);
