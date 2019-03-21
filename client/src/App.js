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

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component {...props} />
      ) : (auth === null ? (<span>Loading ...</span>) :
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
    isAdmin: null,
  };

  authenticate() {
    axios.get("/api/authenticate/user").then(response => {
      console.log("response data", response.data);
      if (!!response.data.user) {
        console.log("THERE IS A USER");
        this.setState({
          user: response.data.user,
          isAdmin: response.data.user.isAdmin
        })
        console.log(response.data.user);
        // this.user = response.data.user;
        // this.isAdmin = response.data.user.isAdmin;
        console.log("is admin", this.state.isAdmin);
      } else {
        this.setState({
          user: {},
          isAdmin: false
        })
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
            <Route path="/" exact component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <PrivateRoute path="/home" component={Home} auth={this.state.isAdmin} />
            <Route path="/public" component={Public} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/protected" component={Protected} auth={this.state.isAdmin}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
