import React from 'react';
import styles from './PkBar.less';

const PkBar = (props) => {
  const a = props.a || 0;
  const b = props.b || 100;

  const left = parseInt((a / (a + b)) * 100, 10);
  const right = 100 - left;

  const pkstyles = {
    left: {
      width: `${left}%`,
    },
    right: {
      width: `${right}%`,
    },
  };

  return (
    <div className={styles.outer}>
      <div className={styles.a} style={pkstyles.left}></div>
      <div className={styles.b} style={pkstyles.right}></div>
    </div>
  );
};

PkBar.propTypes = {
};

export default PkBar;
