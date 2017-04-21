import { Button } from 'antd';
import React from 'react';
import { ArticleItem } from './Card/';
import Spacer from './Spacer';

const ArticleList = ({ list }) => {
  return (
    <Spacer>
      { list.map(item => <ArticleItem key={item.id} article={item} />) }

      <Spacer onlytb>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Button>查看更多</Button>
        </div>
      </Spacer>
    </Spacer>
  );
};

ArticleList.propTypes = {
};

export default ArticleList;
