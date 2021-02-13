import React, { Component } from 'react';
import WeatherFetch from './projects/Weather-berlin'
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap'





class Details extends Component {
  state = {
    singlePlace: {},
    newreviews: '',
    related: []


  }



  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.potato
    const place = this.props.location.state.singlePlace
    const related = this.props.location.state.related
    this.setState({ singlePlace: place, related })

    /* axios.get(`/api/projects/${id}`).then((resp) => {
      this.setState({ singlePlace: resp.data })

    }
    ) */
  }


  addProducttoDB(id) {

    // newCartItem
    axios.put(`/api/user-edit`, {
      newCartItem: id
    })
      .then(response => {
        alert('added to favs')
      })

  }

  addProductToCart() {
    const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
    const arrayproduct = JSON.parse(oldproduct);
    let productsString = this.state.singlePlace;
    //let products = this.state;

    let existingPlaceWithSameId = arrayproduct.find(place => place._id === this.state.singlePlace._id)
    if (existingPlaceWithSameId) {
      alert('Item already added')
      return
    }

    productsString.quantity = 1
    arrayproduct.push(productsString);
    //if (productsString) {
    //  products = JSON.parse(productsString)
    //}

    localStorage.setItem('products', JSON.stringify(arrayproduct));
    console.log("cart is", arrayproduct)
  }
  changeNameHandler = (event) => {
    //console.log(event)
    //console.log(event.currentTarget)
    this.setState({
      newreviews: event.currentTarget.value
    })
  }

  addNewreviewhandler = (id) => {

    let updatedPlace = this.state.singlePlace
    updatedPlace.reviews = [...this.state.singlePlace.reviews, this.props.currentUser.username + ": " + this.state.newreviews]
    //  { code: "2925533",
    //    ... 
    //    reviews: ["", "asdasd", "nice", "heyy", "asdasd", "testtest123"],
    // } 
    axios.put(`/api/projects/${id}`, updatedPlace)
      .then(response => {
        console.log(response.data)
        this.setState({
          newreviews: "",
        })
      })



  }



  render() {
    return (
      <div>

        <WeatherFetch city={this.state.singlePlace.code} />

        {this.state.singlePlace.name &&
          <div>

            <Jumbotron>
              <h1>{this.state.singlePlace.name}</h1>
              <h2>{this.state.singlePlace.description}</h2>
              <h3>{this.state.singlePlace.price}</h3>
              <img src={this.state.singlePlace.img}></img>
            </Jumbotron>


            <Jumbotron>


              <button onClick={() => this.addProductToCart(this.state.singlePlace._id)}

              >Add to Cart</button>
              <button onClick={() => this.addProducttoDB(this.state.singlePlace._id)}


                color="black" outlined rounded size="large" >Favourites</button>
            </Jumbotron>
            {this.props.currentUser && this.props.currentUser.username &&
              <div>
                <input onChange={this.changeNameHandler} value={this.state.newreviews} type="text"></input>

                <button onClick={() => this.addNewreviewhandler(this.state.singlePlace._id)} > Add a review </button>
              </div>
            }
            <Jumbotron>

              <h3>Reviews</h3>
              {this.state.singlePlace.reviews.map(review => {
                return (<div>
                  <p>posted by <br></br> {review}</p>

                </div>)


              })}
            </Jumbotron>

            {this.state.related.map(related => {
              return (<div>
                <p>{related.name}</p>

              </div>)


            })}

          </div>

        }

      </div>



    );
  }
}

export default Details;

