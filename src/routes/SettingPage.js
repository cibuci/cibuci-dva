import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Base, Container } from '../components/Layout/';
import UserSideMenu from '../components/menu/UserSideMenu';
import UserInfoPanel from '../components/UserInfoPanel';

import styles from './SettingPage.less';

class SettingPage extends React.Component {
  componentWillMount() {
    if (!this.props.authorized) {
      this.context.router.replace('/signin');
    }
  }

  render() {
    return (
      <Base>
        <Helmet>
          <title>设置 - 辞不辞</title>
        </Helmet>
        <Container>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className={styles.left}>
                <UserSideMenu />
              </div>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <div className={styles.right}>
                { this.props.children ? this.props.children : (
                  <UserInfoPanel />
                ) }
              </div>
            </Col>
          </Row>
        </Container>
      </Base>
    );
  }
}

SettingPage.propTypes = {
};

SettingPage.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    authorized: state.app.authorized,
  };
}

export default connect(mapStateToProps)(SettingPage);
