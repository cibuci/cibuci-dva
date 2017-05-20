import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './SimpleTopicList.less';

class AuthorTopicList extends React.Component {

  componentDidMount() {
    if (this.props.userId) {
      const { userId } = this.props;
      this.props.dispatch({ type: 'topic/fetchAuthor', payload: { userId } });
    }
  }

  componentWillUnmount() {
    this.props.dispatch({ type: 'topic/save', payload: { author: [] } });
  }

  render() {
    const { list } = this.props;

    return (
      <div className={styles.group}>
        <ul>
          { list.map(item => <li key={item.id}><Link to={`/topic/${item.id}`}>{item.title}</Link></li>) }
        </ul>
      </div>
    );
  }
}

AuthorTopicList.propTypes = {
};

function mapStateToProps(state) {
  return {
    list: state.topic.author,
  };
}

export default connect(mapStateToProps)(AuthorTopicList);
