import React from 'react';

const Spacer = (props) => {
  return (
    <div style={{ margin: '1.2rem' }} {...props}>
      {props.children}
    </div>
  );
};

Spacer.propTypes = {
};

export default Spacer;
