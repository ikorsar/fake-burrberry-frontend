import React, { Component } from 'react';
import styled from 'styled-components';

const ColorsStyled = styled.section`
  margin: 0 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    margin: 0 0 2rem;
  }

  @media screen and (min-width: 62rem) {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
    display: flex;
    flex-flow: column;
  }
`;

const Container = styled.div`
  display: flex;

  @media screen and (min-width: 62rem) {
    padding-top: 1rem;
  }
`;

const Choosen = styled.p`
  font-family: Raleway;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;
  padding: 0;
  text-align: left;
  margin: 0 0 1rem;

  @media screen and (min-width: 62rem) {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  font-size: 0;
  display: block;
  width: 40px;
  height: 40px;
  margin-right: 1rem;
  padding: 0;
  transition: border-color .25s ease-in-out;
  background-color: ${props => props.hex};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;

  &.is-active {
    border-color: #232122;
    cursor: default;
  }
`;

class Colors extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    colors: [{ name: 'Honey', hex: '#cfa880' }, { name: 'Black', hex: '#272727' }],
    selectedColor: 'Honey',
  };

  handleClick(e) {
    this.setState({ selectedColor: e.target.name });
  }

  render() {
    const selectedColor = this.state.selectedColor;

    const colors = this.state.colors.map((color, key) => {
      const active = this.state.selectedColor === color.name;

      return (
        <Button
          key={key.toString()}
          type="button"
          onClick={this.handleClick}
          className={active ? 'is-active' : null}
          name={color.name}
          hex={color.hex}
        >
          {color.name}
        </Button>
      );
    });

    return (
      <ColorsStyled>
        <Choosen>
          Colour: <strong>{selectedColor}</strong>
        </Choosen>
        <Container>
          {colors}
        </Container>
      </ColorsStyled>
    );
  }
}

export default Colors;
