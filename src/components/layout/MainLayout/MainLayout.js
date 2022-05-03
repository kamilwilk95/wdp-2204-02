import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Feedback from '../../features/Feedback/Feedback';
import Feedback from '../../features/Feedback/FeedbackContainer';
import CompareContainer from '../../features/CompareContainer/CompareContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Feedback />
    <Footer />
    <CompareContainer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
