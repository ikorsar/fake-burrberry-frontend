import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  padding: 0;
  transition: border-color .25s ease-in-out;
  background-color: ${props => props.color};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.active ? '#232122' : 'transparent')};
  border-radius: 50%;
  cursor: ${props => (props.active ? 'default' : 'pointer')};
`;

class ButtonColor extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, props) => ({
      active: !state.active,
    }));
  }

  render() {
    return (
      <Button color={this.props.color} active={this.state.active} onClick={this.handleClick}>
        {this.props.label} colour
      </Button>
    );
  }
}

export default ButtonColor;
