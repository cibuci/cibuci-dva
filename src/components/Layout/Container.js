import React from 'react';
import styles from './Container.less';

const Container = (props) => {
  return (
    <div className={styles.container} {...props}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
};

export default Container;
