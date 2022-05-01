import React from 'react';
import styles from './MenuBar.module.scss';

const MenuLinks = () => {
  return (
    <ul>
      <li>
        <a href='#' className={styles.active}>
          Home
        </a>
      </li>
      <li>
        <a href='#'>Furniture</a>
      </li>
      <li>
        <a href='#'>Chair</a>
      </li>
      <li>
        <a href='#'>Table</a>
      </li>
      <li>
        <a href='#'>Sofa</a>
      </li>
      <li>
        <a href='#'>Bedroom</a>
      </li>
      <li>
        <a href='#'>Blog</a>
      </li>
    </ul>
  );
};

export default MenuLinks;
