import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Helmet } from 'react-helmet';
import { Row, Col, Button } from 'antd';
import { Container } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import TopicContent from '../components/TopicContent';
import TopicCommentList from '../components/List/TopicCommentList';
import AuthorTopicList from '../components/List/AuthorTopicList';
import CommentEditor from '../components/Editor/CommentEditor';

import styles from './TopicDetailPage.less';

class TopicDetailPage extends React.Component {

  state = {
    replyComment: null,
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'topic/save', payload: { current: null } });
  }

  handleSave(item) {
    const data = {
      ...item,
      current: this.props.topic,
    };
    this.props.dispatch({ type: 'topic/addComment', payload: data });
  }

  handleCommentReply(comment) {
    if (this.props.authorized) {
      this.setState({ replyComment: comment });
    } else {
      this.context.router.push('/signin');
    }
  }

  render() {
    const { topic, comments, authorized } = this.props;
    if (!topic) return null;

    return (
      <div className={styles.container}>
        <Helmet>
          <title>{`${topic.title} - 辞不辞`}</title>
        </Helmet>
        <Container>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={17} lg={17} xl={17}>
              <div className={styles.left}>
                <TopicContent topic={topic} />
                <TopicCommentList list={comments} onReply={this.handleCommentReply.bind(this)} />
                { authorized ? (
                  <Panel title="添加回复">
                    <CommentEditor
                      replyComment={this.state.replyComment}
                      onSave={this.handleSave.bind(this)}
                    />
                  </Panel>
                ) : (
                  <Panel>
                    <div style={{ padding: '1rem', fontSize: '1rem' }}>
                      <Link to="/signin"><Button size="large" type="primary">登录</Button></Link>&nbsp;&nbsp;
                      <Link to="signup"><Button size="large" type="primary">注册</Button></Link>&nbsp;&nbsp;
                      即可回复。
                    </div>
                  </Panel>
                ) }
              </div>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <div className={styles.right}>
                <Panel>
                  <div className={styles.add}>
                    <Link to="/topic/add"><Button type="primary" size="large">发布新话题</Button></Link>
                  </div>
                </Panel>
                <Panel title="作者的其他话题">
                  <AuthorTopicList userId={topic.authorId} />
                </Panel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

TopicDetailPage.propTypes = {
};

TopicDetailPage.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
    comments: state.topic.comments,
    authorized: state.app.authorized,
  };
}

export default connect(mapStateToProps)(TopicDetailPage);
