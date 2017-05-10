import { Pagination, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './TopicPage.less';
import Layout from '../components/Layout';
import TopicList from '../components/TopicList';
import HotTopicList from '../components/HotTopicList';
import NoReplyTopicList from '../components/NoReplyTopicList';

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
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarlist}>
            <Link to="/topic/add"><Button type="primary" size="large">发表新话题</Button></Link>
            <HotTopicList />
            <NoReplyTopicList />
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.up}`}>
            <TopicList />
          </div>
          <div className={styles.footer}>
            <Pagination
              onChange={pageChange}
              defaultPageSize={20}
              defaultCurrent={1}
              current={page}
              total={total}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
}

TopicPage.propTypes = {
};

TopicPage.contextTypes = {
  router: PropTypes.func.isRequired,
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
