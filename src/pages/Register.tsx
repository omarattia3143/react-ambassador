import React, { Component, SyntheticEvent } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class Register extends Component {
  firstName = "";
  lastName = "";
  email = "";
  password = "";
  passwordConfirm = "";
  state = {
    redirect: false,
  };

  submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await axios.post("register", {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.passwordConfirm,
    });

    this.setState({
      redirect: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={"/login"} />;
    }

    return (
      <main className="form-signin w-100 m-auto">
        <form onSubmit={this.submit}>
          <h1 className="h3 mb-3 fw-normal">Register</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              onChange={(e) => (this.firstName = e.target.value)}
            />
            <label>First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              onChange={(e) => (this.lastName = e.target.value)}
            />
            <label>Last Name</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              onChange={(e) => (this.email = e.target.value)}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              onChange={(e) => (this.password = e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              onChange={(e) => (this.passwordConfirm = e.target.value)}
            />
            <label>Confirm Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Register
          </button>
        </form>
      </main>
    );
  }
}

export default Register;
