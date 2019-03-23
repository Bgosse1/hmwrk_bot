import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        {console.log(process.env.GITHUB_AUTH_URL)}
        <p>You must log in to view the page</p>
        <a
          href={process.env.REACT_APP_AUTH}
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
