import React, { Component } from "react";
import Jumbotron from "../Jumbotron";

class Login extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">
          <strong>You must log in to view the page</strong>
        </h1>
        <div class="text-center mt-5">
          <a
            href={process.env.REACT_APP_AUTH}
            className="btn btn-primary btn-lg active"
            role="button"
          >
            Log in
          </a>
        </div>
      </Jumbotron>
    );
  }
}

export default Login;
