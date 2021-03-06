import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import Promoted from '../../features/Promoted/Promoted';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brands from '../../features/Brands/Brands';
import Gallery from '../../layout/Gallery/Gallery';


const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
