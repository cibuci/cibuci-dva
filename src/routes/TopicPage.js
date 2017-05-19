import { Pagination, Button, Row, Col } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Helmet } from 'react-helmet';
import styles from './TopicPage.less';
import Base from '../components/Layout/Base';
import Container from '../components/Layout/Container';
import Panel from '../components/Common/Panel';
import TopicSubMenu from '../components/TopicSubMenu';
import TopicList from '../components/List/TopicList';
import HotTopicList from '../components/List/HotTopicList';
import NoReplyTopicList from '../components/List/NoReplyTopicList';

function TopicPage(props, context) {
  const { children, page, total, currentTabId } = props;
  const { router } = context;

  function pageChange(nextPage) {
    const path = `/topic?tab=${currentTabId}&page=${nextPage}`;
    router.push(path);
  }

  let content = null;
  // /topic/0 or /topic/new
  if (children) {
    content = children;
  } else {
    content = (
      <div>
        <TopicSubMenu />
        <Container>
          <div className={styles.container}>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={17} lg={17} xl={17}>
                <div className={styles.left}>
                  <TopicList />
                  { total > 0 ? (
                    <div className={styles.page}>
                      <Pagination
                        onChange={pageChange}
                        defaultPageSize={20}
                        defaultCurrent={1}
                        current={page}
                        total={total}
                      />
                    </div>
                  ) : null }
                </div>
              </Col>
              <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                <div className={styles.right}>
                  <Panel>
                    <div className={styles.add}>
                      <Link to="/topic/add"><Button type="primary" size="large">发表新话题</Button></Link>
                    </div>
                  </Panel>

                  <Panel title="热门话题">
                    <HotTopicList />
                  </Panel>

                  <Panel title="无人问津的话题">
                    <NoReplyTopicList />
                  </Panel>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <Base>
      <Helmet>
        <title>话题 - 辞不辞</title>
      </Helmet>
      {content}
    </Base>
  );
}

TopicPage.propTypes = {
};

TopicPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    children: ownProps.children,
    page: state.topic.page,
    total: state.topic.total,
    currentTabId: state.topic.currentTabId,
  };
}

export default connect(mapStateToProps)(TopicPage);
