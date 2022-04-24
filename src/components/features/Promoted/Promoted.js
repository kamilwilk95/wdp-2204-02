import React from 'react';
import styles from './Promoted.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import initialState from '../../../redux/initialState';



const Promoted = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>

        <div className={clsx('col-4',  styles.leftSide)}>
          <div className={styles.heading}>
            <div className={clsx(styles.hotDeals, 'col' )}>
              <h4>HOT DEALS</h4>
            </div>
            <div className={clsx('col-4',  styles.dots)}>
              <ul>
                <li>
                  <a className={styles.active} href='#' > </a>
                </li>
                <li>
                  <a href='#' > </a>
                </li>
                <li>
                  <a href='#' > </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.photoBoxLeft}>
            <img
              className={styles.imageLeft}
              alt={'Aenean Ru Bristique'}
              src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 8.jpg`}
            />

            <Button variant='small' className={styles.shoppingBasket}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              <span> ADD TO CARD</span>
            </Button>

            <div className={clsx('row', styles.time)}>
              <div className={clsx('col', styles.timeBox)}>
                <div className={styles.timeValue}>
                  <span>25</span>
                </div>
                <div className={styles.timeUnit}>
                  <span>DAYS</span>
                </div>
              </div>
              <div className={clsx('col', styles.timeBox)}>
                <div className={styles.timeValue}>
                  <span>10</span>
                </div>
                <div className={styles.timeUnit}>
                  <span>HRS</span>
                </div>
              </div>
              <div className={clsx('col', styles.timeBox)}>
                <div className={styles.timeValue}>
                  <span>45</span>
                </div>
                <div className={styles.timeUnit}>
                  <span>MIN</span>
                </div>
              </div>
              <div className={clsx('col', styles.timeBox)}>
                <div className={styles.timeValue}>
                  <span>30</span>
                </div>
                <div className={styles.timeUnit}>
                  <span>SECS</span>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.content}>
            <h5>Aenean Ru Bristique 8</h5>
            <div className={styles.stars}>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline' className={styles.icon}>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
            <div className={styles.pricesContainer}>
              <div className={styles.oldPrice}>
                ${initialState.products[2].oldPrice}
              </div>
              <div className={styles.price}>
                <Button noHover variant='small'>
                  ${initialState.products[2].price}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx('col-8',  styles.rightSide)}>
          <div className={styles.photoBoxRight}>
            <img
              className={styles.imageRight}
              alt={'Aenean Ru Bristique'}
              src={`${process.env.PUBLIC_URL}/images/baner indoor furniture.jpg`}
            />

            <div className={styles.shadowImage}>
              <div className={styles.slogan}>
                INDOOR <span>FURNITURE</span>
              </div>

              <div className={styles.sloganSubtitle}>
                <p>SAVE UP TO 50% OF ALL FURNITURE</p>
              </div>
            </div>

            <div className={styles.shopButton}>
              <Button variant='light'>SHOP NOW</Button>
            </div>


            <div className={clsx('row', styles.arrowButtonSet)}>

              <div className={clsx('col-6', styles.longButton)}>
                <Button variant='long'>{'<'}</Button>
              </div>
              <div className={clsx('col-6', styles.longButton)}>
                <Button variant='long'>{'>'}</Button>
              </div>

            </div>
          </div>




        </div>
      </div>
    </div>
  </div>
);

export default Promoted;
