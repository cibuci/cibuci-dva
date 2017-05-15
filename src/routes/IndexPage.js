import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import Base from '../components/Layout/Base';
import Container from '../components/Layout/Container';
import Panel from '../components/Common/Panel';
import PkSubTitle from '../components/PkSubTitle';
import PkCommentList from '../components/List/PkCommentList';
import NewPkComment from '../components/Editor/NewPkComment';

import styles from './IndexPage.less';

function IndexPage({ current }) {
  return (
    <Base>
      <Helmet>
        <title>辞不辞 - 辞掉不开心 (๑•̀ㅂ•́)و✧</title>
      </Helmet>

      <div className={styles.top}>
        <PkSubTitle pk={current} />
      </div>

      <Container>
        <div>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <div className={styles.left}>
                <PkCommentList />
                <NewPkComment />
              </div>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className={styles.right}>
                <Panel title="精彩回复">
                  123
                </Panel>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Base>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.pk.current,
  };
}

export default connect(mapStateToProps)(IndexPage);
