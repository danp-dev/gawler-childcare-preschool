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
    <nav className="navbar is-topbar">
      <div className="navbar-end">
        <p>2 Finch Road Gawler East</p>
      </div>
    </nav>
    <nav className="navbar">

      <div className="navbar-start">
      <div className="navbar-menu">
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

      <div className="navbar-item">
        <a className="button is-primary">Book A Tour
        </a>
      </div>
</div>
</div>
    </nav>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
