import React from 'react';
import Header from './Header';
import Container from './Container';
import styles from './Base.less';

const Base = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Container>
          <Header />
        </Container>
      </div>
      <div className={styles.content}>
        <Container>
          {props.children}
        </Container>
      </div>
    </div>
  );
};

Base.propTypes = {
};

export default Base;
