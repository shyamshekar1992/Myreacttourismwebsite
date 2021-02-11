// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {

  state = {
    username: "", password: "", firstname: "", lastname: "", email: "", phone: "", address: "", imageUrl: ""
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
        this.setState({ username: "", password: "", firstname: "", lastname: "", email: "", phone: "", address: "" });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>username:</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
          <label>password:</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          <label>firstname:</label>
          <input type="firstname" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} />
          <label>lastname:</label>
          <input type="lastname" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} />
          <label>email:</label>
          <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
          <label>phone:</label>
          <input type="phone" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
          <label>address:</label>
          <input type="address" name="address" value={this.state.address} onChange={e => this.handleChange(e)} />
          <input
            type="file"
            onChange={(e) => this.handleFileUpload(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Signup;