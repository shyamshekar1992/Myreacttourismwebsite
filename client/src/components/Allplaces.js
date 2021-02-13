import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'





class Allplaces extends Component {
  state = {
    places: [],

    searchTerm: "",
    button1Disabled: false,
    button2Disabled: false,



  }



  componentDidMount() {
    axios.get('/api/projects').then((resp) => {
      console.log(resp.data)
      this.setState({ places: resp.data })

    }
    )
  }
  addLikesHandler = (id) => {

    let curentItem = this.state.places.filter(e => {
      return e._id === id
    })

    let updatelikes = parseInt({ ...curentItem[0] }.likes) + 1
    curentItem[0].likes = updatelikes
    console.log("curentItem", curentItem[0])


    axios.put(`/api/projects/${id}`, curentItem[0])
      .then(response => {
        axios.get('/api/projects').then((resp) => {

          this.setState({ places: resp.data })



        }
        )
      }
      )





  }
  addDislikeHandler = (id) => {

    let curentItem = this.state.places.filter(e => {
      return e._id === id
    })

    let updatelikes = parseInt({ ...curentItem[0] }.likes) - 1
    curentItem[0].likes = updatelikes
    console.log("curentItem", curentItem[0])

    axios.put(`/api/projects/${id}`, curentItem[0])
      .then(response => {
        axios.get('/api/projects').then((resp) => {

          this.setState({ places: resp.data })



        }
        )
      })




  }




  render() {
    console.log("mir==>", this.state)

    return (
      <div>

        {this.state.places.map(e => {
          let relatedPlaces = this.state.places.filter(related => related.region === e.region && related._id !== e._id)
          console.log(relatedPlaces)
          return (
            <div>


              <Card style={{ width: '18rem' }}>
                <Card.Body>


                  <Card.Title> <h1> <Link to={{ pathname: `Place/ + ${e._id}`, state: { singlePlace: e, related: relatedPlaces } }} >{e.name}</Link></h1></Card.Title>
                  <Card.Text>

                    <p>{e.description}</p>
                  </Card.Text>

                  <Card.Img variant="top" src={e.img} />
                  <p>likes:{e.likes}</p>
                  <button onClick={() => this.addLikesHandler(e._id)} disabled={this.state.button1Disabled}> Like </button>
                  <button onClick={() => this.addDislikeHandler(e._id)} disabled={this.state.button2Disabled} > Unlike </button>
                </Card.Body>


              </Card>


            </div>
          )
        })}



      </div>
    );
  }
}

export default Allplaces;

