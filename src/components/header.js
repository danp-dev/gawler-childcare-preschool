import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import logo from "../images/Gawler-Childcare-Preschool-Logo.svg"

const Header = ({ siteTitle }) => {

const [ismobtrue, setmobmenu] = useState(false);



return(
  <header>
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div className="container">
  
    
    <div className="navbar-brand">
      <div className="navbar-item">
    <Link to="/"> <img src={logo}/></Link> 
    </div>
    
    <a role="button" class={ismobtrue ? 'navbar-burger is-active' : 'navbar-burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setmobmenu(!ismobtrue)}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
    
    
    <div id="navbarBasicExample" className={ismobtrue ? 'navbar-menu is-active' : 'navbar-menu'}>
    <div className="navbar-start">
      
      <Link className="navbar-item" to="/about/">About</Link>

      <Link className="navbar-item" to="/rooms/">Rooms</Link>

      <Link className="navbar-item" to="/">Contact</Link>
  </div>
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
