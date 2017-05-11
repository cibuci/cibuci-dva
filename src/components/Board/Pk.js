import React from 'react';
import { connect } from 'dva';
import { Tag } from 'antd';

const styles = {
  title: {
    fontSize: '1rem',
    lineHeight: '3.5rem',
  },
};

const Pk = ({ pk }) => {
  if (!pk) return null;
  const { title } = pk;

  return (
    <div>
      <Tag color="blue">PK 主题</Tag>
      <span style={styles.title}>{title}</span>
    </div>
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
