import React from 'react';

const Box = (props) => {
  return (
    <div style={{ margin: '1.5rem' }}>
      {props.children}
    </div>
  );
};

Box.propTypes = {
};

export default Box;
