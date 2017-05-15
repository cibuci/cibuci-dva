import React from 'react';
import Spacer from './Common/Spacer';
import styles from './TopicContent.less';

const TopicContent = ({ topic }) => {
  if (!topic) return null;

  return (
    <Spacer>
      <div className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>
    </Spacer>
  );
};

TopicContent.propTypes = {
};

export default TopicContent;
