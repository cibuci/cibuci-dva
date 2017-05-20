import React from 'react';
import { BackTop } from 'antd';
import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import styles from './Base.less';

const Base = (props) => {
  return (
    <div className={styles.wrapper}>
      <BackTop style={{ bottom: 15, right: 20 }} />
      <div className={styles.header}>
        <Container>
          <Header />
        </Container>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.footer}>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

Base.propTypes = {
};

export default Base;
