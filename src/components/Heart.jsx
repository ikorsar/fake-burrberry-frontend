import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeartStyled = styled.svg`
  transition: all 0.15s ease-in-out;
  fill: ${props => (props.fill ? '#171717' : '#fff')};
`;

const Heart = props => (
  <HeartStyled
    width={props.width}
    height={props.height}
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
  >
    <path
      id="heart"
      stroke="#171717"
      d="m7 14l-5.802-6.251c-1.634-1.805-1.592-4.694.084-6.454
       1.571-1.647 4.063-1.738 5.718-.181 1.676-1.557 4.189-1.467 5.76.226 1.634 1.76
       1.655 4.626.042 6.409l-5.802 6.251"
      transform="translate(1 1)"
    />
  </HeartStyled>
);

Heart.defaultProps = {
  width: '16px',
  height: '15px',
  fill: '#fff',
};

Heart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

export default Heart;
