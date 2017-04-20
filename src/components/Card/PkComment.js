import React from 'react';
import styles from './PkComment.less';
import Spacer from '../Spacer';
import Avatar from '../Avatar';

const PkComment = (props) => {
  const comment = props.comment || {};
  const user = comment.user || {};
  const { time, text } = comment;
  const sideClassName = `side-${(comment.side === 0 ? 'a' : 'b')}`;

  return (
    <div className={styles[sideClassName]}>
      <div className={styles.container}>
        <Spacer onlylr>
          <div className={styles.item}>
            <div className={styles.aside}>
              <Avatar avatar={user.avatar} />
            </div>
            <div className={styles.action}>
              123
            </div>
            <div className={styles.content}>
              <div className={styles.detail}>
                <div className={styles.from}>
                  {user.displayname}
                </div>
                <div className={styles.username}>
                  @{user.username}
                </div>
                <span className={styles.time}>{time}</span>
              </div>
              <div className={styles.text}>
                <p>{text}</p>
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
