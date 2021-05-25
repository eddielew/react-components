import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    password2: "",
    gender: "",
    city: null,
    terms: false,
  };

  onFormChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue,
    });
  };

  onTermsChange = (evt) => {
    // console.log(evt.target.value);
    this.setState({
      terms: !this.state.terms,
    });
  };

  onSignUp = (evt) => {
    evt.preventDefault();
    const payload = { ...this.state };
    this.props.onSignUp(payload);
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
              onChange={(e) => {
                // console.log(e.target.value);
                this.onFormChange("username", e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => {
                // console.log(e.target.value);
                this.onFormChange("password", e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Retype Password</label>
            <input
              type="password"
              name="password2"
              placeholder="Password"
              value={this.state.password2}
              onChange={(e) => {
                // console.log(e.target.value);
                this.onFormChange("password2", e.target.value);
              }}
            />
          </div>

          <div className="inline fields">
            <label htmlFor="gender">Gender</label>
            <div className="field">
              <div
                className="ui radio checkbox"
                onClick={() => {
                  this.onFormChange("gender", "Female");
                }}
              >
                <input
                  type="radio"
                  name="female"
                  checked={this.state.gender === "Female"}
                  tabIndex="0"
                  className="hidden"
                  readOnly
                />
                <label>Female</label>
              </div>
            </div>
            <div className="field">
              <div
                className="ui radio checkbox"
                onClick={() => {
                  this.onFormChange("gender", "Male");
                }}
              >
                <input
                  type="radio"
                  name="male"
                  checked={this.state.gender === "Male"}
                  tabIndex="0"
                  className="hidden"
                  readOnly
                />
                <label>Male</label>
              </div>
            </div>
          </div>
          <div className="field">
            <label>City</label>
            <select
              onChange={(e) => {
                // console.log(e.target.value);
                this.onFormChange("city", e.target.value);
              }}
            >
              <option value="">Select City</option>
              <option value="London">London</option>
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>
          <div className="field">
            <div className="ui checkbox" onClick={this.onTermsChange}>
              <input
                type="checkbox"
                tabIndex="0"
                className="hidden"
                checked={this.state.terms}
                readOnly
              />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>

          <button className="ui primary button" onClick={this.onSignUp}>
            Sign Up
          </button>
          <div style={{ margin: "10px" }}>
            <label style={{ marginRight: "10px" }}>Existing User?</label>
            <button
              className="ui positive basic button"
              onClick={this.props.onToggleSignIn}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
