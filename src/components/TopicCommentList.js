import React from 'react';
import { TopicComment } from './Card/';
import Spacer from './Spacer';
import styles from './TopicCommentList.less';

const TopicCommentList = ({ list }) => {
  if (!list) return null;

  return (
    <Spacer>
      <div className={styles.title}>
        {list.length} 回复
      </div>
      <div className={styles.wrapper}>
        { list.map(item => <TopicComment comment={item} />) }
      </div>
    </Spacer>
  );
};

TopicCommentList.propTypes = {
};

export default TopicCommentList;
