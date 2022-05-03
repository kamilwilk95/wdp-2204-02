import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBaners } from '../../../redux/promotedBanersRedux';
import { getPromoted, toggleCardFavorite, toggleComparing } from '../../../redux/productsRedux';
import ProductRating from '../ProductRating/ProductRating';
import Button from '../../common/Button/Button';
import clsx from 'clsx';

import styles from './Promoted.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';


const Promoted = () => {

  const dispatch = useDispatch();

  const productsPromoted = useSelector(state => getPromoted(state));
  const [indexProm, setIndexProm] = useState(0);
  const selectedProduct = productsPromoted[indexProm];

  const baners = useSelector(state => getAllBaners(state));
  const [baner, setBaner] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndexProm((prevIndex) =>
          prevIndex === productsPromoted.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );
    return () => {
      resetTimeout();
    };
  });

  const favoriteClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(selectedProduct.id));
  };
  const toggleCompare = e => {
    e.preventDefault();
    dispatch(toggleComparing(selectedProduct.id));
  };

  const movePrev = (event) => {
    event.preventDefault();
    setBaner(baner - 1);
    if (baner <= 0) {
      setBaner(baners.length - 1);
    }
  };

  const moveNext = (event) => {
    event.preventDefault();
    setBaner(baner + 1);
    if (baner >= (baners.length - 1)) {
      setBaner(0);
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
              <div className={clsx('col-4', styles.slideshowDots)}>
                {productsPromoted.map((_, idx) => (
                  <div
                    key={idx}
                    className={clsx(styles.slideshowDot, indexProm === idx && styles.active)}
                    onClick={() => {
                      setIndexProm(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.wraperPhotoBoxLeft}>
              <div className={styles.photoBoxLeft}>
                <div className={styles.photoBox}>
                  {productsPromoted
                    .slice(indexProm, (indexProm + 1))
                    .map(productProm => (
                      <div key={productProm.id} className={clsx(styles.imageLeft, styles.fadeIn)}>
                        <img alt={productProm.name} src={productProm.image} />
                      </div>
                    ))}
                </div>
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
                <h5>
                  {selectedProduct.name}
                </h5>
                <div>
                  <ProductRating id={selectedProduct.id} stars={selectedProduct.stars} rating={selectedProduct.rating} />
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button variant='outline' className={styles.icon}>
                    <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' onClick={favoriteClick} className={clsx(styles.icon, selectedProduct.isFavorite && styles.isFavorite)}>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button variant='outline' onClick={toggleCompare} className={clsx(styles.icon, selectedProduct.comparing && styles.comparing)}>
                    <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                  </Button>
                </div>
                <div className={styles.pricesContainer}>
                  <div className={styles.oldPrice}>
                    {selectedProduct.oldPrice}
                  </div>
                  <div className={styles.price}>
                    <Button noHover variant='small'>
                      {selectedProduct.price}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx('col-8', styles.rightSide)}>
            <div className={styles.photoBoxRight}>
              <div className={styles.photoBox}>
                {baners
                  .slice(baner, (baner + 1))
                  .map(baner => (
                    <div key={baner.id} className={clsx(styles.imageRight, styles.fadeIn)}>
                      <img alt={baner.name} src={baner.image} />
                    </div>
                  ))}
              </div>
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
