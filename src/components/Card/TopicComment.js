import React from 'react';
import moment from 'moment';
import styles from './TopicComment.less';
import Spacer from '../Spacer';
import Avatar from '../Avatar';

const TopicComment = ({ comment }) => {
  if (!comment) return null;

  const { content, createdAt } = comment;

  return (
    <div className={styles.container}>
      <Spacer onlylr>
        <div className={styles.item}>
          <div className={styles.aside}>
            <Avatar />
          </div>
          <div className={styles.action}>
            action
          </div>
          <div className={styles.content}>
            <div className={styles.detail}>
              <div className={styles.from}>
                bella
              </div>
              <div className={styles.username}>
                @bella
              </div>
              <span className={styles.time}>{moment(createdAt).fromNow()}</span>
            </div>
            <div className={styles.text}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </Spacer>
    </div>
  );
};

TopicComment.propTypes = {
};

export default TopicComment;
