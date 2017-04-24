import React from 'react';
import { connect } from 'dva';

const styles = {
  title: {
    fontSize: '1.2rem',
    lineHeight: '3.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const TopicDetail = ({ topic }) => {
  if (!topic) return null;
  const { title } = topic;

  return (
    <p style={styles.title}>{title}</p>
  );
};

TopicDetail.propTypes = {
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicDetail);
