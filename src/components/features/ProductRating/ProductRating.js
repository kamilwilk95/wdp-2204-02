import React, { useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './ProductRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';

import { setRating } from '../../../redux/productsRedux';


const ProductRating = ({id, stars, rating}) => {
    
  const [countStars, setCountStars] = useState(rating);
  const [starRating, setStarRating] = useState(0);
  
  const dispatch = useDispatch();

  const handleRating = (e) => {
    e.preventDefault();
    setCountStars(starRating);
    dispatch(setRating({id, starRating}));
  };
  
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.stars, !rating && styles.active)}>
        {[1, 2, 3, 4, 5].map(i => (
          <a key={i} href='#'>
            {i <= stars ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        ))}
      </div>
      <div className={clsx(styles.rate, rating && styles.active)}>
        {[1, 2, 3, 4, 5].map(i => (
          <a 
            href='#'
            key={i}
            onClick={handleRating}
            onMouseEnter={() => setStarRating(i)}
            onMouseLeave={() => setStarRating(countStars)}
          >
            {i <= (starRating || rating) ? (
              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
            )}
          </a>
        )
        )}
        
      </div>
    </div>
    
  );
};

ProductRating.propTypes = {
  id: PropTypes.string,
  stars: PropTypes.number,
  rating: PropTypes.number,
};

export default ProductRating;