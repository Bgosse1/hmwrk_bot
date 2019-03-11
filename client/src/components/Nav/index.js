import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/search">
          Google Books
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/search">
              Search <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/saved">
              Saved
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
