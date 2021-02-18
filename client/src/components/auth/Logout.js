// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class Logout extends Component {

  state = {
    redirect: false
  }


  logoutHandler = (e) => {
    e.preventDefault()
    axios.post("/api/logout").then(response => {

      this.setState({
        redirect: true
      }, () => {
        this.props.updateCurrentUser(null)
      })

      console.log("response for logout", response.data)
    })
  }



  render() {
    return (
      <div class="logout">
        {this.state.redirect && <Redirect to="/" />
        }

        <button onClick={this.logoutHandler}>Logout</button>

      </div>
    )
  }
}


export default Logout;
