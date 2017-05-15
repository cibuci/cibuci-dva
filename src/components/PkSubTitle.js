import React from 'react';
import Block from 'react-blocks';
import { Badge } from 'antd';
import PkBar from './PkBar';
import Container from './Layout/Container';

import styles from './PkSubTitle.less';

const PkSubTitle = ({ pk }) => {
  if (!pk) return null;
  const {
    title,
    positivePiont,
    positiveCount,
    negativePiont,
    negativeCount,
  } = pk;

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <PkBar a={positiveCount} b={negativeCount} />
      </div>
      <Container>
        <div className={styles.subtitle}>
          <div className={styles.wrapper}>
            <div className={styles.pointa}>
              <strong>正方</strong>
              <p>{positivePiont}</p>
            </div>
            <div className={styles.pointb}>
              <strong>反方</strong>
              <p>{negativePiont}</p>
            </div>
          </div>
          <div className={styles.badges}>
            <div className={styles.badgea}>
              <Badge count={positiveCount} style={{ backgroundColor: '#ed6c63' }} />
            </div>
            <div className={styles.badgeb}>
              <Badge count={negativeCount} style={{ backgroundColor: '#1f99d3' }} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

PkSubTitle.propTypes = {
};

export default PkSubTitle;
