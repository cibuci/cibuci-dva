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

const ArticleDetail = (props, context) => {
  const { article } = props;

  if (!article) return null;
  const { title } = article;

  return (
    <span style={styles.title}>
      <a style={styles.back} onClick={context.router.goBack} ><Icon type="left" />返回</a>
      {title}
    </span>
  );
};

ArticleDetail.propTypes = {
};

ArticleDetail.contextTypes = {
  router: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    article: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleDetail);
