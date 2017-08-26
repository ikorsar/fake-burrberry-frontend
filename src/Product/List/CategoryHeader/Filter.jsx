import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../../images/arrow.svg';

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75rem;
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

  &::after {
    content: '';
    display: block;
    background-image: url(${arrow});
    background-size: cover;
    width: .75rem;
    height: .375rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: ${props => (props.open ? '.3' : '1')};
  }

  &.is-active {
    color: #171717;

    &::after {
      opacity: 1;
      transform: translateY(-50%) rotate(180deg);
    }
  }

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const FilterStyled = styled.div`position: relative;`;

const Content = styled.div`
  background-color: #f3f3f3;
  display: none;
  position: absolute;
  top: 100%;
  left: ${props => (props.right ? 'auto' : '-1.5rem')};
  right: ${props => (props.right ? '-1.5rem' : 'auto')};
  padding: 1rem 1.5rem 1.5rem;
  z-index: 20;
  line-height: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  white-space: nowrap;

  &.is-active {
    display: block;
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.hide = this.hide.bind(this);
  }

  state = {
    active: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.hide, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hide, true);
  }

  toggle(on = true) {
    if (on === false && on === this.state.active) return;
    this.setState(
      () => ({ active: !this.state.active }),
      () => this.props.onClick(this.state.active),
    );
  }

  hide(e) {
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
            className={this.state.active ? 'is-active' : null}
            open={this.props.open}
            onClick={this.toggle}
          >
            {this.props.title}
          </Button>
          <Content
            className={this.state.active ? 'is-active' : null}
            right={this.props.right}
            innerRef={(node) => {
              this.node = node;
            }}
          >
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
