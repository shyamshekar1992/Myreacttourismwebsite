import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import SearchBar from './Searchbar';




class NewRoooms extends Component {
  state = {
    places: [],

    searchTerm: "",
    button1Disabled: false,
    button2Disabled: true


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
    console.log("curentItem", curentItem)
    this.setState({ button2Disabled: false, button1Disabled: false })


    axios.put(`/api/projects/${id}`, curentItem)
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
    console.log("curentItem", curentItem)
    this.setState({ button2Disabled: true, button1Disabled: false })


    axios.put(`/api/projects/${id}`, curentItem)
      .then(response => {
        axios.get('/api/projects').then((resp) => {

          this.setState({ places: resp.data })




        }
        )
      })




  }





  render() {
    console.log("mir==>", this.state)
    let newplaces = this.state.places.filter(a => a.room === true)


    return (
      <div>

        {newplaces.map(e => {
          return (
            <div>
              <section class="User_card">

                <Link to={"Place/" + e._id} >{e.name}</Link>
                <p>{e.description}</p>

                <p>likes:{e.likes}</p>
                <button onClick={() => this.addLikesHandler(e._id)} disabled={this.state.button1Disabled}> Like </button>
                <button onClick={() => this.addDislikeHandler(e._id)} disabled={this.state.button2Disabled} > Unlike </button>

              </section>



            </div>
          )
        })}



      </div>
    );
  }
}

export default NewRoooms;

