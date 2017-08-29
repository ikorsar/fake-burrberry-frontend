import React, { Component } from 'react';
import styled from 'styled-components';

import arrow from '../images/arrow.svg';

const CountryStyled = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 600;
  text-align: left;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #999;
  display: none;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const Choosen = styled.span`
  font-size: 0.75rem;
  line-height: 1.33;
  font-weight: 600;
`;

const Arrow = styled.img`
  width: 12px;
  height: 6px;
  margin-left: 0.5rem;
`;

const Select = styled.select`
  opacity: 0;
  position: absolute;
  left: 0;
  width: 100%;
  cursor: pointer;
`;

const countries = ['United Kingdom (£)', 'Russian Federation (₽)'];

class Country extends Component {
  state = {
    value: 0,
  };

  render() {
    const handleSelect = (e) => {
      this.setState({
        value: e.target.selectedIndex,
      });
    };

    return (
      <CountryStyled>
        Shopping in:&nbsp;
        <Choosen>{countries[this.state.value]}</Choosen>
        <Arrow src={arrow} />
        <Select onChange={handleSelect}>
          {countries.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      </CountryStyled>
    );
  }
}

export default Country;
