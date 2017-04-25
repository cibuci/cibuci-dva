import React from 'react';
import Block from 'react-blocks';
import styles from './TopicAuthor.less';
import Avatar from './Avatar';
import Spacer from './Spacer';

const TopicAuthor = ({ topic }) => {
  const { id, author, date, title, statistics } = topic;

  return (
    <Block layout horizontal centered className={styles.wrapper}>
      <Block flex>
        <Avatar avatar={author.avatar} size="large" />
      </Block>
      <Block>123</Block>
    </Block>
  );
};

TopicAuthor.propTypes = {
};

export default TopicAuthor;
