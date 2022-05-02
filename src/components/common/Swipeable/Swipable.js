import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';

const Swipable = ({ children, leftAction, rightAction }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = e => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      leftAction();
    }

    if (isRightSwipe) {
      rightAction();
    }
  };

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={styles.swipeContainer}>
      {children}
    </div>
  );
};

Swipable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipable;
