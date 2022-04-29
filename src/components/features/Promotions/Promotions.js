import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

import styles from './Promotions.module.scss';

const Promotions = () => {
  const products = useSelector(state => getAllProducts(state));

  return (
    <div className={styles.root}>
      <div className={'container'}>
        <div className={clsx('row', styles.photoBox)}>
          <div className={clsx('col-6', styles.photoBoxLeft)}>
            <img
              className={styles.imageLeft}
              alt={`${products[1].name}`}
              src={`${process.env.PUBLIC_URL}/images/products/${products[1].name}.jpg`}
            />
            <div className={styles.titleLeftBox}>
              GUEST ROOM
              <br />
              <span className={styles.leftBoxWord}>SOFA</span>
              <br />
              <span className={styles.percent}>-20%</span>
            </div>
          </div>

          <div className={clsx('col-6', styles.photoBoxRight)}>
            <div className={clsx('row', styles.photoBoxRightTop)}>
              <div className={clsx('col-4', styles.imageBox)}>
                <img
                  className={styles.image}
                  alt={`${products[0].name}`}
                  src={`${process.env.PUBLIC_URL}/images/products/${products[0].name}.jpg`}
                />
              </div>
              <div className={clsx('col-4', styles.titleRightBoxTop)}>
                <p>
                  <span className={styles.topFirstWord}>OFFICE</span> CHAIR{' '}
                  <br />
                  <span className={styles.topThirdWord}>COLLECTION</span>
                  <br />
                  <span
                    className={styles.price}
                  >{`$${products[0].price}`}</span>
                </p>
              </div>
              <div className={clsx('col-4', styles.imageBox)}>
                <img
                  className={styles.image}
                  alt={`${products[3].name}`}
                  src={`${process.env.PUBLIC_URL}/images/products/${products[3].name}.jpg`}
                />
              </div>
            </div>

            <div className={clsx('row', styles.photoBoxRightBottom)}>
              <div className={clsx('col-6', styles.imageBoxBottom)}>
                <img
                  className={styles.imageBottom}
                  alt={`${products[5].name}`}
                  src={`${process.env.PUBLIC_URL}/images/products/${products[5].name}.jpg`}
                />
              </div>
              <div className={clsx('col-6', styles.titleRightBoxBottom)}>
                <p>
                  <span className={styles.bottomFirstWord}>SPECIAL</span>{' '}
                  COLLECTION
                  <br />
                  <span className={styles.subtitle}>
                    SAVE UP 45% OF FURNITURE
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
