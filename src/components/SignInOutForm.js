import React, { Component } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

class SignInOutForm extends Component {
  state = {
    isSignIn: true,
  };

  handleSignIn = (payload) => {
    console.log("sign in", payload);
  };

  handleSignUp = (payload) => {
    console.log("sign up", payload);
  };

  onToggleSignIn = (e) => {
    e.preventDefault();
    this.setState({
      isSignIn: !this.state.isSignIn,
    });
  };

  render() {
    console.log(this.state.isSignIn);
    return (
      <div>
        {this.state.isSignIn ? (
          <SignUpForm
            onSignUp={this.handleSignUp}
            onToggleSignIn={this.onToggleSignIn}
          />
        ) : (
          <SignInForm
            onSignIn={this.handleSignIn}
            onToggleSignIn={this.onToggleSignIn}
          />
        )}
      </div>
    );
  }
}

export default SignInOutForm;
