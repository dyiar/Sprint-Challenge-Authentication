import React, { Component } from "react";
import "./App.css";
import Signup from "./signup/signup";
import Login from './login/login';
import Jokes from './jokes/jokes';
import { NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to='/jokes'>Jokes</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
        </nav>
        <section className="body">
          <Route exact path='/' render={props => <Login {...props} /> } />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path='/jokes' render={props => <Jokes {...props} /> } />
        </section>
      </div>
    );
  }
}

export default App;
