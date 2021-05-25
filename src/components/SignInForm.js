import React, { Component } from "react";

class SignInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onUsernameChange = (evt) => {
    // console.log(evt.target.value);
    this.setState({
      username: evt.target.value,
    });
  };

  onPasswordChange = (evt) => {
    // console.log(evt.target.value);
    this.setState({
      password: evt.target.value,
    });
  };

  onSignIn = (evt) => {
    evt.preventDefault();
    const payload = { ...this.state };
    this.props.onSignIn(payload);
  };

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <form className="ui form">
          <div className="field">
            <label>Username/Email</label>
            <input
              type="text"
              name="username"
              placeholder="Username/Email"
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>

          <button className="ui primary button" onClick={this.onSignIn}>
            Sign In
          </button>
          <div style={{ margin: "10px" }}>
            <label style={{ marginRight: "10px" }}>New User?</label>
            <button
              className="ui positive basic button"
              onClick={this.props.onToggleSignIn}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
