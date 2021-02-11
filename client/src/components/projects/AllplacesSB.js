import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';

import SearchBar from '../Searchbar';
import Places from './Places';







class AllplacesSB extends Component {
  state = {
    Myplaces: [],
    searchTerm: "",
    onStockBool: false,
    onstockBool1: false,
    onstockRoom: false,




  }



  componentDidMount() {
    axios.get('/api/projects').then((resp) => {
      this.setState({ Myplaces: resp.data })

    }
    )
  }

  changeSearchHandler = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm
    })
  }

  changeOnStockHandler = (stockBool) => {
    this.setState({
      onStockBool: stockBool
    })
  }




  render() {

    let filteredPlaces = this.state.Myplaces.filter(c => c.name.includes(this.state.searchTerm))
    if (this.state.onStockBool) {
      filteredPlaces = filteredPlaces.filter(a => a.price >= 500)
    }
    if (this.state.onStockBool1) {
      filteredPlaces = filteredPlaces.filter(a => a.price <= 100)
    }




    return (
      <div>

        <div>
          <SearchBar searchChange={this.changeSearchHandler} onStockChange={this.changeOnStockHandler} searchTerm={this.state.searchTerm}></SearchBar>


        </div>


        {filteredPlaces.map((a) => {

          return <Places name={a.name} description={a.description
          } id={a._id} likes={a.likes} rooms={a.type}></Places>

        })}



      </div>
    );
  }
}

export default AllplacesSB;

