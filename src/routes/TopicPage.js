import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Addons, Button } from 're-bulma';
import Layout from '../components/Layout';

function TopicPage() {
  return (
    <Layout>
      123
    </Layout>
  );
}

TopicPage.propTypes = {
};

export default connect()(TopicPage);
