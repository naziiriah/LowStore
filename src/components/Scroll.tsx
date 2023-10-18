/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ScrollToTop = (props: { children: any }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{props.children}</>;
};

ScrollToTop.propTypes = {
  props: PropTypes.any,
  children: PropTypes.any,
};

export default ScrollToTop;
