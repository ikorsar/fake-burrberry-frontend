import React from 'react';
import PropTypes from 'prop-types';

const HeartI = props =>
  (<svg
    className="umbrella"
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 14 14"
    aria-labelledby="title"
  >
    <title id="title">Heart</title>
    <g stroke="#171717">
      <path
        fill={props.fill}
        /* eslint-disable */
        d="m7 13.265l5.431-5.851c1.438-1.59 1.421-4.164-.038-5.734-1.38-1.487-3.577-1.571-5.05-.199l-.343.319-.341-.321c-1.448-1.364-3.627-1.292-5.01.161-1.496 1.572-1.531 4.165-.079 5.77l5.435 5.856"
        /* eslint-enable */
      />
    </g>
  </svg>);

HeartI.propTypes = {
  fill: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default HeartI;
