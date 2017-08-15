import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  border-top: 1px solid #c6c6c6;

  @media screen and (min-width: 48rem) {
    border-top: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-flow: column;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  position: relative;
  display: block;
  padding: 2rem .5rem;
  text-align: left;
  text-transform: uppercase;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 1rem;
  }

  &:after {
    position: absolute;
    top: 50%;
    right: .5rem;
    width: 0;
    height: 0;
    content: "";
    transform: ${props => (props.active ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)')};
    border-width: 10px 5px 0;
    border-style: solid;
    border-color: #171717 transparent transparent;

    @media screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  padding: 0 0 2rem;

  @media screen and (min-width: 48rem) {
    display: block;
    padding: 0 0 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    padding: 0;
  }
`;

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active,
    }));
  }

  render() {
    return (
      <Container>
        <div className="container">
          <Buttons>
            <Button type="button" active={this.state.active} onClick={this.handleClick}>
              {this.props.title}
            </Button>
          </Buttons>
        </div>
        <Content active={this.state.active}>
          {this.props.children}
        </Content>
      </Container>
    );
  }
}

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
