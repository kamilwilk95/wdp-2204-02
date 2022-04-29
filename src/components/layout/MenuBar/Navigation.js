import React from 'react';
import MenuLink from './MenuLinks';
import styles from './MenuBar.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation + ' col-auto ' + styles.menu}>
      <MenuLink />
    </div>
  );
};

export default Navigation;
