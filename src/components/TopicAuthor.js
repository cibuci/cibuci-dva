import React from 'react';
import Block from 'react-blocks';
import styles from './TopicAuthor.less';
import Avatar from './Avatar';
import Spacer from './Common/Spacer';

const TopicAuthor = ({ topic }) => {
  if (!topic) return null;

  const { author } = topic;

  return (
    <Spacer onlylr>
      <Block layout horizontal centered className={styles.wrapper}>
        <Block flex>
          <Avatar size="large" user={author} />
        </Block>
        <Block>123</Block>
      </Block>
    </Spacer>
  );
};

TopicAuthor.propTypes = {
};

export default TopicAuthor;
