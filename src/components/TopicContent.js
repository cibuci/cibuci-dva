import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import moment from 'moment';
import Avatar from './Avatar';

import styles from './TopicContent.less';

const TopicContent = ({ topic, tabs }) => {
  if (!topic) return null;

  const {
    author,
    title,
    tab,
    createdAt,
    readCount,
  } = topic;

  function tabName() {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === tab) {
        return tabs[i].name;
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.media}>
          <div className={styles.body}>
            <div className={styles.heading}>
              <Link className={styles.tab} to={`/topic?tab=${tab}&page=1`}>{tabName()}</Link>
              {title}
            </div>
            <div className={styles.meta}>
              <Link to={`/@/${author.username}`}>{author.nickName || author.username}</Link>
              &nbsp;·&nbsp;发表于 {moment(createdAt).fromNow()}
              &nbsp;·&nbsp;阅读：{readCount}
            </div>
          </div>
          <div className={`${styles.right} ${styles.middle}`}>
            <Avatar size="large" user={author} />
          </div>
        </div>
      </div>
      <article className={styles.article}>
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </article>
    </div>
  );
};

TopicContent.propTypes = {
};

function mapStateToProps(state) {
  return {
    tabs: state.topic.tabs,
  };
}

export default connect(mapStateToProps)(TopicContent);
