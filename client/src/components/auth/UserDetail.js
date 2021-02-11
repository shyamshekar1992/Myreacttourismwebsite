// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UserSetail extends Component {

  // this.props.updateCurrentUser

  state = {
    firstname: "", lastname: "", email: "", phone: "", address: "", cart: [],
  };

  componentDidMount() {
    axios.get(`/api/profile/${this.props.currentUser._id}`,).then((resp) => {
      console.log(resp.data)
      let { firstname, lastname, email, phone, address, cart } = resp.data;
      if (resp.data.cart[0] !== null) {
        this.setState({ firstname, lastname, email, phone, address, cart })
      }
      else {
        this.setState({ firstname, lastname, email, phone, address })
      }


    }
    )
  }

  handleFormSubmit = (event) => {
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


        }
        )
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addProductToCart(id) {

    console.log("idd", id)
    const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
    const arrayproduct = JSON.parse(oldproduct);

    console.log("i trieddd", id)

    let productsString = this.state.cart.filter(e => {
      console.log("eeeee", e._id)
      return e._id === id
    });
    let existingPlaceWithSameId1 = arrayproduct.find(place => place._id === id)
    if (existingPlaceWithSameId1) {
      alert('Item already added to the kart')
      return
    }

    productsString[0].quantity = 1;
    arrayproduct.push(productsString[0]);

    localStorage.setItem('products', JSON.stringify(arrayproduct));
    console.log("locallyyyyy", arrayproduct)
    alert('item pushed', arrayproduct)
  }

  deleteItemfromFav(id) {
    const deletedItem = this.state.cart.filter((a) => a._id === id);
    console.log("the deleted product", deletedItem)
    // newCartItem
    axios.put(`/api/delete-item/${deletedItem[0]._id}`)
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


        }
        )
      })


  }


  render() {


    return (
      <div>

        <h1>name:{this.state.firstname}</h1>
        <h2>Lastname:{this.state.lastname}</h2>

        <h3>address:{this.state.address}</h3>
        <h4>email:{this.state.email}</h4>
        <h5>phone:{this.state.phone}</h5>
        <br></br>
        <h6>your favourites</h6>
        <br></br>
        {(this.state.cart.length === 0) &&
          <p>Cart is empty</p>}
        { (this.state.cart.length >= 1) &&
          this.state.cart.map(e => {
            return (
              <div>

                <Link to={"Place/" + e._id} >{e.name}</Link>
                {<p>{e.description}</p>}
                {<p>{e.price}</p>}

                <button onClick={() => this.addProductToCart(e._id)}

                >Add to Cart</button>
                <button onClick={() => this.deleteItemfromFav(e._id)} >delete </button>

              </div>
            )
          })
        }




        <form onSubmit={this.handleFormSubmit}>
          <label>firstname:</label>
          <input type="firstname" name="firstname" placeholder={this.state.firstname} value={this.state.firstname} onChange={e => this.handleChange(e)} />
          <label>lastname:</label>
          <input type="lastname" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} />
          <label>email:</label>
          <input type="email" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
          <label>phone:</label>
          <input type="phone" name="phone" value={this.state.phone} onChange={e => this.handleChange(e)} />
          <label>address:</label>
          <input type="address" name="address" value={this.state.address} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Submit" />
        </form>
      </div>

    )
  }
}

export default UserSetail;