import React from 'react';
import styles from './Header.less';
import DropMenu from './DropMenu';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <span className={styles.title}>你的兴趣能谋生吗？</span>
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
