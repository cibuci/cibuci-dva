import React from 'react';
import { Button, Spin, Row, Col } from 'antd';
import { connect } from 'dva';
import { ArticleItem } from '../Card/';
import { listSelector } from '../../models/article/selector';
import styles from './ArticleList.less';

const ArticleList = (props) => {
  const { loading, page, list, remaining } = props;

  function handleClick(e) {
    e.preventDefault();

    if (remaining) {
      const nextPage = page + 1;
      props.dispatch({ type: 'article/appendList', payload: { page: nextPage } });
    }
  }

  return (
    <div>
      <Spin spinning={loading}>
        <div className={styles.container}>
          <Row gutter={24} type="flex" align="top">
            { list.map(item => (
              <Col key={item.id} xs={24} sm={24} md={12} lg={8} xl={8}>
                <ArticleItem article={item} />
              </Col>
            )) }
          </Row>
        </div>
      </Spin>

      <div className={styles.next}>
        { remaining ? (
          <Button onClick={handleClick} size="large">查看更多</Button>
        ) : (
          <p>没有更多了。</p>
        ) }
      </div>
    </div>
  );
};

ArticleList.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.models.article,
    ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(ArticleList);
