import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <nav className="page-footer-nav">
                <h3 className="page-footer-nav-title">Customer service</h3>
                <a className="page-footer-nav-link" href="#" title="Contact Us">Contact Us</a>
                <a className="page-footer-nav-link" href="#" title="Payment">Payment</a>
                <a className="page-footer-nav-link" href="#" title="Shipping">Shipping</a>
                <a className="page-footer-nav-link" href="#" title="Returns">Returns</a>
                <a className="page-footer-nav-link" href="#" title="Faqs">Faqs</a>
                <a className="page-footer-nav-link" href="#" title="Live Chat">Live Chat</a>
                <a className="page-footer-nav-link" href="#" title="The Burberry App">The Burberry App</a>
                <a className="page-footer-nav-link" href="#" title="Store Locator">Store Locator</a>
              </nav>
            </div>
            <div className="col-md-3">
              <nav className="page-footer-nav">
                <h3 className="page-footer-nav-title">Our company</h3>
                <a className="page-footer-nav-link" href="#" title="Our History">Our History</a>
                <a className="page-footer-nav-link" href="#" title="Burberry Group Plc">Burberry Group Plc</a>
                <a className="page-footer-nav-link" href="#" title="Careers">Careers</a>
                <a className="page-footer-nav-link" href="#" title="Corporate Responsibility">Corporate Responsibility</a>
                <a className="page-footer-nav-link" href="#" title="Site Map">Site Map</a>
              </nav>
            </div>
            <div className="col-md-3">
              <nav className="page-footer-nav">
                <h3 className="page-footer-nav-title">Legal & Cookies</h3>
                <a className="page-footer-nav-link" href="#" title="Terms & Conditions">Terms & Conditions</a>
                <a className="page-footer-nav-link" href="#" title="Privacy Policy">Privacy Policy</a>
                <a className="page-footer-nav-link" href="#" title="Cookie Policy">Cookie Policy</a>
                <a className="page-footer-nav-link" href="#" title="Accessibility Statement">Accessibility Statement</a>
                <a className="page-footer-nav-link" href="#" title="Japan Only - SCTL indications">Japan Only - SCTL indications</a>
              </nav>
            </div>
          </div>
          <div className="page-footer-buttons">
            <button className="page-footer-button" type="button">Shipping country: Russian
              Federation
            </button>
            <button className="page-footer-button" type="button">Language: English</button>
          </div>
        </div>
        <h3 className="page-footer-help">Need help?</h3>
        <a className="page-footer-help-link" href="#" title="Find out more and contact us">Find out more and contact us</a>
      </footer>
    );
  }
}

export default Footer;