import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonSelectStyled = styled.div`
  margin: 0 0 1rem;
  cursor: pointer;
  text-align: center;
  text-align-last: center;
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  background-color: #fff;
  color: #171717;
  border-color: #171717;
  display: flex;
  flex-flow: column;
  position: relative;
`;

const Choosen = styled.span`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75em;
  font-weight: 400;
  line-height: 1rem;
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  text-align: center;
`;

const Select = styled.select`
  padding: 1rem;
  font-size: 0.75em;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  opacity: 0;
`;

class ButtonSelect extends Component {
  state = {
    value: 0,
  };

  handleSelect = (e) => {
    this.setState({
      value: e.target.selectedIndex,
    });
  };

  render() {
    return (
      <ButtonSelectStyled>
        <Choosen>{this.props.options[this.state.value]}</Choosen>
        <Select onChange={this.handleSelect}>
          {this.props.options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      </ButtonSelectStyled>
    );
  }
}

ButtonSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonSelect;
