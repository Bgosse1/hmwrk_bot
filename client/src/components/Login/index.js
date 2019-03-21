import React, { Component } from "react";

class Login extends React.Component {
    render() {
      return (
        <div>
          <p>You must log in to view the page</p>
          <a
            href="http://localhost:3001/api/authenticate"
            className="btn btn-primary btn-lg active"
            role="button"
          >
            Log in
          </a>
        </div>
      );
    }
  }

  export default Login;