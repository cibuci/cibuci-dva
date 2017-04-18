import { Pagination, PageButton, Button, Panel, PanelHeading, PanelTabs, PanelBlock } from 're-bulma';
import React from 'react';
import { connect } from 'dva';
import styles from './TopicPage.css';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Box from '../components/Box';

function TopicPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarlist}>
            <Box>
              <Button size="isLarge">发起新话题</Button>
              <Panel>
                <PanelHeading>
                  热门话题
                </PanelHeading>
                <PanelTabs>
                  <span className="is-active" href="#">All</span>
                  <span href="#">Public</span>
                  <span href="#">Private</span>
                  <span href="#">Sources</span>
                  <span href="#">Forks</span>
                </PanelTabs>
                <PanelBlock icon="fa fa-book">
                  bulma-website
                </PanelBlock>
                <PanelBlock icon="fa fa-heart">
                  bulma-website
                </PanelBlock>
                <PanelBlock icon="fa fa-heart">
                  bulma-website
                </PanelBlock>
              </Panel>

              <div>
                占位
              </div>
            </Box>
          </div>
        </div>
        <div className={styles.content}>
          <div className={`${styles.up} scroller`}>
            <Box>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Box>
          </div>
          <div className={styles.footer}>
            <Box>
              <Pagination>
                <PageButton>Previous</PageButton>
                <PageButton>Next page</PageButton>
                <ul>
                  <li>
                    <PageButton>1</PageButton>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <PageButton>45</PageButton>
                  </li>
                  <li>
                    <PageButton color="isPrimary">46</PageButton>
                  </li>
                  <li>
                    <PageButton>47</PageButton>
                  </li>
                  <li>
                    <span>...</span>
                  </li>
                  <li>
                    <PageButton>86</PageButton>
                  </li>
                </ul>
              </Pagination>
            </Box>
          </div>
        </div>
      </div>
    </Layout>
  );
}

TopicPage.propTypes = {
};

export default connect()(TopicPage);
