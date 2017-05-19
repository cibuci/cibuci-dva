import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import Panel from '../components/Common/Panel';
import NewArticle from '../components/Editor/NewArticle';

import styles from './ArticleAddPage.less';

function ArticleAddPage({ user }) {
  if (!user) return null;
  if (user.id !== '5902067be8b73a6cb192e0d6') return null;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>发布新文章 - 辞不辞</title>
      </Helmet>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
          <div className={styles.left}>
            <Panel title="发布新文章" icon="coffee">
              <NewArticle />
            </Panel>
          </div>
        </Col>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className={styles.right}>
            <Panel title="小提示" icon="pushpin-o">
              <ul className={styles.tips}>
                <li>🤣 标题要短，啤酒要冰，火药要干!</li>
                <li>🍺 图文并茂最好啦 ～</li>
              </ul>
            </Panel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

ArticleAddPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(ArticleAddPage);
