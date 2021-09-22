import React, { Component } from "react";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    e.target.reset();
  };

  // handleLoginChange = (e) => {
  //   this.setState({
  //     login: e.target.value
  //   })
   
  // }

  handleLoginPasswordChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({
      // login: e.target.value,
      [name]: value,
    })
  }


  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleLoginPasswordChange}
          value={login}
          name="login"
          type="text"
          placeholder="Login"
        />
        <input
          onChange={this.handleLoginPasswordChange}
          value={password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignInForm;
