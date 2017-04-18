import React from 'react';
import styles from './Layout.css';
import { Link } from 'dva/router';
import { MenuList } from 're-bulma';
import logo from '../assets/logo.png';

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <img alt="logo" className={styles.logo} src={logo} />
        {props.location}
        <MenuList>
          <li><Link to="/" activeClassName={styles.active}>PK</Link></li>
          <li><Link to="/topic" activeClassName={styles.active}>话题</Link></li>
          <li><Link to="/article" activeClassName={styles.active}>文章</Link></li>
        </MenuList>
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
