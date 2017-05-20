import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import { isAdmin } from '../utils/tools';
import Panel from '../components/Common/Panel';
import ArticleEditor from '../components/Editor/ArticleEditor';
import EditorTips from '../components/EditorTips';

import styles from './ArticleEditPage.less';

class ArticleEditPage extends React.Component {

  componentDidMount() {
    const id = this.props.params.id;
    this.props.dispatch({ type: 'article/fetchItem', payload: { id } });
  }

  handleSave(item) {
    const params = {
      id: this.props.params.id,
      data: item,
    };
    this.props.dispatch({ type: 'article/editItem', payload: params });
  }

  render() {
    const { user, current } = this.props;

    if (!user) return null;
    if (!isAdmin(user)) return null;

    return (
      <div className={styles.container}>
        <Helmet>
          <title>编辑文章 - 辞不辞</title>
        </Helmet>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={17} lg={17} xl={17}>
            <div className={styles.left}>
              <Panel title="编辑文章" icon="coffee">
                <ArticleEditor
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
      </div>
    );
  }
}

ArticleEditPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    user: state.app.user,
    current: state.article.current,
  };
}

export default connect(mapStateToProps)(ArticleEditPage);
