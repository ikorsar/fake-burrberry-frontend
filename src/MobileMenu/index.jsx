import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Nav from './Nav';
import Submenu from './Submenu';

const Sidebar = styled.aside`
  width: 274px;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 100;
  box-shadow: 0 0 2px #999;
  overflow-y: scroll;
  transition: transform 0.2s ease-in-out;
  transform: ${props => (props.isOpened ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default class MobileMenu extends Component {
  state = {
    submenuOpen: false,
  };

  toggleSubmenu = () => {
    this.setState({
      submenuOpen: !this.state.submenuOpen,
    });
  };

  render() {
    return (
      <Sidebar isOpened={this.props.isOpened}>
        <Nav toggleSubmenu={this.toggleSubmenu} submenuOpen={this.state.submenuOpen} />
        <Submenu toggleSubmenu={this.toggleSubmenu} submenuOpen={this.state.submenuOpen} />
      </Sidebar>
    );
  }
}

MobileMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};
