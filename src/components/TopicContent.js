import React from 'react';
import { connect } from 'dva';
import { Button, Icon, Modal } from 'antd';
import { Link } from 'dva/router';
import moment from 'moment';
import { isAuthor } from '../utils/tools';
import Avatar from './Avatar';
import InsertHtml from './Common/InsertHtml';

import styles from './TopicContent.less';

const confirm = Modal.confirm;

const TopicContent = (props) => {
  const { topic, tabs, user } = props;
  if (!topic) return null;

  const {
    author,
    title,
    tab,
    createdAt,
    readCount,
    id,
  } = topic;

  function tabName() {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].id === tab) {
        return tabs[i].name;
      }
    }
  }

  function showConfirm() {
    confirm({
      title: '您确定要删除该话题吗？',
      onOk() {
        props.dispatch({ type: 'topic/removeItem', payload: { id } });
      },
    });
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
      <div className={styles.content}>
        <InsertHtml content={topic.content} />
      </div>
      { isAuthor(user, author) ? (
        <div className={styles.footer}>
          <Link to={`/topic/edit/${topic.id}`}>
            <Button><Icon type="edit" />重新编辑</Button>
          </Link>
          <Button onClick={showConfirm}><Icon type="delete" />删除话题</Button>
        </div>
      ) : null }
    </div>
  );
};

TopicContent.propTypes = {
};

function mapStateToProps(state) {
  return {
    tabs: state.topic.tabs,
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(TopicContent);
