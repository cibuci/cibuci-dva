import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Layout from '../components/Layout';
import { Progress, Level, LevelItem, Heading, Title, Group, Input, Button, Message } from 're-bulma';
import Comment from '../components/Comment';

function AboutPage() {
  return (
    <Layout>
    </Layout>
  );
}

AboutPage.propTypes = {
};

export default connect()(AboutPage);
