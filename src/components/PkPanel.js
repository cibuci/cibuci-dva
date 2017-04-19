import React from 'react';
import Block from 'react-blocks';
import styles from './PkPanel.less';
import PkBar from './PkBar';
import Spacer from './Spacer';

const PkPanel = () => {
  return (
    <div className={styles.container}>
      <Spacer>
        <Block layout horizontal justifyBetween>
          <Block className={styles.a}>
            <h4 className={styles.title}>人性本善</h4>
            <p>红方</p>
          </Block>
          <Block className={styles.b}>
            <h4 className={styles.title}>人性本恶</h4>
            <p>蓝方</p>
          </Block>
        </Block>
      </Spacer>
      <PkBar a={33} b={44} />
    </div>
  );
};

PkPanel.propTypes = {
};

export default PkPanel;
