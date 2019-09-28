import React from 'react';
import PropTypes from 'prop-types';

const PlantSVG = ({ height }) => {
  return (
    /* eslint-disable */
    <svg width="100" height="100" viewBox="0 0 100 100" overflow="visible">
      <rect x="-25" y="0" width="100%" height="100%" fill="green" />
    </svg>
    /* eslint-enable */
  );
};

PlantSVG.propTypes = {
  height: PropTypes.number,
};

export default PlantSVG;
