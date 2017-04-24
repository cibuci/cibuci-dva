import React from 'react';
import { Button } from 'antd';
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

const TopicDetail = (props, context) => {
  const { topic } = props;

  if (!topic) return null;
  const { title } = topic;

  return (
    <p style={styles.title}>
      <Button icon="left" onClick={context.router.goBack} />
      {title}
    </p>
  );
};

TopicDetail.propTypes = {
};

TopicDetail.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    topic: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicDetail);
