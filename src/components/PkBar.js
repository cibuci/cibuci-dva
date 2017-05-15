import React from 'react';
import styles from './PkBar.less';

const PkBar = (props) => {
  const a = parseInt(props.a, 10);
  const b = parseInt(props.b, 10);

  let left = 0;
  let right = 0;

  if (!a && !b) {
    left = 50;
    right = 50;
  } else {
    left = parseInt((a / (a + b)) * 100, 10);
    right = 100 - left;
  }

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
      <div className={styles.a} style={pkstyles.left} />
      <div className={styles.b} style={pkstyles.right} />
    </div>
  );
};

PkBar.propTypes = {
};

export default PkBar;
