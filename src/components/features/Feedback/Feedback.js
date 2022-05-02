import React from 'react';
import styles from './Feedback.module.scss';

import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedbackRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedback = useSelector(getAllFeedback);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-md-auto col-sm-12 col-12 ' + styles.heading}>
              <h3>CLIENT FEEDBACK</h3>
            </div>
            <div className={'col-md-auto col-sm-auto col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active} href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faQuoteRight}
          ></FontAwesomeIcon>
          <div className={styles.comment}>{feedback[0].comment}</div>
          <div className={styles.signature}>
            <div className={styles.photoBox}>
              <img
                className={styles.photo}
                alt={feedback[0].name}
                src={`${process.env.PUBLIC_URL}${feedback[0].photo}`}
              />
            </div>
            <div className={styles.description}>
              <span>{feedback[0].name}</span>
              <br />
              {feedback[0].description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
