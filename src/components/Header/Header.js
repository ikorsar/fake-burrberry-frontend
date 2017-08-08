import React, {Component} from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <a className="page-header-link" href="/" title="Burberry">
          <img className="page-header-logo" src={logo} alt="Burberry Logo"/>
        </a>
      </header>
    );
  }
}

export default Header;
