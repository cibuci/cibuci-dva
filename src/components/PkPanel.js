import React from 'react';
import Block from 'react-blocks';
import styles from './PkPanel.less';
import PkBar from './PkBar';
import Spacer from './Spacer';

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
      <Spacer>
        <Block layout horizontal justifyBetween>
          <Block className={styles.a}>
            <h4 className={styles.title}>{positivePiont}</h4>
            <p>正方 {positiveCount}</p>
          </Block>
          <Block className={styles.b}>
            <h4 className={styles.title}>{negativePiont}</h4>
            <p>{negativeCount} 反方</p>
          </Block>
        </Block>
      </Spacer>
      <PkBar a={positiveCount} b={negativeCount} />
    </div>
  );
};

PkPanel.propTypes = {
};

export default PkPanel;
