import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';






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
          return (
            <div>



              <h1> <Link to={"Place/" + e._id} >{e.name}</Link></h1>
              <p>{e.description}</p>

              <img src={e.img}></img>
              <p>likes:{e.likes}</p>
              <button onClick={() => this.addLikesHandler(e._id)} disabled={this.state.button1Disabled}> Like </button>
              <button onClick={() => this.addDislikeHandler(e._id)} disabled={this.state.button2Disabled} > Unlike </button>





            </div>
          )
        })}



      </div>
    );
  }
}

export default Allplaces;

