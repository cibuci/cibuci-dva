import React from 'react';

const Spacer = (props) => {
  const styles = {
    margin: '1.2rem',
  };
  if (props.onlytb) {
    styles.margin = '1.2rem 0';
  } else if (props.onlylr) {
    styles.margin = '0 1.2rem';
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
