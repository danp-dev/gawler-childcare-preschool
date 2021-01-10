import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="navbar is-topbar has-background-primary">
      <div className="container">
        <div className="navbar-start">
        {siteTitle}
        </div>
      <div className="navbar-end">
        <p>2 Finch Road Gawler East</p>
        
        </div>
      </div>
    </nav>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="container">
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="menu-is-fullwidth is-uppercase is-size-5 has-text-weight-bold">
        <a className="navbar-item">
          Home
        </a>
  
        <a className="navbar-item">
          About
        </a>

        <a className="navbar-item">
          Rooms
        </a>

        <a className="navbar-item">
          Contact
        </a>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>BOOK A TOUR</strong>
              </a>

              <button className="button is-primary">
                <span className="icon">
                  <i className="fas fa-phone"></i>
                </span>
                <strong>Call Us</strong>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
          

  </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
