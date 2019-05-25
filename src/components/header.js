import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"
import "bootstrap/dist/css/bootstrap.css"
import "../css/style.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <nav>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">Contact</a>
              </li>
            </ul>
            <div className="header-cart">
              <a href="#" className="Header__summary snipcart-summary snipcart-checkout">
                <i className="fas fa-cart-plus"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>

  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
