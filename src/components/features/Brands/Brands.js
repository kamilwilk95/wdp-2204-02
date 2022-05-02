import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Brands.module.scss';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandRedux';
import Swipable from '../../common/Swipeable/Swipable';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {

  const brands = useSelector(state => getAllBrands(state));
  const [slideIndex, setSlideIndex] = useState(0);
  let newwidth = 0;
  const width = window.innerWidth;

  if (width >= 1000 && width < 1200) {
    newwidth = 4;
  } else if (width >= 750 && width < 1000) {
    newwidth = 3;
  } else if (width >= 400 && width < 750) {
    newwidth = 2;
  } else if (width >= 0 && width < 400) {
    newwidth = 1;
  } else {
    newwidth = 6;
  }

  const right = () => {
    const prev = slideIndex -1;
    if (prev<0) {
      setSlideIndex((Math.ceil(brands.length/newwidth)) -1);
    } else {
      setSlideIndex(prev);
    }
  };
  const movePrev = (event) => {
    event.preventDefault();
    right();
  };

  const left = () => {
    setSlideIndex((slideIndex + 1) % Math.ceil(brands.length/newwidth));
  };

  const moveNext = (event) => {
    event.preventDefault();
    left();
  };

  useEffect(() => {
    const lastIndex = (Math.ceil(brands.length/newwidth)) -1;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex){
      setSlideIndex(0);
    }
  }, [slideIndex, brands, newwidth]);

  useEffect(() => {
    let slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 5000);
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
          <Swipable leftAction={right} rightAction={left}>
            <div className={clsx('row', styles.imgWrapper)}>
              {brands
                .slice(slideIndex * newwidth, (slideIndex + 1) * newwidth)
                .map(brand => (
                  <div className={clsx(styles.imgBox)} key={brand.id}>
                    <img className={styles.brandImg} alt={brand.name} src={brand.image}/>
                  </div>
                ))}
            </div>
          </Swipable>
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
