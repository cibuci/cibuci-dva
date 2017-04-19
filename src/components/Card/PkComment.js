import React from 'react';
import Block from 'react-blocks';
import styles from './PkComment.less';
import Spacer from '../Spacer';
import Avatar from '../Avatar';

const PkComment = () => {
  return (
    <div className={styles.container}>
      <Spacer onlylr>
        <Block layout horizontal>
          <Block>
            <Avatar />
          </Block>
          <Block flex>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Block>
        </Block>
      </Spacer>
    </div>
  );
};

PkComment.propTypes = {
};

export default PkComment;
