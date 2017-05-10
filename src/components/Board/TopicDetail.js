import React from 'react';
import { Icon } from 'antd';
import { connect } from 'dva';

const styles = {
  title: {
    fontSize: '1rem',
    lineHeight: '3.5rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  back: {
    marginRight: '1.65rem',
  },
};

const TopicDetail = (props, context) => {
  const { topic } = props;

  if (!topic) return null;
  const { title } = topic;

  return (
    <p style={styles.title}>
      <a style={styles.back} onClick={context.router.goBack} ><Icon type="left" />返回</a>
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
