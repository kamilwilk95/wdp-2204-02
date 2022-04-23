import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/galleryRedux';

import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faEye,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';


const Gallery = () => {

  const galleryCategories = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.gallery}>

          <div className={styles.galleryContainer}>

            <div className={styles.headingBar}>
              <div className={'col-auto ' + styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {galleryCategories.map(item => (
                    <li key={item.id}>
                      <a>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.previewContainer}>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline' className={clsx(styles.actionButton, styles.tooltip, styles.buttonFavorite)}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    <p className={styles.tooltiptext}>Add to favorites</p>
                  </Button>
                  <Button variant='outline' className={clsx(styles.actionButton, styles.tooltip, styles.buttonCompare)}>
                    <FontAwesomeIcon icon={faExchangeAlt}>Compare</FontAwesomeIcon>
                    <p className={styles.tooltiptext}>Add to compare</p>
                  </Button>
                  <Button variant='outline' className={clsx(styles.actionButton, styles.tooltip, styles.buttonQuickView)}>
                    <FontAwesomeIcon icon={faEye}>QuickView</FontAwesomeIcon>
                    <p className={styles.tooltiptext}>Quick view</p>
                  </Button>
                  <Button variant='outline' className={clsx(styles.actionButton, styles.tooltip, styles.buttonCart)}>
                    <FontAwesomeIcon icon={faShoppingBasket}>Cart</FontAwesomeIcon>
                    <p className={styles.tooltiptext}>Add to cart</p>
                  </Button>
                </div>
              </div>

              <div className={styles.productDetails}>
                <div className={styles.priceCircle}>
                  <p className={styles.newPrice}>$120.00</p>
                  <p className={styles.oldPrice}>$160.00</p>
                </div>
                <div className={styles.ratingBox}>
                  <p className={styles.productName}>Nazwa produktu</p>
                  <p className={styles.stars}>GWIAZDKI</p>
                </div>
              </div>

            </div>

            <div className={styles.carousel}>

            </div>
          </div>


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
        </div>
      </div>
    </div>
  );
};

export default Gallery;
