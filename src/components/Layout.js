import React from 'react';
import styles from './Layout.less';
import NavMenu from './NavMenu';
import Header from './Header';

const Layout = (props) => {
  const content = props.noheader ? (<div className={styles.content}>
    {props.children}
  </div>) : (<div className={styles.content}>
    <div className={styles.header}>
      <Header />
    </div>
    <div className={styles.playground}>
      {props.children}
    </div>
  </div>);

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <NavMenu />
      </aside>
      {content}
    </div>
  );
};

Layout.propTypes = {
};

export default Layout;
