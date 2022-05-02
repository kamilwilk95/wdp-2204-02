import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';
import { getAllBaners } from '../../../redux/promotedBanersRedux';
import clsx from 'clsx';

import styles from './Promoted.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';


const Promoted = () => {

  const products = useSelector(state => getAllProducts(state));
  const baners = useSelector(state => getAllBaners(state));
  const [baner, setBaner] = useState(0);




  const movePrev = (event) => {
    event.preventDefault();
    const prev = baner -1;
    if(baner !== 1){
      setBaner(prev);
    }
    else if (baner === 1){
      setBaner(baners.length);
    }
  };

  const moveNext = (event) => {
    event.preventDefault();
    if(baner !== baners.length){
      setBaner(baner + 1);
    }
    else if (baner === baners.length){
      setBaner(1);
    }
  };

  return (

    <div className={styles.root}>
      <div className='container'>
        <div className='row'>

          <div className={clsx('col-4', styles.leftSide)}>
            <div className={styles.heading}>
              <div className={clsx(styles.hotDeals, 'col')}>
                <h4>HOT DEALS</h4>
              </div>
              <div className={clsx('col-4', styles.dots)}>
                <ul>
                  <li>
                    <a className={styles.active} href='#'> </a>
                  </li>
                  <li>
                    <a href='#'> </a>
                  </li>
                  <li>
                    <a href='#'> </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.wraperPhotoBoxLeft}>
              <div className={styles.photoBoxLeft}>



                <img
                  className={styles.imageLeft}
                  alt={products[7].name}
                  src={products[7].image}
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
                <h5>{products[7].name}</h5>
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
                    {products[7].oldPrice}
                  </div>
                  <div className={styles.price}>
                    <Button noHover variant='small'>
                      {products[7].price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx('col-8', styles.rightSide)}>
            <div className={styles.photoBoxRight}>

              {baners.map(baner => (
                <img className={styles.imageRight} key={baner.id} alt={baner.name} src={baner.image}/>
              ))}

              {/*<img
                className={styles.imageRight}
                alt={'sofa- Aenean Ru Bristique'}
                src={`${process.env.PUBLIC_URL}/images/baner_indoor_furniture.jpg`}
                />*/}
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
                  <Button variant='long' onClick={movePrev}>{'<'}</Button>
                </div>
                <div className={clsx('col-6', styles.longButton)}>
                  <Button variant='long' onClick={moveNext}>{'>'}</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
