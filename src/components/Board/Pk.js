import React from 'react';
import { connect } from 'dva';

const styles = {
  title: {
    fontSize: '1.2rem',
    lineHeight: '3.5rem',
  },
};

const Pk = ({ pk }) => {
  if (!pk) return null;
  const { title } = pk;

  return (
    <span style={styles.title}>{title}</span>
  );
};

Pk.propTypes = {
};

function mapStateToProps(state) {
  return {
    pk: state.pk.current,
  };
}

export default connect(mapStateToProps)(Pk);
