import React from 'react';
import PropTypes from 'prop-types';

const PlantSVG = ({ isSick, growth }) => {
  return (
    /* eslint-disable */
    <svg
      width="100"
      height={`${100 * growth}`}
      viewBox={`0 0 100 ${100 * growth}`}
      overflow="visible"
    >
      <rect
        x="-25"
        y="0"
        width="100"
        height={`${100 * growth}`}
        fill={!isSick ? 'green' : 'red'}
      />
    </svg>
    /* eslint-enable */
  );
};

PlantSVG.propTypes = {
  isSick: PropTypes.bool.isRequired,
  growth: PropTypes.number.isRequired,
};

export default PlantSVG;
