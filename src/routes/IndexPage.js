import { Progress, Level, LevelItem, Heading, Title, Group, Input, Button, Message } from 're-bulma';
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import Layout from '../components/Layout';
import PkPanel from '../components/PkPanel';
import PkCommentList from '../components/PkCommentList';

function IndexPage({ comments }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          123
        </div>
        <div className={styles.content}>
          <div>
            <PkPanel />
          </div>
          <div className={`${styles.up} scroller`}>
            <PkCommentList comments={comments} />
          </div>
          <div className={styles.down}>
            <Group>
              <Input type="text" placeholder="Find ad repository" isExpanded />
              <Button color="isSuccess">Search</Button>
            </Group>
          </div>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    comments: state.comment.list,
  };
}

export default connect(mapStateToProps)(IndexPage);
