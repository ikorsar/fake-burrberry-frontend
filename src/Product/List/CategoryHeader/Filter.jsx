import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

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

const Con = styled.div`position: relative;`;
const Content = styled.div`
  background-color: #f3f3f3;
  display: none;
  position: absolute;
  top: 100%;
  left: ${props => (props.right ? 'auto' : '-1.5rem')};
  right: ${props => (props.right ? '-1.5rem' : 'auto')};
  padding: 1rem 1.5rem 1.5rem;
  z-index: 20;
  white-space: normal;

  &.is-active {
    display: block;
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.show = this.show.bind(this);
    // this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ active: true });
    document.addEventListener('click', this.hide);
  }

  handleClickOutside() {
    this.setState({ active: false });
    document.addEventListener('click', this.hide);
  }

  render() {
    return (
      <Con>
        <Button
          type="button"
          className={this.state.active ? 'is-active' : null}
          open={this.props.open}
          onClick={() => {
            this.props.onClick();
            this.show();
          }}
        >
          {this.props.title}
        </Button>
        <Content className={this.state.active ? 'is-active' : null} right={this.props.right}>
          {this.props.children}
        </Content>
      </Con>
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

export default onClickOutside(Filter);
