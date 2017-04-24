import React from 'react';
import { connect } from 'dva';

const styles = {
  title: {
    fontSize: '1.2rem',
    lineHeight: '3.5rem',
  },
};

const ArticleDetail = ({ article }) => {
  if (!article) return null;
  const { title } = article;

  return (
    <span style={styles.title}>{title}</span>
  );
};

ArticleDetail.propTypes = {
};

function mapStateToProps(state) {
  return {
    article: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleDetail);
