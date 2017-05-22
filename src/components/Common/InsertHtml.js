import React from 'react';
import styles from './InsertHtml.less';

const InsertHtml = (props) => {
  const { content, children } = props;

  return (
    <article className={styles.article}>
      { children || <div dangerouslySetInnerHTML={{ __html: content }} /> }
    </article>
  );
};

InsertHtml.propTypes = {
};

export default InsertHtml;
