import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import styles from './ArticlePage.less';

function ArticlePage(props) {
  const { children } = props;

  let content = null;

  if (children) {
    content = children;
  } else {
    content = (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ArticleList />
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>精选 - 辞不辞</title>
      </Helmet>
      {content}
    </Layout>
  );
}

ArticlePage.propTypes = {
};

export default ArticlePage;
