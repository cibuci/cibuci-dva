import { Card } from 'antd';
import React from 'react';
import { PkComment } from './Card/';
import Spacer from './Spacer';
import Comment from './Comment';

const PkCommentList = () => {
  return (
    <Spacer onlytb>
      <PkComment />
      <PkComment />
      <PkComment />
      <PkComment />
      <PkComment />
      <PkComment />
      <PkComment />
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
      <Card>
        <Comment />
      </Card>
    </Spacer>
  );
};

PkCommentList.propTypes = {
};

export default PkCommentList;
