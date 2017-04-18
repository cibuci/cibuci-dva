import React from 'react';
import styles from './Layout.less';
import NavMenu from './NavMenu';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <NavMenu />
      </aside>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.playground}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
};

export default Layout;
