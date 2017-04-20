import React from 'react';
import { TopicItem } from './Card/';
import Spacer from './Spacer';

const TopicList = ({ topics }) => {
  return (
    <Spacer>
      { topics.map(topic => <TopicItem key={topic.id} topic={topic} />) }
    </Spacer>
  );
};

TopicList.propTypes = {
};

export default TopicList;
