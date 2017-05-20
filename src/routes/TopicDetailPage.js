import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Helmet } from 'react-helmet';
import { Row, Col, Button } from 'antd';
import { Container } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import TopicContent from '../components/TopicContent';
import TopicCommentList from '../components/List/TopicCommentList';
import NewTopicComment from '../components/Editor/NewTopicComment';

import styles from './TopicDetailPage.less';

class TopicDetailPage extends React.Component {

  componentWillUnmount() {
    this.props.dispatch({ type: 'topic/save', payload: { current: null } });
  }

  render() {
    const { topic, comments } = this.props;
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
                <TopicCommentList list={comments} />
                <Panel title="添加回复">
                  <NewTopicComment />
                </Panel>
              </div>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <div className={styles.right}>
                <Panel>
                  <div className={styles.add}>
                    <Link to="/topic/add"><Button type="primary" size="large">发布新话题</Button></Link>
                  </div>
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

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
    comments: state.topic.comments,
  };
}

export default connect(mapStateToProps)(TopicDetailPage);
