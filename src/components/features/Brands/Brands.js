import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './Brands.module.scss';

import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandRedux';



const Brands = () => {

  const brands = useSelector(state => getAllBrands(state));
  //console.log('brands', brands);




  const [slideIndex] = useState(0);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div>
          <div className={clsx('row', styles.brandsWrapper)}>

            <div className='col-1'>

            </div>

            <div className='col-10'>
              <div className='row'>
                {brands
                  .slice(slideIndex * 6, (slideIndex + 1) * 6)
                  .map(brand => (
                    <div className={clsx('col-2', styles.imgWrapper)} key={brand.id}>
                      <img className={styles.brandImg}
                        alt={brand.name}
                        src={brand.image}
                      />
                    </div>
                  ))}




              </div>
            </div>
          </div>

          <div className='col-1'>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Brands;
