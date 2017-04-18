import { Button } from 'antd';
import React from 'react';
import styles from './Header.less';

const Header = () => {
  return (
    <div className={styles.test}>
      Example
      <Button type="primary">Primary</Button>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
