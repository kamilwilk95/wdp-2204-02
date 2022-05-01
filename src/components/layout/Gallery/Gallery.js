import React from 'react';
import styles from './Gallery.module.scss';

import GallerySelect from '../../features/GallerySelect/GallerySelect';
import GalleryAdvert from '../../features/GalleryAdvert/GalleryAdvert';

const Gallery = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.gallery}>

          <GallerySelect />
          <GalleryAdvert />

        </div>
      </div>
    </div>
  );
};

export default Gallery;
