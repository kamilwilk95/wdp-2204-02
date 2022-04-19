import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <FontAwesomeIcon className={styles.icon} icon={faListUl} />
      <ul>
        <li className={styles.categorySelect}>
          <span>Select a category</span>
          <ul className={styles.dropdown}>
            <li><span className={styles.option}>Bed</span></li>
            <li><span className={styles.option}>Chair</span></li>
            <li><span className={styles.option}>Sofa</span></li>
            <li><span className={styles.option}>Table</span></li>
            <li><span className={styles.option}>Dining</span></li>
          </ul>
        </li>
      </ul>
      <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
