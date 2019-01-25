import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = `http://localhost:3300/api/login`;

    axios
      .post(endpoint, this.state)
      .then(response => {
        this.setState({
          username: "",
          password: ""
        });
        localStorage.setItem("jwt", response.data.token);
        this.props.history.push("/jokes");
      })
      .catch(() => console.log("error posting to login"));
  };

  render() {
    const makeInput = (name, type, placehold) => (
      <input
        name={name}
        value={this.state[name]}
        type={type}
        placeholder={placehold}
        onChange={this.handleChange}
        autoComplete='off'
      />
    );
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {makeInput("username", "text", "username")}
          {makeInput("password", "password", "password")}
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default Login;
