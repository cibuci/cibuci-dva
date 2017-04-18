import React from 'react';
import styles from './Layout.css';
import NavMenu from './NavMenu';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <NavMenu />
      </aside>
      <div className={styles.content}>
        <div className={styles.header}>
          <h5 className={styles.title}>你的兴趣可以谋生吗？</h5>
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
