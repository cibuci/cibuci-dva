import React from 'react';
import Block from 'react-blocks';
import { Badge } from 'antd';
import PkBar from './PkBar';

import styles from './PkPanel.less';

const PkPanel = ({ pk }) => {
  if (!pk) return null;
  const {
    positivePiont,
    positiveCount,
    negativePiont,
    negativeCount,
  } = pk;

  return (
    <div className={styles.container}>
      <Block layout horizontal justifyBetween>
        <Block className={styles.a}>
          <h4 className={styles.title}>正方 <Badge status="processing" count={positiveCount} /></h4>
          <p>{positivePiont}</p>
        </Block>
        <Block className={styles.b}>
          <h4 className={styles.title}><Badge count={negativeCount} /> 反方</h4>
          <p>{negativePiont} 反方</p>
        </Block>
      </Block>
      <PkBar a={positiveCount} b={negativeCount} />
    </div>
  );
};

PkPanel.propTypes = {
};

export default PkPanel;
