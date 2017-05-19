import React from 'react';
import { Icon } from 'antd';
import styles from './Panel.less';

const Panel = (props) => {
  const { icon, title, children } = props;

  return (
    <div className={styles.wrapper}>
      { title ? (
        <div className={styles.title}>
          { icon ? (
            <Icon className={styles.icon} type={icon} />
          ) : null }
          {title}
        </div>
      ) : null }
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

Panel.propTypes = {
};

export default Panel;
