import React from 'react';
import moment from 'moment';
import styles from './PkComment.less';
import Spacer from '../Common/Spacer';
import Avatar from '../Avatar';

const PkComment = ({ comment }) => {

  const {
    content,
    createdAt,
    point,
    rank,
    author,
  } = comment;

  const sideClassName = `side-${(point === 'positive' ? 'a' : 'b')}`;

  const displayName = author.nickName || author.username;

  return (
    <div className={styles[sideClassName]}>
      <div className={styles.container}>
        <Spacer onlylr>
          <div className={styles.item}>
            <div className={styles.aside}>
              <Avatar user={author} />
            </div>
            <div className={styles.action}>
              action
            </div>
            <div className={styles.content}>
              <div className={styles.detail}>
                <div className={styles.from}>
                  {displayName}
                </div>
                <div className={styles.username}>
                  @{author.username}
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
    </div>
  );
};

PkComment.propTypes = {
};

export default PkComment;
