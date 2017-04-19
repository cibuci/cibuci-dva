import { Progress, Level, LevelItem, Heading, Title, Group, Input, Button, Message } from 're-bulma';
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Layout from '../components/Layout';
import Comment from '../components/Comment';
import PkPanel from '../components/PkPanel';

function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
        </div>
        <div className={styles.content}>
          <div>
            <PkPanel />
          </div>
          <div className={`${styles.up} scroller`}>

          <div style={{ margin: '1.5rem' }} >
          <Message header="Hello World">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque risus mi, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
    gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
    arcu et sollicitudin porttitor, tortor urna tempor ligula,
    id porttitor mi magna a neque. Donec dui urna, vehicula et
    sem eget, facilisis sodales sem.
  </Message>

  <Message header="Hello World" color="isPrimary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque risus mi, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
    gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
    arcu et sollicitudin porttitor, tortor urna tempor ligula,
    id porttitor mi magna a neque. Donec dui urna, vehicula et
    sem eget, facilisis sodales sem.
  </Message>

  <Message color="isPrimary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Pellentesque risus mi, tempus quis placerat ut, porta nec
    nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
    gravida purus diam, et dictum felis venenatis efficitur.
    Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
    arcu et sollicitudin porttitor, tortor urna tempor ligula,
    id porttitor mi magna a neque. Donec dui urna, vehicula et
    sem eget, facilisis sodales sem.
  </Message>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            </div>
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

export default connect()(IndexPage);
