import React from 'react';
import { connect } from 'dva';
import { Tag } from 'antd';

const styles = {
  saying: {
    display: 'inline-block',
  },
};

const ArticleList = (props) => {
  const { saying } = props;

  return (
    <div>
      { saying ? (
        <div>
          <Tag color="blue">装逼小句子</Tag>
          <div style={styles.saying}>
            <p>{saying}</p>
          </div>
        </div>
      ) : null }

    </div>
  );
};

ArticleList.propTypes = {
};

function mapStateToProps(state) {
  return {
    saying: state.app.saying,
  };
}

export default connect(mapStateToProps)(ArticleList);
