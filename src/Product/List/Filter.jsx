import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../images/arrow.svg';

const Button = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  text-align: left;
  position: relative;
  display: flex;
  padding: 1.5rem 1.25rem 1.5rem 0;
  margin-right: 1rem;
  align-items: center;
  color: ${props => (props.open ? '#999' : '#171717')};
  white-space: nowrap;

  &::after {
    content: '';
    display: block;
    background-image: url(${arrow});
    background-size: cover;
    width: 0.75rem;
    height: 0.375rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: ${props => (props.open ? '.3' : '1')};
  }

  ${props =>
    props.isOpened &&
    css`
      color: #171717;

      &::after {
        opacity: 1;
        transform: translateY(-50%) rotate(180deg);
      }
    `};

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FilterStyled = styled.div`@media screen and (min-width: 48rem) {position: relative;}`;

const Content = styled.div`
  background-color: #f3f3f3;
  position: absolute;
  top: 100%;
  padding: 1rem 0.5rem 1.5rem;
  z-index: 20;
  line-height: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  left: -.5rem;
  right: 0;
  display: ${props => (props.active ? 'block' : 'none')};

  @media screen and (min-width: 48rem) {
    padding: 1rem 1.5rem 1.5rem;
    white-space: nowrap;
    left: ${props => (props.right ? 'auto' : '-.5rem')};
    right: ${props => (props.right ? '-.5rem' : 'auto')};
  }

  @media screen and (min-width: 62rem) {
    left: ${props => (props.right ? 'auto' : '-1.5rem')};
    right: ${props => (props.right ? '-1.5rem' : 'auto')};
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  state = {
    isOpened: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  toggle(on = true) {
    if (on === false && on === this.state.isOpened) return;
    this.setState(
      () => ({ isOpened: !this.state.isOpened }),
      () => this.props.onClick(this.state.isOpened),
    );
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.toggle(false);
    }
  }

  render() {
    return (
      <FilterStyled>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Button
            type="button"
            isOpened={this.state.isOpened}
            open={this.props.open}
            onClick={this.toggle}
          >
            {this.props.title}
          </Button>
          <Content active={this.state.isOpened} right={this.props.right}>
            {this.props.children}
          </Content>
        </div>
      </FilterStyled>
    );
  }
}

Filter.defaultProps = {
  right: false,
  open: false,
};

Filter.propTypes = {
  onClick: PropTypes.func.isRequired,
  right: PropTypes.bool,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Filter;
