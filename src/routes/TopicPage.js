import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Addons, Button } from 're-bulma';

function TopicPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <Addons>
  <Button icon="fa fa-align-left">Left</Button>
  <Button icon="fa fa-align-center">Center</Button>
  <Button icon="fa fa-align-right">Right</Button>
</Addons>
    </div>
  );
}

TopicPage.propTypes = {
};

export default connect()(TopicPage);
