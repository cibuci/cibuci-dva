import React from 'react';
import { Link } from 'dva/router';
import styles from './ArticleItem.less';

const ArticleItem = ({ article }) => {
  if (!article) return null;
  const { id, date, title, statistics, cover } = article;

  return (
    <div className={styles.wrapper}>

      <div className={styles.cover}>
        <img className="e-scale" src={cover} alt="cover" />
      </div>

      <div className={styles.body}>
        <div className={styles.heading}>
          <Link to={`/article/${id}`}>{title}</Link>
        </div>
        <div className={styles.meta}>
          <Link to="/article?params=jh">精华</Link>&nbsp;•&nbsp;
          发表于 {date.published}
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
};

export default ArticleItem;