import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import styles from './ArticlePage.less';

function ArticlePage({ articles, children }) {
  let content = null;

  if (children) {
    content = children;
  } else {
    content = (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ArticleList list={articles} />
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

ArticlePage.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.article.list,
    children: ownProps.children,
  };
}

export default connect(mapStateToProps)(ArticlePage);
