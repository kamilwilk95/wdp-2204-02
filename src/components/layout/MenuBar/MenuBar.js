import React from 'react';
import PropTypes from 'prop-types';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center  flex-wrap-reverse '>
        <div className={'col ' + styles.search_wrapper}>
          <ProductSearch />
        </div>
        <Navigation className='col-auto ' />
        <MobileNavigation className='col-auto flex-nowrap' />
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
