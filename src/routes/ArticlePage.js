import React from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';

function ArticlePage() {
  return (
    <Layout>
      文章
    </Layout>
  );
}

ArticlePage.propTypes = {
};

export default connect()(ArticlePage);
