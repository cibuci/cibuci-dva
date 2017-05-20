import React from 'react';
import InsertHtml from './Common/InsertHtml';

const ArticleContent = ({ article }) => {
  if (!article) return null;

  return (
    <div>
      <InsertHtml content={article.content} />
    </div>
  );
};

ArticleContent.propTypes = {
};

export default ArticleContent;
