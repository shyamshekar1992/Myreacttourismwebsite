// components/projects/AddProject.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'



class UserSetail extends Component {


  state = {
    firstname: "", lastname: "", email: "", phone: "", address: "", cart: [], purchased: [],
  };

  componentDidMount() {

    axios.get(`/api/profile/${this.props.currentUser._id}`,).then((resp) => {
      console.log("what is this..............", resp.data)
      console.log("my purchased products", this.state.purchased, this.state.cart)
      let { firstname, lastname, email, phone, address, cart, purchased } = resp.data;
      if (resp.data.cart[0] !== null) {
        this.setState({ firstname, lastname, email, phone, address, cart, purchased })
      }
      else {
        this.setState({ firstname, lastname, email, phone, address })
      }


    }
    )
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
    alert('Item added to Kart', arrayproduct)
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

        <section class="User_card">

          {/* <img src={this.state.profileImg || "/images/user.png"} alt="user profile" className="user-profile-image" /> */}
          <h1>name:{this.state.firstname}</h1>
          <h2>Lastname:{this.state.lastname}</h2>

          <h3>address:{this.state.address}</h3>
          <h4>email:{this.state.email}</h4>
          <h5>phone:{this.state.phone}</h5>
        </section>
        <Jumbotron>

          <h6>your favourites</h6>
        </Jumbotron>

        <br></br>
        {(this.state.cart.length === 0) &&
          <h1>You dont have any favourite items</h1>}
        { (this.state.cart.length >= 1) &&
          this.state.cart.map(e => {
            return (
              <div>
                <section class="User_carduser">

                  <Link to={"Place/" + e._id} >{e.name}</Link>
                  {<p>{e.smalldescription}</p>}
                  {<p>price:{e.price}</p>}

                  <Button onClick={() => this.addProductToCart(e._id)}

                  >Add to Cart</Button>
                  <Button onClick={() => this.deleteItemfromFav(e._id)} >delete </Button>
                </section>

              </div>
            )
          })
        }
        {(this.state.purchased.length === 0) &&

          <h1>you have not bought any products</h1>}
        { (this.state.purchased.length >= 1) &&

          this.state.purchased.map(b => {

            return (
              <div>
                <h1>Products you have purchased</h1>


                <section class="User_carduser3">
                  <h1> {b.name}</h1>
                  {<p>price:{b.price}</p>}
                  {<p>quantity:{b.quantity}</p>}
                  {<p>purchased on :{b.updatedAt}</p>}





                </section>

              </div>
            )
          })
        }

      </div>

    )
  }
}

export default UserSetail;