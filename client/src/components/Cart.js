import React, { Component } from 'react';
// import { Jumbotron } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import StripecheckoutButton from './StripeCheckout'
import { Link } from 'react-router-dom';



export default class Shopping extends Component {

  state = {
    products: JSON.parse(localStorage.getItem('products')),
    counts: 0,
    totalPrice: 0
  };




  deleteHandler(_id) {


    const newproducts = this.state.products.filter((item) => item._id !== _id);


    // filters out one item, with a certain _id
    localStorage.setItem("products", JSON.stringify(newproducts));


    this.setState({
      products: newproducts,
    })

    console.log("deleted", newproducts)

  }
  handleIncrementClick = (_id) => {
    let productsCopy = this.state.products.slice()
    let userClickedThis = productsCopy.find((item) => item._id === _id);
    console.log("the copied products are", productsCopy)

    userClickedThis.quantity += 1
    this.setState({
      products: productsCopy,


    })

  }
  handledecrementclick = (_id) => {
    let productsCopy = this.state.products.slice()
    let userClickedThis = productsCopy.find((item) => item._id === _id);
    if (userClickedThis.quantity <= 1) {
      return
    }
    userClickedThis.quantity -= 1
    this.setState({
      products: productsCopy,


    })
    console.log("products copy....", productsCopy)


  }



  render() {

    let totalPrice = this.state.products.map((item) => {
      return item.price * item.quantity
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalP = totalPrice.reduce(reducer, 0)

    console.log("totalPrice", totalP)






    return (

      <div>
        {
          this.state.products.map((product, key) => {

            console.log("console............", this.state.totalPrice)
            return (
              <section class="Kart-card">

                <div >

                  <h1> <Link to={"Place/" + product._id} >{product.name}</Link></h1>
                  <p>Qunatity:{product.quantity}</p>
                  <h4>total:${product.quantity * product.price}</h4>
                  <Button variant="outline-dark" onClick={() => this.deleteHandler(product._id)} >delete </Button>
                  <Button variant="outline-dark" onClick={() => this.handleIncrementClick(product._id)} >+ </Button>
                  <Button variant="outline-dark" onClick={() => this.handledecrementclick(product._id)} >- </Button>


                  <br></br>
                </div>
              </section>

            )
          })
        }
        <Jumbotron>

          <h5>Final price {totalP} </h5>
          <h5>total number of items {(this.state.products).length}  </h5>
          <StripecheckoutButton price={totalP} purchasedProducts={this.state.products} />

        </Jumbotron>




      </div >
    )
  }
}
