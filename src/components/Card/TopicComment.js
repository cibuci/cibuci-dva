import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Icon, Modal } from 'antd';
import Avatar from '../Avatar';
import CommentEditor from '../Editor/CommentEditor';
import InsertHtml from '../Common/InsertHtml';
import { isAuthor } from '../../utils/tools';

import styles from './TopicComment.less';

const confirm = Modal.confirm;

class TopicComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditor: false,
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReply = this.handleReply.bind(this);
  }

  handleEdit(e) {
    e.preventDefault();

    this.setState({
      showEditor: true,
    });
  }

  handleReply() {
    if (this.props.onReply) {
      this.props.onReply(this.props.comment);
    }
  }

  handleDelete() {
    const params = {
      id: this.props.comment.id,
      topicId: this.props.comment.topicId,
    };
    const props = this.props;
    confirm({
      title: '您确定要删除该条评论吗？',
      onOk() {
        props.dispatch({ type: 'topic/removeComment', payload: params });
      },
    });
  }

  handleSave(item) {
    const params = {
      id: this.props.comment.id,
      topicId: this.props.comment.topicId,
      data: item,
    };
    this.props.dispatch({ type: 'topic/editComment', payload: params });

    this.setState({
      showEditor: false,
    });
  }

  render() {
    const { comment, user } = this.props;
    if (!comment) return null;
    const { content, createdAt, author } = comment;

    return (
      <div className={styles.container}>
        { this.state.showEditor ? (
          <CommentEditor
            id={comment.id}
            edit={comment}
            onSave={this.handleSave}
            saveButtonName="保存修改"
          />
        ) : (
          <div>
            <div className={styles.item}>
              <div className={styles.aside}>
                <Avatar user={author} />
              </div>
              <div className={styles.action} />
              <div className={styles.content}>
                <div className={styles.detail}>
                  <div className={styles.from}>
                    <Link to={`/@/${author.username}`}>{ author.nickName || author.username }</Link>
                  </div>
                  { user && user.username === author.username ? (
                    null
                  ) : (
                    <div className={styles.username} onClick={this.handleReply}>
                      回复@{author.username}
                    </div>
                  ) }
                  <span className={styles.time}>{moment(createdAt).fromNow()}</span>
                </div>
                <div>
                  <InsertHtml content={content} />
                </div>
              </div>
            </div>
            { isAuthor(author, user) ? (
              <div className={styles.footer}>
                <Button onClick={this.handleEdit}>
                  <Icon type="edit" />编辑
                </Button>
                <Button onClick={this.handleDelete}>
                  <Icon type="delete" />删除
                </Button>
              </div>
            ) : null }
          </div>
        ) }
      </div>
    );
  }
}

TopicComment.propTypes = {
  onReply: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(TopicComment);
