import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

const Header = ({ siteTitle }) => {

const [ismobtrue, setmobmenu] = useState(false);



return(
  <header>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div className="container">
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="menu-is-fullwidth is-uppercase is-size-5 has-text-weight-bold">
      
      <Link className="navbar-item" to="/">Home</Link>
  
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
            <Link className="button is-primary" to="/book-a-tour/">Book A Tour</Link>

              
              <a className="button is-primary" href="tel:08 85222079">
                <span className="icon">
                  <i className="fas fa-phone"></i>
                </span>
                <strong>Call Us</strong>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
          

  </nav>

  </header>
);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
