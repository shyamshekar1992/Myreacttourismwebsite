// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Signup extends Component {

  state = {
    redirect: false,
    username: "",
    password: "",
    firstname: "", lastname: "", email: "", phone: "", address: "", imageUrl: ""
  };


  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const firstname = this.state.firstname;

    const lastname = this.state.lastname;
    const email = this.state.email;
    const phone = this.state.phone;
    const address = this.state.address;


    axios.post("/api/user-signup", { username, password, firstname, lastname, email, phone, address })
      .then(() => {
        this.setState({ redirect: true, username: "", password: "", firstname: "", lastname: "", email: "", phone: "", address: "" });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (

      < div >
        {this.state.redirect && <Redirect to="/" />}
        <section class="User_card">
          <h1>Sign up form</h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>username:</label>
            <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
            <br></br>
            <label>password:</label>
            <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
            <br></br>
            <label>email:</label>
            <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />

            <input type="submit" value="Submit" />
          </form>
        </section>

      </div >
    )
  }
}

export default Signup;