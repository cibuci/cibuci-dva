import React from 'react';
import { Link } from 'dva/router';
import styles from './TopicItem.less';
import Spacer from '../Spacer';
import Avatar from '../Avatar';

const TopicItem = ({ topic }) => {
  if (!topic) return;

  const { id, author, date, title, statistics } = topic;

  return (
    <div className={styles.normal}>
      <span className={styles.score}><Avatar size="large" /></span>
      <span className={styles.title}>
        <Link to={`/topic/${id}`}>{title}</Link>
      </span>
      <br />
      <span className={styles.meta}>
        123
      </span>
    </div>
  );
};

TopicItem.propTypes = {
};

export default TopicItem;
