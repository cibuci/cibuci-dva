import React from 'react';
import { Badge } from 'antd';
import { Link } from 'dva/router';
import moment from 'moment';
import styles from './TopicItem.less';
import Avatar from '../Avatar';

const badgeStyle = {
  backgroundColor: '#fff',
  color: '#999',
  boxShadow: '0 0 0 1px #d9d9d9 inset',
};

const TopicItem = ({ topic }) => {
  const { id, authorId, createdAt, title } = topic;
  const commentsCount = topic.commentsCount || 0;

  return (
    <div className={styles.normal}>

      <div className={styles.media}>
        <div className={`${styles.left} ${styles.middle}`}>
          <Avatar size="large" />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            <Link to={`/topic/${id}`}>{title}</Link>
          </div>
          <div className={styles.meta}>
            <Link to="/topic?params=jh">精华</Link>&nbsp;•&nbsp;<Link to={`/user/${authorId}`}>bella</Link>
            发表于 {moment(createdAt).fromNow()}
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

export default TopicItem;
