import React, { useState } from 'react';
import styles from './Brands.module.scss';


import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandRedux';



const Brands = () => {

  const brands = useSelector(state => getAllBrands(state));
  console.log('brands', brands);

  

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>

          <div className='col-1'>
Hello
          </div>

          <div className='col-10'>
            <div className='row'>




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
