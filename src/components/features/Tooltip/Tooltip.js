import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = ({ text }) => {
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltiptext}>{text}</p>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string,
};

export default Tooltip;
