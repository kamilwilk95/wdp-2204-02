import React from 'react';
import styles from './GallerySelect.module.scss';
import clsx from 'clsx';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { toggleCardFavorite, toggleComparing, getAllProducts } from '../../../redux/productsRedux';
import { getAllGaleryCategories } from '../../../redux/galleryRedux';

import Button from '../../common/Button/Button';
import ProductRating from '../ProductRating/ProductRating';
import Tooltip from '../Tooltip/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEye, faExchangeAlt, faShoppingBasket, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

const GallerySelect = () => {

  const dispatch = useDispatch();

  const galleryCategories = useSelector(getAllGaleryCategories);
  const allProducts = useSelector(getAllProducts);

  const [galleryState, setGalleryState] = useState({
    imageIndex: 0, // selected image
    activeCategory: galleryCategories[0],
  });

  const activeProducts = allProducts.filter(product => product.galleryTag === galleryState.activeCategory.id);
  const selectedProduct = activeProducts[galleryState.imageIndex];

  const [slideIndex, setSlideIndex] = useState(0); // row of displayed thumbnails
  const slidesCount = Math.ceil(activeProducts.length / 6);

  const handleCategoryChange = clickedCategory => {
    const newCategoryProducts = allProducts.filter(product => product.galleryTag === clickedCategory.id);
    if (newCategoryProducts.length > 0) {
      setGalleryState({
        imageIndex: 0,
        activeCategory: clickedCategory,
      });
      setSlideIndex(0);
    }
  };

  const nextSlide = e => {
    e.preventDefault();
    setSlideIndex(slideIndex + 1);

    if (slideIndex >= slidesCount - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = e => {
    e.preventDefault();
    setSlideIndex(slideIndex - 1);

    if (slideIndex <= 0) {
      setSlideIndex(slidesCount - 1);
    }
  };

  const selectProduct = index => {
    setGalleryState({
      ...galleryState,
      imageIndex: index,
    });
  };

  const favoriteClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(selectedProduct.id));
  };

  const toggleCompare = e => {
    e.preventDefault();
    dispatch(toggleComparing(selectedProduct.id));
  };

  const [fadeTransition, setFadeTransition] = useState(null);
  const [productFade, setProductFade] = useState('fade-in');
  const [categoryFade, setCategoryFade] = useState('fade-in');

  const handleFade = (setFadeStatePart, performOnFade, performOnFadeParams) => {
    const timeout = setTimeout(() => {
      performOnFade(performOnFadeParams);
      setFadeStatePart('fade-in');
      setFadeTransition(null);
    }, 500);
    clearTimeout(fadeTransition);
    setFadeStatePart('fade-out');
    setFadeTransition(timeout);
  };

  return (
    <div className={styles.galleryContainer}>

      {/* ----------- CATEGORY BUTTONS ----------- */}

      <div className={styles.headingBar}>
        <div className={'col-auto ' + styles.heading}>
          <h3>Furniture gallery</h3>
        </div>
        <div className={'col ' + styles.menu}>
          <ul>
            {galleryCategories.map(item => (
              <li key={item.id}>
                <a
                  className={clsx(item.id === galleryState.activeCategory.id && styles.active)}
                  // onClick={() => handleCategoryChange(item)}
                  onClick={() => handleFade(setCategoryFade, handleCategoryChange, item)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ----------- THE WHOLE PREVIEW SECTION - PRODUCT + SLIDER ----------- */}

      <div className={clsx(styles.wholeCategoryDisplay, styles.categoryFadeWrapper, styles[categoryFade])}>

        {/* ----------- SELECTED PRODUCT PREVIEW ----------- */}

        <div className={clsx(styles.previewContainer, styles.productFadeWrapper, styles[productFade])}>
          <div className={styles.selectedImageContainer}>
            <img
              className={styles.selectedImage}
              alt={selectedProduct.name}
              src={`${process.env.PUBLIC_URL}/images/products/${selectedProduct.name}.jpg`}
            />
          </div>
          <div className={styles.actions}>
            <div className={styles.outlines}>
              <Button variant='outline' onClick={favoriteClick} className={clsx(styles.actionButton, selectedProduct.isFavorite && styles.isFavorite)}>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                <Tooltip text='Add to favorites' />
              </Button>
              <Button variant='outline' onClick={toggleCompare} className={clsx(styles.actionButton, selectedProduct.comparing && styles.comparing)}>
                <FontAwesomeIcon icon={faExchangeAlt}>Compare</FontAwesomeIcon>
                <Tooltip text='Add to compare' />
              </Button>
              <Button variant='outline' className={clsx(styles.actionButton)}>
                <FontAwesomeIcon icon={faEye}>QuickView</FontAwesomeIcon>
                <Tooltip text='Quick view' />
              </Button>
              <Button variant='outline' className={clsx(styles.actionButton)}>
                <FontAwesomeIcon icon={faShoppingBasket}>Cart</FontAwesomeIcon>
                <Tooltip text='Add to cart' />
              </Button>
            </div>
          </div>

          <div className={styles.productDetails}>
            <div className={styles.priceCircle}>
              <p className={styles.newPrice}>${selectedProduct.price}</p>
              <p className={clsx(styles.oldPrice, !selectedProduct.oldPrice && styles.noOldPrice)}>${selectedProduct.oldPrice}</p>
            </div>
            <div className={styles.ratingBox}>
              <p className={styles.productName}>{selectedProduct.name}</p>
              <ProductRating id={selectedProduct.id} stars={selectedProduct.stars} rating={selectedProduct.rating}/>
            </div>
          </div>

        </div>

        {/* ----------- SLIDER ----------- */}

        <div className={styles.slider}>
          <Button variant='outline' className={styles.sliderButton} onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
          </Button>

          <div className={styles.sliderImages}>
            {activeProducts
              .slice(slideIndex * 6, (slideIndex + 1) * 6)
              .map(product => (
                <a
                  key={product.id}
                  className={clsx(styles.singleSliderImage, product.id === selectedProduct.id && styles.activeThumbnail)}
                  onClick={() => handleFade(setProductFade, selectProduct, activeProducts.indexOf(product))}
                >
                  <img
                    className={styles.image}
                    alt={product.name}
                    src={`${process.env.PUBLIC_URL}/images/products/${product.name}.jpg`}
                  />
                </a>
              ))}
          </div>

          <Button variant='outline' className={styles.sliderButton} onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </Button>

        </div>

      </div>

    </div>
  );
};

export default GallerySelect;
