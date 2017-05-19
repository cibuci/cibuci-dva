import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Container } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import NewTopic from '../components/Editor/NewTopic';

import styles from './TopicAddPage.less';

function TopicAddPage() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>发布新话题 - 辞不辞</title>
      </Helmet>
      <Container>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={17} lg={17} xl={17}>
            <div className={styles.left}>
              <Panel title="发布新话题" icon="plus-circle-o">
                <NewTopic />
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
      </Container>
    </div>
  );
}

TopicAddPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    noreply: state.topic.noreply,
  };
}

export default connect(mapStateToProps)(TopicAddPage);
