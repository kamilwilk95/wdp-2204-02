import React from 'react';
import MenuLink from './MenuLinks';
import styles from './MenuBar.module.scss';
import { useState } from 'react';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.mobile_navigation + ' col-auto '}>
      <div className={styles.icon_menu} onClick={() => setOpen(!open)}>
        <span></span>
      </div>
      {open && (
        <div className={styles.menu_mob}>
          <MenuLink />
        </div>
      )}
    </nav>
  );
};

export default MobileNavigation;
