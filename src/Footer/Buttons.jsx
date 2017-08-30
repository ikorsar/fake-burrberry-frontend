import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Buttons = styled.div`@media screen and (min-width: 48rem) {display: flex;}`;

const ButtonSelectStyled = styled.div`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 1rem;
  padding: 0;
  text-decoration: none;
  color: #999;
  position: relative;

  @media screen and (min-width: 48rem) {
    margin: 0 1.5rem 0 0;
  }

  @media screen and (min-width: 62rem) {
    margin-right: 3rem;
  }
`;

const Choosen = styled.span`color: #171717;`;

const Select = styled.select`
  opacity: 0;
  position: absolute;
  left: 0;
  width: 100%;
  cursor: pointer;
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
        {this.props.title}&nbsp;
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
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default () => (
  <Buttons>
    <ButtonSelect title="Shipping country:" options={['United Kingdom', 'Russian Federation']} />
    <ButtonSelect title="Language:" options={['English', 'Russian']} />
  </Buttons>
);
