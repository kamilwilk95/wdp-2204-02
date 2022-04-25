import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row '>
        <div className='col-lg-3 col-6'>
          <FeatureBox icon={faTruck} active>
            <h5 className={styles.title}>Free shipping</h5>
            <p className={styles.subtitle}>All orders</p>
          </FeatureBox>
        </div>
        <div className='col-lg-3 col-6'>
          <FeatureBox icon={faHeadphones}>
            <h5 className={styles.title}>24/7 customer</h5>
            <p className={styles.subtitle}>support</p>
          </FeatureBox>
        </div>
        <div className='col-lg-3 col-6'>
          <FeatureBox icon={faReplyAll}>
            <h5 className={styles.title}>Money back</h5>
            <p className={styles.subtitle}>guarantee</p>
          </FeatureBox>
        </div>
        <div className='col-lg-3 col-6'>
          <FeatureBox icon={faBullhorn}>
            <h5 className={styles.title}>Member discount</h5>
            <p className={styles.subtitle}>First order</p>
          </FeatureBox>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
