import React from 'react';
import { connect } from 'dva';
import ArticleContent from '../components/ArticleContent';

const styles = {
  wrapper: {
    overflow: 'auto',
    height: '100%',
  },
  container: {
    maxWidth: 750,
    margin: '0 auto',
  },
};

function ArticleDetailPage({ article }) {
  if (!article) return null;

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <ArticleContent article={article} />
      </div>
    </div>
  );
}

ArticleDetailPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    article: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleDetailPage);
