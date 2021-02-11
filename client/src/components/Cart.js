import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

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
              <div >
                <h4>{product.name}</h4>
                <span>{product.description}</span>
                <p>{product.quantity}</p>
                <h4>${product.quantity * product.price}</h4>
                <button onClick={() => this.deleteHandler(product._id)} >delete </button>
                <button onClick={() => this.handleIncrementClick(product._id)} >+ </button>
                <button onClick={() => this.handledecrementclick(product._id)} >- </button>


                <br></br>
              </div>
            )
          })
        }

        <h5>Final price {totalP} </h5>
        <h5>total number of items {(this.state.products).length}  </h5>

        {/* <StripeCheckout stripeKey="" /> */}



      </div >
    )
  }
}