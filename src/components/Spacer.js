import React from 'react';

const Spacer = (props) => {
  const styles = {
    margin: '1rem',
  };
  if (props.onlytb) {
    styles.margin = '1rem 0';
  } else if (props.onlylr) {
    styles.margin = '0 1rem';
  }
  return (
    <div style={styles} {...props}>
      {props.children}
    </div>
  );
};

Spacer.propTypes = {
};

export default Spacer;
