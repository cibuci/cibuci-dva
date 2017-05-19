import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import ArticleContent from '../components/ArticleContent';

import styles from './ArticleDetailPage.less';

class ArticleDetailPage extends React.Component {

  componentWillUnmount() {
    this.props.dispatch({ type: 'article/save', payload: { current: null } });
  }

  render() {
    const { article } = this.props;
    if (!article) return null;

    return (
      <div>
        <Helmet>
          <title>{`${article.title} - 辞不辞`}</title>
        </Helmet>
        <div className={styles.container}>
          <div className={styles.title}>
            {article.title}
          </div>
          <div className={styles.content}>
            <ArticleContent article={article} />
          </div>
        </div>
      </div>
    );
  }
}

ArticleDetailPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    article: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleDetailPage);
