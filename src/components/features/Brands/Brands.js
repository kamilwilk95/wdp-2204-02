import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Brands.module.scss';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {

  const brands = useSelector(state => getAllBrands(state));

  const [slideIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={clsx('row no-gutters', styles.brandsWrapper)}>
          <div>
            <Button variant='slide' className={styles.brandButton}>
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
            <Button variant='slide' className={styles.rightButton}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
