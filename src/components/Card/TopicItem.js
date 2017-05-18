import React from 'react';
import { connect } from 'dva';
import { Icon } from 'antd';
import { Link } from 'dva/router';
import moment from 'moment';
import styles from './TopicItem.less';
import Avatar from '../Avatar';

const TopicItem = ({ topic, tabs }) => {
  if (!topic) return null;

  const {
    id,
    author,
    title,
    tab,
    lastReplyAt,
    lastReplyer,
    commentsCount,
    createdAt,
    mark,
    rank,
  } = topic;

  function tabName() {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === tab) {
        return tabs[i].name;
      }
    }

    return tab;
  }

  return (
    <div className={styles.normal}>
      <div className={styles.media}>
        <div className={`${styles.left} ${styles.middle}`}>
          <Avatar size="large" user={author} />
        </div>
        <div className={styles.body}>
          <div className={styles.heading}>
            { mark === 'good' ? <Link to="/topic?tab=good&page=1"><Icon className={styles.icon} type="like-o" /></Link> : null }
            <Link className={styles.tab} to={`/topic?tab=${tab}&page=1`}>{tabName()}</Link>
            <Link to={`/topic/${id}`}>{title}</Link>
            { rank > 0 ? <Icon className={styles.icon} type="arrow-up" /> : null }
          </div>
          <div className={styles.meta}>
            <Link to={`/@/${author.username}`}>{author.nickName || author.username}</Link>
            &nbsp;·&nbsp;
            { lastReplyer ? (
              <span>
                最后由<Link to={`/@/${lastReplyer.username}`}>{lastReplyer.nickName || lastReplyer.username}</Link>
                回复于 {moment(lastReplyAt).fromNow()}
              </span>
            ) : (
              <span>
                发表于 {moment(createdAt).fromNow()}
              </span>
            ) }

          </div>
        </div>
        { commentsCount ? (
          <div className={`${styles.right} ${styles.middle}`}>
            <span className={styles.badge}>{commentsCount}</span>
          </div>
        ) : '' }
      </div>
    </div>
  );
};

TopicItem.propTypes = {
};

function mapStateToProps(state) {
  return {
    tabs: state.topic.tabs,
  };
}

export default connect(mapStateToProps)(TopicItem);
