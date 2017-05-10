import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

import styles from './TopicList.less';

const TopicList = (props) => {
  const { currentTabId, tabs } = props;

  function generateLink(id) {
    return `/topic?tab=${id}&page=1`;
  }

  return (
    <div>
      <ul className={styles.tabs}>
        { tabs.map(tab => (
          <li key={tab.id} className={tab.id === currentTabId ? styles.active : ''}>
            <Link to={generateLink(tab.id)}>{tab.name}</Link>
          </li>
        )) }
      </ul>
    </div>
  );
};

TopicList.propTypes = {
};

function mapStateToProps(state) {
  return {
    currentTabId: state.topic.currentTabId,
    tabs: state.topic.tabs,
  };
}

export default connect(mapStateToProps)(TopicList);
