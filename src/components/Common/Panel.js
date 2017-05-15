import React from 'react';
import styles from './Panel.less';

const Panel = (props) => {
  const { title, children } = props;

  return (
    <div className={styles.wrapper}>
      { title ? (
        <div className={styles.title}>
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
