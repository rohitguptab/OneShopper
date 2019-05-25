import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/font-awesome.css"

const Header = ({ siteTitle }) => (
  <header>
    <div class="container">
      <div className="row">
        <div className="col-sm-12">
          <nav>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact-us">Contact</a>
              </li>
            </ul>
            <div className="header-cart">
              <a href="#" className="Header__summary snipcart-summary snipcart-checkout">
                <i class="fas fa-cart-plus"></i>
                <div className="Header__summary__line">
                  <span className="snipcart-total-items" /> items -
                </div>
                <div className="Header__summary__line">
                  <span className="snipcart-total-price" />
                </div>
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
