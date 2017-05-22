import React from 'react';
import { TopicComment } from '../Card/';
import Panel from '../Common/Panel';

import styles from './TopicCommentList.less';

const TopicCommentList = ({ list, onReply }) => {
  if (!list || !list.length) return null;

  return (
    <Panel title={`共收到 ${list.length} 条回复`}>
      <div className={styles.wrapper}>
        { list.map(item => <TopicComment onReply={onReply} key={item.id} comment={item} />) }
      </div>
    </Panel>
  );
};

TopicCommentList.propTypes = {
};

export default TopicCommentList;
