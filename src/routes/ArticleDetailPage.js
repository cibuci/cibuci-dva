import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Icon, Button } from 'antd';
import { isAdmin } from '../utils/tools';
import ArticleContent from '../components/ArticleContent';

import styles from './ArticleDetailPage.less';

class ArticleDetailPage extends React.Component {

  componentWillUnmount() {
    this.props.dispatch({ type: 'article/save', payload: { current: null } });
  }

  render() {
    const { article, user } = this.props;
    if (!article) return null;

    const { sourceUrl } = article;

    return (
      <div>
        <Helmet>
          <title>{`${article.title} - 辞不辞`}</title>
        </Helmet>
        <div className={styles.container}>
          <div className={styles.title}>
            {article.title}
          </div>
          { isAdmin(user) ? (
            <div className={styles.panel}>
              <Link to={`/article/edit/${article.id}`}>
                <Button size="large" type="primary"><Icon type="exception" />编辑文章</Button>
              </Link>
            </div>
          ) : null }
          <div className={styles.content}>
            <ArticleContent article={article} />
          </div>
          <div className={styles.footer}>
            { sourceUrl ? (<a href={sourceUrl} rel="noopener noreferrer" target="_blank">原文链接</a>) : null }
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
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(ArticleDetailPage);
