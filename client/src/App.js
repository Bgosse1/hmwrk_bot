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
import axios from "axios";
import Login from "./components/Login";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : auth === null ? (
        <span>Loading ...</span>
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
  state = {
    user: {},
    isAdmin: null
  };

  authenticate() {
    axios.get("/api/authenticate/user").then(response => {
      if (!!response.data.user) {
        this.setState({
          user: response.data.user,
          isAdmin: response.data.user.isAdmin
        });
      } else {
        this.setState({
          user: {},
          isAdmin: false
        });
      }
    });
  }

  componentDidMount() {
    this.authenticate();
  }

  render() {
    console.log("state", this.state);
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <PrivateRoute
              path="/home"
              component={Home}
              auth={this.state.isAdmin}
            />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
