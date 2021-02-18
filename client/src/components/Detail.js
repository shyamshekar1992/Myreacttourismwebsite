import React, { Component } from 'react';
import WeatherFetch from './projects/Weather-berlin'
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'






class Details extends Component {
  state = {
    singlePlace: {},
    newreviews: '',
    related: [],
    places: []


  }



  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.potato
    //const place = this.props.location.state.singlePlace
    //const related = this.props.location.state.related
    //this.setState({ singlePlace: place, related })
    axios.get('/api/projects').then((resp1) => {
      console.log(resp1.data)
      axios.get(`/api/projects/${id}`).then((resp2) => {
        this.setState({ singlePlace: resp2.data, places: resp1.data })
      }
      )

    }
    )

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
    alert('Item added to your Kart')

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

    let relatedPlaces = this.state.places.filter(related => related.region === this.state.singlePlace.region && related._id !== this.state.singlePlace._id)
    console.log(relatedPlaces)

    return (
      <div>

        <WeatherFetch city={this.state.singlePlace.code} />

        {this.state.singlePlace.name &&
          <div>

            <Jumbotron>
              <h1>{this.state.singlePlace.name}</h1>
              <h2>Description:{this.state.singlePlace.smalldescription}</h2>
              <h3>Price:{this.state.singlePlace.price}</h3>
              <img src={this.state.singlePlace.img}></img>
              <br></br>
              {this.props.currentUser && (<div><Button onClick={() => this.addProductToCart(this.state.singlePlace._id)}

              >Add to Cart</Button>
                <Button onClick={() => this.addProducttoDB(this.state.singlePlace._id)}


                  color="black" outlined rounded size="large" >Favourites</Button></div>
              )
              }
            </Jumbotron>





            {this.props.currentUser && this.props.currentUser.username &&
              <div>
                <input onChange={this.changeNameHandler} value={this.state.newreviews} type="text"></input>

                <Button onClick={() => this.addNewreviewhandler(this.state.singlePlace._id)} > Add a review </Button>
              </div>
            }
            <Jumbotron>

              <h3>Reviews</h3>
              {this.state.singlePlace.reviews.map(review => {
                console.log("populated reviews", review)
                return (<div>
                  <p>posted by <br></br> {review}</p>

                </div>)


              })}
            </Jumbotron>
            <h1>Other places you can look in {this.state.singlePlace.region} </h1>
            {relatedPlaces.map(related => {
              return (
                <div>
                  <div class="Kart-card">

                    <h1> <Link to={"/Place/" + related._id} >{related.name}</Link></h1>
                    <h2>description:{related.smalldescription}</h2>
                  </div>



                </div>)


            })}

          </div>

        }

      </div>



    );
  }
}

export default Details;

