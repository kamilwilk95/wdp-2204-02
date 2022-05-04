import React from 'react';
import PropTypes from 'prop-types';
import { windowResize } from '../../../redux/deviceRedux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import Feedback from '../../features/Feedback/Feedback';
import Feedback from '../../features/Feedback/FeedbackContainer';
import CompareContainer from '../../features/CompareContainer/CompareContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const MainLayout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    sizeChange();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [sizeChange, width]);

  const isMobile = width >= 320 && width <= 767;
  const isTablet = width >= 768 && width <= 1024;
  const isDesktop = !isMobile && !isTablet;

  const dispatch = useDispatch();

  const sizeChange = e => {
    dispatch(windowResize({ isMobile, isTablet, isDesktop }));
  };

  return (
    <div>
      <Header />
      {children}
      <Footer />
      <CompareContainer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
