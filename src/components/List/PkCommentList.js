import React from 'react';
import { connect } from 'dva';
import { Spin, Button } from 'antd';
import { PkComment } from './../Card/';
import { listSelector } from '../../models/pk-comment/selector';

import styles from './PkCommentList.less';

class PkCommentList extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.current) return;
    if (!nextProps.current.id) return;
    const { current, page } = this.props;
    if (current && current.id === nextProps.current.id) return;

    const pkId = nextProps.current.id;
    this.props.dispatch({ type: 'pkcomment/fetch', payload: { pkId, page } });
  }

  handleClick(e) {
    e.preventDefault();

    const { remaining, page } = this.props;
    const pkId = this.props.current.id;

    if (remaining) {
      const nextPage = page + 1;
      this.props.dispatch({ type: 'pkcomment/append', payload: { pkId, page: nextPage } });
    }
  }

  render() {
    const { list, loading, remaining } = this.props;

    return (
      <div>
        <Spin spinning={loading}>
          { list.map(item => <PkComment key={item.id} comment={item} />) }
        </Spin>
        <div style={{ width: '100%', textAlign: 'center' }}>
          { remaining ? (
            <Button onClick={this.handleClick} size="large">查看更多</Button>
          ) : (
            <p>没有更多了。</p>
          ) }
        </div>
      </div>
    );
  }
}

PkCommentList.propTypes = {
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.loading.models.pkcomment,
    current: state.pk.current,
    ...listSelector(state, ownProps),
  };
}

export default connect(mapStateToProps)(PkCommentList);
