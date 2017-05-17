import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import ArticleContent from '../components/ArticleContent';

const styles = {
  wrapper: {
    overflow: 'auto',
    height: '100%',
  },
  container: {
    maxWidth: 750,
    margin: '0 auto',
  },
};

class ArticleDetailPage extends React.Component {

  componentWillUnmount() {
    this.props.dispatch({ type: 'article/save', payload: { current: null } });
  }

  render() {
    const { article } = this.props;
    if (!article) return null;

    return (
      <div style={styles.wrapper}>
        <Helmet>
          <title>{`${article.title} - 辞不辞`}</title>
        </Helmet>
        <div style={styles.container}>
          <ArticleContent article={article} />
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
