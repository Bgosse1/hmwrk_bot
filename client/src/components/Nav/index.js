import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/home">
          Bootcamp Bot
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/add">
              Add Assignment <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/assingments">
              Assignments
            </Link>
            <Link className="nav-item nav-link" to="/home">
              Link to home <span className="sr-only">(current)</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
