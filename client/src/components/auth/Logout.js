// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class Logout extends Component {
  logoutHandler = (e) => {
    e.preventDefault()
    axios.post("/api/logout").then(response => {
      console.log("response for logout", response.data)
    })
  }
  // this.props.updateCurrentUser
  handleFormSubmit = (event) => {
  }


  render() {
    return (
      <div>

        <button onClick={this.logoutHandler}>Logout</button>

      </div>
    )
  }
}


export default Logout;