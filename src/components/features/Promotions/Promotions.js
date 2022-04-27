import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Promotions.module.scss';

const Promotions = () => {
  const products = useSelector(state => getAll(state));

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
            <div className={styles.title_left_box}>
              GUEST ROOM
              <br />
              <span className={styles.title_left_box_3rd_word}>SOFA</span>
              <br />
              <span className={styles.title_left_box_percent}>-20%</span>
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
              <div className={clsx('col-4', styles.title_right_box_top)}>
                <p>
                  <span className={styles.title_box_top_1st_word}>OFFICE</span> CHAIR{' '}
                  <br />
                  <span className={styles.title_box_top_3rd_word}>COLLECTION</span>
                  <br />
                  <span
                    className={styles.title_box_top_price}
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
              <div className={clsx('col-6', styles.title_right_box_bottom)}>
                <p>
                  <span className={styles.title_box_bottom_1st_word}>SPECIAL</span>{' '}
                  COLLECTION
                  <br />
                  <span className={styles.bottom_subtitle}>
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
