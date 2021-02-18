// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Jumbotron, Container } from 'react-bootstrap'



class UserUpdate extends Component {


  state = {
    firstname: "", lastname: "", email: "", phone: "", address: "", cart: [], profileImg: "",
  };



  handleFormSubmit1 = (event) => {
    event.preventDefault();

    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const phone = this.state.phone;
    const address = this.state.address;


    axios.put(`/api/user-edit`, { firstname, lastname, email, phone, address })
      .then(response => {
        axios.get(`/api/profile/${this.props.currentUser._id}`,).then((resp) => {
          console.log(resp.data)
          let { firstname, lastname, email, phone, address, cart } = resp.data;
          if (resp.data.cart[0] !== null) {
            this.setState({ firstname, lastname, email, phone, address, cart })
          }
          else {
            this.setState({ firstname, lastname, email, phone, address })
          }
          alert('User details updated')


        }
        )
      })
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  uploadHandler = (event) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", event.target.files[0]);
    axios.post("/api/upload", uploadData).then((resp) => {
      this.setState({
        profileImg: resp.data.secure_url,
      });
    });
  };


  render() {


    return (
      <div>
        <section class="User_card">

          <form onSubmit={this.handleFormSubmit1}>
            <label>firstname:</label>
            <input type="firstname" name="firstname" placeholder={this.state.firstname} value={this.state.firstname} onChange={e => this.handleChange(e)} />
            <br></br>

            <label>lastname:</label>


            <input type="lastname" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} />
            <br></br>

            <label>email:</label>


            <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
            <br></br>

            <label>phone:</label>

            <input type="phone" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
            <br></br>

            <label>address:</label>

            <input type="address" name="address" value={this.state.address} onChange={e => this.handleChange(e)} />
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </section>

      </div>

    )
  }
}

export default UserUpdate;