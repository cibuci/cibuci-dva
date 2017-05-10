import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './HotTopicList.less';

class NoReplyTopicList extends React.Component {

  componentDidMount() {
    this.props.dispatch({ type: 'topic/fetchNoReply' });
  }

  render() {
    const { list } = this.props;

    return (
      <div className={styles.group}>
        <h5 className={styles.title}>无人回复的话题</h5>
        <ul>
          { list.map(item => <li key={item.id}><Link to={`/topic/${item.id}`}>{item.title}</Link></li>) }
        </ul>
      </div>
    );
  }
}

NoReplyTopicList.propTypes = {
};

function mapStateToProps(state) {
  return {
    list: state.topic.noreply,
  };
}

export default connect(mapStateToProps)(NoReplyTopicList);
