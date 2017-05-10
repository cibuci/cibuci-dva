import React from 'react';
import { connect } from 'dva';
import styles from './TopicAddPage.less';
import NewTopic from '../components/Editor/NewTopic';

function TopicAddPage(props) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarlist}>
          如何提问：
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.up}>
          <NewTopic />
        </div>
      </div>
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
