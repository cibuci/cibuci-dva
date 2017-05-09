import { Pagination, Button } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './TopicPage.less';
import Layout from '../components/Layout';
import TopicList from '../components/TopicList';
import HotTopicList from '../components/HotTopicList';

function TopicPage(props) {
  const { children, page, total, hot } = props;

  function pageChange() {
    props.dispatch({ type: 'topic/fetchList' });
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
            <HotTopicList title="热门话题" list={hot} />
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
              defaultCurrent={page}
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

function mapStateToProps(state, ownProps) {
  return {
    children: ownProps.children,
    page: state.topic.page,
    total: state.topic.total,
    hot: state.topic.hot,
  };
}

export default connect(mapStateToProps)(TopicPage);
