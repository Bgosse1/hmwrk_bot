import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import API from "../src/utils/API";
import axios from "axios";
import passport from "passport";

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

const fakeAuth = {
  user: {},
  isAdmin: false,
  authenticate() {
    axios.get("/api/authenticate/user").then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        console.log("THERE IS A USER");
        this.user = response.data.user;
        fakeAuth.isAdmin = response.data.user.isAdmin;
        console.log("is admin", fakeAuth.user.isAdmin);
      } else {
        this.user = {};
        this.isAdmin = false
      }
    });
  }
};

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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.user.isAdmin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    fakeAuth.authenticate();
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <PrivateRoute path="/home" component={Home} />
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
