import React from 'react';
import styles from './InsertHtml.less';

const InsertHtml = (props) => {
  const { content } = props;

  return (
    <article className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

InsertHtml.propTypes = {
};

export default InsertHtml;
