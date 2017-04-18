import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Layout from '../components/Layout';
import { Progress, Level, LevelItem, Heading, Title, Group, Input, Button, Message } from 're-bulma';
import Comment from '../components/Comment';

function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div style={{margin: '1.5rem'}}>
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
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <Level style={{ margin: '2rem' }}>
              <LevelItem hasTextCentered>
                <Heading>红方</Heading>
                <Title>xxxxxxxxxx</Title>
              </LevelItem>
              <LevelItem hasTextCentered>
                <Heading>蓝方</Heading>
                <Title>xxxxxxxxxx</Title>
              </LevelItem>
            </Level>
            <div>
              <Progress value="45" max="100" style={{ marginBottom: '5px' }} />
              <Progress color="isPrimary" size="isLarge" value="15" max="100" style={{ marginBottom: '5px' }} />
            </div>
            <Level>
              <LevelItem hasTextCentered>
                <Heading>Tweets</Heading>
                <Title>3,456</Title>
              </LevelItem>
              <LevelItem hasTextCentered>
                <Heading>Following</Heading>
                <Title>123</Title>
              </LevelItem>
              <LevelItem hasTextCentered>
                <Heading>Followers</Heading>
                <Title>456K</Title>
              </LevelItem>
              <LevelItem hasTextCentered>
                <Heading>Likes</Heading>
                <Title>789</Title>
              </LevelItem>
            </Level>
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
