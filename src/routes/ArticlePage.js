import React from 'react';
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
      {content}
    </Layout>
  );
}

ArticlePage.propTypes = {
};

export default ArticlePage;
