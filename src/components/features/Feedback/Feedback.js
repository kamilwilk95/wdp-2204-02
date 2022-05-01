import React from 'react';
import PropTypes from 'prop-types';

import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipable from '../../common/Swipeable/Swipable';

class Feedback extends React.Component {
  state = {
    activePage: 1,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { feedback } = this.props;
    const { activePage } = this.state;

    const singleFeedback = feedback.find(item => item.id === activePage);
    const pagesCount = feedback.length;

    const dots = [];
    for (let i = 1; i < pagesCount + 1; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.setState({ activePage: activePage + 1 });

      if (activePage >= pagesCount) {
        this.setState({ activePage: activePage + 0 });
      }
    };

    const rightAction = () => {
      this.setState({ activePage: activePage - 1 });

      if (activePage === 1) {
        this.setState({ activePage: activePage + 0 });
      }
    };

    return (
      <Swipable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-md-auto col-sm-12 col-12 ' + styles.heading}>
                  <h3>CLIENT FEEDBACK</h3>
                </div>
                <div className={'col-md-auto col-sm-auto col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faQuoteRight}
              ></FontAwesomeIcon>
              <div className={styles.comment}>{singleFeedback.comment}</div>
              <div className={styles.signature}>
                <div className={styles.photoBox}>
                  <img
                    className={styles.photo}
                    alt={singleFeedback.name}
                    src={`${process.env.PUBLIC_URL}${singleFeedback.photo}`}
                  />
                </div>
                <div className={styles.description}>
                  <span>{singleFeedback.name}</span>
                  <br />
                  {singleFeedback.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swipable>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      comment: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedback: [],
};

export default Feedback;
