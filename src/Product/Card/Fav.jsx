import React, { Component } from 'react';
import styled from 'styled-components';

import Heart from './Heart';

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

class ButtonFav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isActive: false,
  };

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    return (
      <ButtonStyled onClick={this.handleClick}>
        <Heart active={this.state.isActive} />
      </ButtonStyled>
    );
  }
}

export default ButtonFav;
