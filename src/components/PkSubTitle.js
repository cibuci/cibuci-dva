import React from 'react';
import { Badge } from 'antd';
import PkBar from './PkBar';

import styles from './PkSubTitle.less';

const PkSubTitle = ({ pk }) => {
  if (!pk) return null;
  const {
    positivePiont,
    positiveCount,
    negativePiont,
    negativeCount,
  } = pk;

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <div className={styles.points}>
          <div className={styles.pointa}>
            <strong>正方</strong>
            <Badge count={positiveCount} style={{ backgroundColor: '#d3360b' }} />
            <p className={styles.view}>{positivePiont}</p>
          </div>
          <div className={styles.pointb}>
            <Badge count={negativeCount} style={{ backgroundColor: '#1f99d3' }} />
            <strong>反方</strong>
            <p className={styles.view}>{negativePiont}</p>
          </div>
        </div>
      </div>
      <div className={styles.bar}>
        <PkBar a={positiveCount} b={negativeCount} />
      </div>
    </div>
  );
};

PkSubTitle.propTypes = {
};

export default PkSubTitle;
