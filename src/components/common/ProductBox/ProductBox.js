import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as /*farStar,*/ faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, toggleComparing } from '../../../redux/productsRedux';
import ProductRating from '../../features/ProductRating/ProductRating';


const ProductBox = ({ id, name, price, promo, stars, oldPrice, isFavorite, comparing, rating }) => {

  const dispatch = useDispatch();

  const favoriteClick = (event) => {
    event.preventDefault();
    dispatch(toggleCardFavorite(id));
  };

  const toggleCompare = e => {
    e.preventDefault();
    dispatch(toggleComparing(id));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${name}.jpg`}
        />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <ProductRating id={id} stars={stars} rating={rating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' onClick={favoriteClick} className={clsx(styles.buttonFavorite, isFavorite && styles.isFavorite)}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' onClick={toggleCompare} className={clsx(styles.buttonCompare, comparing && styles.comparing)}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.pricesContainer}>
          <div className={clsx(styles.oldPrice, !oldPrice && styles.noOldPrice)}>
            ${oldPrice}
          </div>
          <div className={styles.price}>
            <Button noHover variant='small'>
              ${price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
  comparing: PropTypes.bool,
  isFavorite: PropTypes.bool,
  isComparison: PropTypes.bool,
  rating: PropTypes.number,
};

export default ProductBox;
