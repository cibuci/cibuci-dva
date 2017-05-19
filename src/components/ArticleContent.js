import React from 'react';
import styles from './ArticleContent.less';

const ArticleContent = ({ article }) => {
  if (!article) return null;

  return (
    <div className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

ArticleContent.propTypes = {
};

export default ArticleContent;
