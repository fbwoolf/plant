import React from 'react';
import PropTypes from 'prop-types';

const PlantSVG = ({ color, growth }) => {
  return (
    /* eslint-disable */
    <svg
      width="100"
      height={`${100 * growth}`}
      viewBox={`0 0 100 ${100 * growth}`}
      overflow="visible"
    >
      <rect x="-25" y="0" width="100" height={`${100 * growth}`} fill={color} />
    </svg>
    /* eslint-enable */
  );
};

PlantSVG.propTypes = {
  color: PropTypes.string.isRequired,
  growth: PropTypes.number.isRequired,
};

export default PlantSVG;
