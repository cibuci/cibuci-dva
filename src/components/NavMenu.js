import React from 'react';
import { Link } from 'dva/router';
import styles from './NavMenu.css';
import logo from '../assets/logo.png';

const NavMenu = () => {
  return (
    <div>
      <div className={styles.logo}>
        <Link to="/">
          <img alt="logo" className={styles.logo} src={logo} />
        </Link>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/" activeClassName={styles.active} >P·K</Link></li>
        <li className={styles.item}><Link to="/topic" activeClassName={styles.active} >话题</Link></li>
        <li className={styles.item}><Link to="/article" activeClassName={styles.active} >文章</Link></li>
      </ul>
      <div className={styles.footer}>
        <Link to="/about" >关于</Link> · <Link to="/feedback" >反馈</Link>
      </div>
    </div>
  );
};

NavMenu.propTypes = {
};

export default NavMenu;
