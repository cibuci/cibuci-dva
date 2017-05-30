import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Button, Icon } from 'antd';
import { Container, Base } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import InsertHtml from '../components/Common/InsertHtml';
import LogoGather from '../components/LogoGather';
import { isAdmin } from '../utils/tools';

import styles from './AboutPage.less';

function AboutPage(props) {
  const { about, user } = props;
  return (
    <Base>
      <Helmet>
        <title>辞不辞 - 自由职业者的实验室 (๑•̀ㅂ•́)و✧</title>
      </Helmet>
      <Container>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={17} lg={17} xl={17}>
            <div className={styles.left}>
              <Panel title="关于辞不辞">
                <div className={styles.board}>
                  <div className={styles.wrapper}>
                    <LogoGather pixSize={16} pointSizeMin={8} />
                  </div>
                  <div className={styles.article}>
                    <InsertHtml content={about && about.cibuci && about.cibuci.content} />
                  </div>
                </div>
                { about && about.us && isAdmin(user) ? (
                  <div className={styles.panel}>
                    <Link to={`/article/edit/${about.us.id}`}>
                      <Button size="large" type="primary"><Icon type="exception" />编辑文章</Button>
                    </Link>
                  </div>
                ) : null }
              </Panel>
              <Panel title="关于我们">
                <div className={styles.article}>
                  <InsertHtml content={about && about.us && about.us.content} />
                </div>
                { about && about.cibuci && isAdmin(user) ? (
                  <div className={styles.panel}>
                    <Link to={`/article/edit/${about.cibuci.id}`}>
                      <Button size="large" type="primary"><Icon type="exception" />编辑文章</Button>
                    </Link>
                  </div>
                ) : null }
              </Panel>
            </div>
          </Col>
          <Col xs={24} sm={24} md={7} lg={7} xl={7}>
            <div className={styles.right}>
              <Panel title="联系我们">
                <div className={styles.content}>
                  <a href="mailto://support@cibuci.com">support@cibuci.com</a>
                </div>
              </Panel>
              <Panel title="商户合作">
                <div className={styles.content}>
                  <a href="mailto://bd@cibuci.com">bd@cibuci.com</a>
                </div>
              </Panel>
            </div>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

AboutPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    about: state.article.about,
    user: state.app.user,
  };
}

export default connect(mapStateToProps)(AboutPage);
