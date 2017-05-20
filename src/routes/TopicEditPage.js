import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { Container } from '../components/Layout/';
import { isAuthor } from '../utils/tools';
import Panel from '../components/Common/Panel';
import TopicEditor from '../components/Editor/TopicEditor';
import EditorTips from '../components/EditorTips';

import styles from './TopicEditPage.less';

class TopicEditPage extends React.Component {

  componentDidMount() {
    const id = this.props.params.id;
    this.props.dispatch({ type: 'topic/fetchItem', payload: { id } });
  }

  handleSave(item) {
    const params = {
      id: this.props.params.id,
      data: item,
    };
    this.props.dispatch({ type: 'topic/editItem', payload: params });
  }

  render() {
    const { user, current } = this.props;
    if (!current) return null;
    if (!isAuthor(user, current.author)) return null;

    return (
      <div className={styles.container}>
        <Helmet>
          <title>编辑话题 - 辞不辞</title>
        </Helmet>
        <Container>
          <Row gutter={24}>
            <Col xs={24} sm={24} md={17} lg={17} xl={17}>
              <div className={styles.left}>
                <Panel title="编辑话题" icon="coffee">
                  <TopicEditor
                    edit={current}
                    onSave={this.handleSave.bind(this)}
                    saveButtonName="保存"
                  />
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

TopicEditPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
    current: state.topic.current,
  };
}

export default connect(mapStateToProps)(TopicEditPage);
