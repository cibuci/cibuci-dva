import React from 'react';
import { Link } from 'dva/router';
import styles from './ArticleItem.less';

const ArticleItem = ({ article }) => {
  if (!article) return null;
  const { id, createdAt, title, summary, cover } = article;

  return (
    <div className={styles.wrapper}>

      <div className={styles.cover}>
        <img src={cover} alt="cover" />
      </div>

      <div className={styles.body}>
        <div className={styles.heading}>
          <Link to={`/article/${id}`}>{title}</Link>
        </div>
        <div className={styles.meta}>
          <Link to="/article?params=jh">精华</Link>&nbsp;•&nbsp;
          发表于 {createdAt}
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
};

export default ArticleItem;
