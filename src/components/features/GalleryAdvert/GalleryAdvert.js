import React from 'react';
import styles from './GalleryAdvert.module.scss';
import clsx from 'clsx';
import Button from '../../common/Button/Button';

const GalleryAdvert = () => {
  return (
    <div className={styles.ad}>
      <div className={styles.adContentContainer}>
        <p className={clsx(styles.adText, styles.textOne)}>FROM <span className={clsx(styles.adText, styles.textTwo)}>$50.80</span></p>
        <p className={clsx(styles.adText, styles.textThree)}>Bedroom Bed</p>
        <Button variant='small' className={styles.adButton}>SHOP NOW</Button>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt=''
          src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 6.jpg`}
        />
      </div>
    </div>
  );
};

export default GalleryAdvert;
