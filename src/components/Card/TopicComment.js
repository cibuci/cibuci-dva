import React from 'react';
import styles from './TopicComment.less';
import Spacer from '../Spacer';
import Avatar from '../Avatar';

const TopicComment = ({ comment }) => {
  if (!comment) return null;

  const { author, content } = comment;
  const sideClassName = `side-${(comment.side === 0 ? 'a' : 'b')}`;

  return (
    <div className={styles[sideClassName]}>
      <div className={styles.container}>
        <Spacer onlylr>
          <div className={styles.item}>
            <div className={styles.aside}>
              <Avatar avatar={author.avatar_url} />
            </div>
            <div className={styles.action}>
              123
            </div>
            <div className={styles.content}>
              <div className={styles.detail}>
                <div className={styles.from}>
                  {author.loginname}
                </div>
                <div className={styles.username}>
                  @{author.loginname}
                </div>
                <span className={styles.time}>123</span>
              </div>
              <div className={styles.text}>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </div>
            </div>
          </div>
        </Spacer>
      </div>
    </div>
  );
};

TopicComment.propTypes = {
};

export default TopicComment;
