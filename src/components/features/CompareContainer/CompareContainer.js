import React from 'react';
import styles from './CompareContainer.module.scss';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/productsRedux';

import CompareItem from '../CompareItem/CompareItem';
import Button from '../../common/Button/Button';

const CompareContainer = () => {

  const comparedProducts = useSelector(getComparedProducts);

  return (
    <div className={clsx(styles.compareSticky, comparedProducts.length===0 && styles.invisibile)}>
      <div className={styles.compareBox}>
        {comparedProducts.map(product =>
          <CompareItem key={product.id} id={product.id} name={product.name} />
        )}
      </div>
      <Button variant='small' className={clsx(styles.compareButton, comparedProducts.length<2 && styles.hidden)}>Compare</Button>
    </div>
  );
};

export default CompareContainer;
