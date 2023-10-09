import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = (props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

ScrollToTop.propTypes = {
  props: PropTypes.any,
  children: PropTypes.any,
};

export default ScrollToTop;
