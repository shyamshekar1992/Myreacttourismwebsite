// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {

  state = { title: "", description: "" };


  handleFormSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;

    // because we set up proxy --> this goes to localhost:5555 ( which is our own express backend )
    axios.post("/api/projects", { title, description })
      .then(() => {
        this.setState({ title: "", description: "" });
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
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;