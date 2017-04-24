import React from 'react';
import styles from './Header.less';
import GlobalBoard from './GlobalBoard';
import DropMenu from './DropMenu';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.left}>
          <GlobalBoard />
        </li>
        <li style={{ float: 'right', cursor: 'pointer' }}>
          <span className={styles.mine}>
            <DropMenu />
          </span>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
