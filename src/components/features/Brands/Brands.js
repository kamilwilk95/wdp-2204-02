import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Brands.module.scss';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {

  const brands = useSelector(state => getAllBrands(state));

  const [slideIndex, setSlideIndex] = useState(0);

  const movePrev = (event) => {
    event.preventDefault();
    const prev = slideIndex -1;
    if (prev<0) {
      setSlideIndex((Math.ceil(brands.length/6)) -1);
    } else {
      setSlideIndex(prev);
    }
  };

  const moveNext = (event) => {
    event.preventDefault();
    setSlideIndex((slideIndex + 1) % Math.ceil(brands.length/6));
  };

  useEffect(() => {
    const lastIndex = (Math.ceil(brands.length/6)) -1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex){
      setSlideIndex(0);
    }
  }, [slideIndex, brands]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [slideIndex]);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('row no-gutters', styles.brandsWrapper)}>
          <div>
            <Button variant='slide' className={styles.brandButton} onClick={movePrev}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <div className={clsx('row', styles.imgWrapper)}>
              {brands
                .slice(slideIndex * 6, (slideIndex + 1) * 6)
                .map(brand => (
                  <div className={styles.imgBox} key={brand.id}>
                    <img className={styles.brandImg} alt={brand.name} src={brand.image}/>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <Button variant='slide' className={styles.rightButton} onClick={moveNext}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
