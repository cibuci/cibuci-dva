import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Container } from '../components/Layout/';
import Panel from '../components/Common/Panel';
import TopicEditor from '../components/Editor/TopicEditor';
import EditorTips from '../components/EditorTips';

import styles from './TopicAddPage.less';

class TopicAddPage extends React.Component {

  componentWillMount() {
    if (!this.props.authorized) {
      this.context.router.replace('/signin');
    }
  }

  handleSave(item) {
    this.props.dispatch({ type: 'topic/addItem', payload: item });
  }

  render() {
    const { currentTabId } = this.props;
    let defaultTab = '';
    if (currentTabId !== 'all' && currentTabId !== 'good') {
      defaultTab = currentTabId;
    }

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
                  <TopicEditor defaultTab={defaultTab} onSave={this.handleSave.bind(this)} />
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

TopicAddPage.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    currentTabId: state.topic.currentTabId,
    authorized: state.app.authorized,
  };
}

export default connect(mapStateToProps)(TopicAddPage);
