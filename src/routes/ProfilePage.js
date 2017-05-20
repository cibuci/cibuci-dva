import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Base, Container } from '../components/Layout/';
import Avatar from '../components/Avatar';
import Panel from '../components/Common/Panel';
import AuthorTopicList from '../components/List/AuthorTopicList';

import styles from './ProfilePage.less';

class ProfilePage extends React.Component {

  componentWillMount() {
    const { username } = this.props.params;
    this.props.dispatch({ type: 'app/fetchUserByName', payload: { username } });
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'app/save', payload: { current: null } });
  }

  render() {
    const { current, params } = this.props;
    if (!current) return null;

    return (
      <Base>
        <Helmet>
          <title>{`@${params.username} - 辞不辞`}</title>
        </Helmet>
        <Container>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className={styles.left}>
                <div className={styles.user}>
                  <Avatar size="full" user={current} />
                  <h1>{current.nickName || current.username}</h1>
                  <p>@{current.username}</p>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <div className={styles.right}>
                <Panel title="该用户创建的话题">
                  <AuthorTopicList userId={current.id} />
                </Panel>
              </div>
            </Col>
          </Row>
        </Container>
      </Base>
    );
  }
}

ProfilePage.propTypes = {
};

function mapStateToProps(state) {
  return {
    current: state.app.current,
  };
}

export default connect(mapStateToProps)(ProfilePage);
