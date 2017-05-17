import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Base, Container } from '../components/Layout/';
import Spacer from '../components/Common/Spacer';

import styles from './ProfilePage.less';

function ProfilePage(props) {
  const { params } = props;

  return (
    <Base>
      <Helmet>
        <title>{`@${params.username} - 辞不辞`}</title>
      </Helmet>
      <Container>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Spacer onlytb>
              123
            </Spacer>
          </Col>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Spacer onlytb>
              123
            </Spacer>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

ProfilePage.propTypes = {
};

export default connect()(ProfilePage);
