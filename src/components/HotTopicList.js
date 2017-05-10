import React from 'react';
import { Link } from 'dva/router';
import styles from './HotTopicList.less';

const HotTopicList = (props) => {
  const { title, list } = props;

  return (
    <div className={styles.group}>
      <h5 className={styles.title}>{title}</h5>
      <ul>
        { list.map(item => <li key={item.id}><Link to={`/topic/${item.id}`}>{item.title}</Link></li>) }
      </ul>
    </div>
  );
};

HotTopicList.propTypes = {
};

export default HotTopicList;
