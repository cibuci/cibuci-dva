import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import Container from './Layout/Container';

import styles from './TopicSubMenu.less';

const TopicSubMenu = (props) => {
  const { currentTabId, tabs } = props;

  function generateLink(id) {
    return `/topic?tab=${id}&page=1`;
  }

  return (
    <div className={styles.wrapper}>
      <Container>
        <ul className={styles.tabs}>
          { tabs.map(tab => (
            <li key={tab.id} className={tab.id === currentTabId ? styles.active : ''}>
              <Link to={generateLink(tab.id)}>{tab.name}</Link>
            </li>
          )) }
        </ul>
      </Container>
    </div>
  );
};

TopicSubMenu.propTypes = {
};

function mapStateToProps(state) {
  return {
    currentTabId: state.topic.currentTabId,
    tabs: state.topic.tabs,
  };
}

export default connect(mapStateToProps)(TopicSubMenu);
