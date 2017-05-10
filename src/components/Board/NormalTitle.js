import React from 'react';
import { Icon } from 'antd';

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

const NormalTitle = (props, context) => {
  const { title } = props;

  return (
    <span style={styles.title}>
      <a style={styles.back} onClick={context.router.goBack} ><Icon type="left" />返回</a>
      {title}
    </span>
  );
};

NormalTitle.propTypes = {
};

NormalTitle.contextTypes = {
  router: React.PropTypes.object,
};

export default NormalTitle;
