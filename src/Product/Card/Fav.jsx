import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  position: absolute;
  right: 0;
  cursor: pointer;
  outline: none;
`;

const Svg = styled.svg`
  fill: #fff;
  transition: all .15s ease-in-out;

  .is-active & {
    fill: #171717;
  }
`;

class ButtonFav extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <ButtonStyled
        className={this.state.isActive ? 'is-active' : null}
        onClick={this.eventHandler}
      >
        <Svg width="16px" height="15px" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
          <path
            id="heart"
            stroke="#171717"
            d="m7 14l-5.802-6.251c-1.634-1.805-1.592-4.694.084-6.454
             1.571-1.647 4.063-1.738 5.718-.181 1.676-1.557 4.189-1.467 5.76.226 1.634 1.76
             1.655 4.626.042 6.409l-5.802 6.251"
            transform="translate(1 1)"
          />
        </Svg>
      </ButtonStyled>
    );
  }
}

export default ButtonFav;
