import React from 'react';
import { TopicItem } from './Card/';
import Spacer from './Spacer';

const TopicList = ({ topics }) => {
  return (
    <Spacer>
      { topics.map(topic => <TopicItem topic={topic} />) }
    </Spacer>
  );
};

TopicList.propTypes = {
};

export default TopicList;
