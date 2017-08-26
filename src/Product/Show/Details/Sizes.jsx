import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../../components/Buttons/Button';
import { ButtonText } from '../../../components/Buttons/ButtonText';

const SizesStyled = styled.div`
  display: flex;
  flex-flow: column;
`;

const Header = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  order: 2;

  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 62rem) {
    display: flex;
    order: 1;
  }
`;

const Content = styled.div`
  display: none;

  button {
    margin-right: .5rem;
  }

  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 62rem) {
    display: flex;
    order: 2;
  }
`;

const Size = styled.p`
  font-family: Raleway;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  text-align: left;
  margin: 0 0 1rem;
  display: none;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
    display: block;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-flow: column;
  order: 1;

  @media screen and (min-width: 62rem) {
    order: 3;
  }
`;

const ButtonSize = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75em;
  line-height: .875rem;
  margin: 0 0 1rem;
  padding: .5rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  background-color: transparent;
  color: #171717;
  border-color: #171717;

  &.is-active {
    font-weight: bold;
  }
`;

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    sizes: ['S', 'M', 'L', 'XL'],
    selectedSize: 'XL',
  };

  handleClick(e) {
    this.setState({ selectedSize: e.target.value });
  }

  render() {
    const selectedSize = this.state.selectedSize;

    const buttons = this.state.sizes.map((size, key) => {
      const active = this.state.selectedSize === size;

      return (
        <ButtonSize
          key={key.toString()}
          small
          type="button"
          onClick={this.handleClick}
          className={active ? 'is-active' : null}
          value={size}
        >
          {size}
        </ButtonSize>
      );
    });

    return (
      <SizesStyled>
        <Header>
          <Size>
            Size: <strong>{selectedSize}</strong>
          </Size>
          <ButtonText type="button">Need size help?</ButtonText>
        </Header>
        <Content>
          {buttons}
        </Content>

        <Footer>
          <Button type="button" label="Find in store" />
        </Footer>
      </SizesStyled>
    );
  }
}

export default Sizes;
