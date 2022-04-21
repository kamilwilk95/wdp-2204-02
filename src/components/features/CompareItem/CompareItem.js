import PropTypes from 'prop-types';
import React from 'react';
import styles from './CompareItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import { toggleComparing } from '../../../redux/productsRedux';

const CompareItem = props => {

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleComparing(props.id));
  };

  return (
    <div className={styles.comparedItem}>
      <div className={styles.overlay}>
        <button className={styles.removeButton} onClick={handleClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <img
        className={styles.imgPreview}
        alt={props.name}
        src={`${process.env.PUBLIC_URL}/images/products/${props.name}.jpg`}
      />
    </div>
  );
};

CompareItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default CompareItem;
