import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import styles from './ArticlePage.less';

function ArticlePage({ articles }) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ArticleList list={articles} />
        </div>
      </div>
    </Layout>
  );
}

ArticlePage.propTypes = {
};

function mapStateToProps(state) {
  return {
    articles: state.article.list,
  };
}

export default connect(mapStateToProps)(ArticlePage);
