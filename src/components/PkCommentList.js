import React from 'react';
import { PkComment } from './Card/';
import Spacer from './Spacer';

const PkCommentList = ({ comments }) => {
  return (
    <Spacer onlytb>
      { comments.map(comment => <PkComment comment={comment} />) }
    </Spacer>
  );
};

PkCommentList.propTypes = {
};

export default PkCommentList;
