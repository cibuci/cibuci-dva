import React from 'react';
import Spacer from './Spacer';
import styles from './ArticleContent.less';

const ArticleContent = ({ article }) => {
  if (!article) return null;

  return (
    <Spacer>
      <div className={styles.wrapper}>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>
    </Spacer>
  );
};

ArticleContent.propTypes = {
};

export default ArticleContent;
