import React from 'react';

const Spacer = (props) => {
  const styles = {
    margin: '1.5rem',
  };
  if (props.onlytb) {
    styles.margin = '1.5rem 0';
  } else if (props.onlylr) {
    styles.margin = '0 1.5rem';
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
