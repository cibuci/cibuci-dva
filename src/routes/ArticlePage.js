import React from 'react';
import { Helmet } from 'react-helmet';
import Base from '../components/Layout/Base';
import Container from '../components/Layout/Container';
import ArticleList from '../components/List/ArticleList';
import styles from './ArticlePage.less';

function ArticlePage(props) {
  const { children } = props;

  let content = null;

  if (children) {
    content = children;
  } else {
    content = (
      <div className={styles.container}>
        <ArticleList />
      </div>
    );
  }

  return (
    <Base>
      <Helmet>
        <title>精选 - 辞不辞</title>
      </Helmet>
      <Container>
        {content}
      </Container>
    </Base>
  );
}

ArticlePage.propTypes = {
};

export default ArticlePage;
