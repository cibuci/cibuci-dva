import React from 'react';
import { Link } from 'dva/router';
import moment from 'moment';
import styles from './ArticleItem.less';

const ArticleItem = ({ article }) => {
  if (!article) return null;
  const {
    id,
    createdAt,
    title,
    summary,
    cover,
    readCount,
  } = article;

  return (
    <div className={styles.wrapper}>

      <div className={styles.cover}>
        <Link to={`/article/${id}`}>
          <img src={`${cover}?imageView2/1/w/700/h/400/format/jpg/q/75|imageslim`} alt="cover" />
        </Link>
      </div>

      <div className={styles.heading}>
        <Link to={`/article/${id}`}>{title}</Link>
      </div>

      <div className={styles.body}>
        <Link to={`/article/${id}`}>
          <div className={styles.summary}>
            <p>{summary}</p>
          </div>
        </Link>
        <div className={styles.meta}>
          {moment(createdAt).fromNow()}
          <span className={styles.counts}>阅读：{readCount}</span>
        </div>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
};

export default ArticleItem;
