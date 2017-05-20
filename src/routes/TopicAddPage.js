import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Container } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import TopicEditor from '../components/Editor/TopicEditor';
import EditorTips from '../components/EditorTips';

import styles from './TopicAddPage.less';

class TopicAddPage extends React.Component {
  handleSave(item) {
    this.props.dispatch({ type: 'topic/addItem', payload: item });
  }

  render() {
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
                  <TopicEditor onSave={this.handleSave.bind(this)} />
                </Panel>
              </div>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <div className={styles.right}>
                <EditorTips />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

TopicAddPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    noreply: state.topic.noreply,
  };
}

export default connect(mapStateToProps)(TopicAddPage);
