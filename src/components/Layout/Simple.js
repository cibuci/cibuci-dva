import React from 'react';
import styles from './Simple.less';

const Simple = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

Simple.propTypes = {
};

export default Simple;
