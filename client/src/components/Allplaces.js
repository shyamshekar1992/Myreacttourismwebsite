import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SearchBar from '../components/Searchbar'
import Button from 'react-bootstrap/Button'







class Allplaces extends Component {
  state = {
    places: [],

    searchTerm: "",
    button1Disabled: false,
    button2Disabled: false,
    onStockBool: false,
    onstockBool1: false,
    onstockBool2: false,
    onstockBool3: false,
    onstockBool4: false,





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
    let filteredPlaces = this.state.places.filter(c => c.name.includes(this.state.searchTerm))
    console.log("new SB ...............", filteredPlaces)
    if (this.state.onStockBool) {
      filteredPlaces = filteredPlaces.filter(a => a.price <= 100)
    }
    if (this.state.onStockBool1) {
      filteredPlaces = filteredPlaces.filter(a => a.price <= 500)
    }
    if (this.state.onStockBool2) {
      filteredPlaces = filteredPlaces.filter(a => a.price <= 1000)
    }
    if (this.state.onStockBool3) {
      filteredPlaces = filteredPlaces.filter(a => a.price <= 1200)
    }


    return (

      <div>
        <div>
          <SearchBar searchChange={this.changeSearchHandler} onStockChange={this.changeOnStockHandler} searchTerm={this.state.searchTerm}></SearchBar>
        </div>
        <Container fluid>
          <Row>

            {filteredPlaces.map(e => {
              let relatedPlaces = this.state.places.filter(related => related.region === e.region && related._id !== e._id)
              console.log(relatedPlaces)
              return (


                <Col>

                  <Card style={{ width: '18rem' }}>
                    <Card.Body>


                      <Card.Title> <h1> <Link to={{ pathname: `Place/${e._id}`, state: { singlePlace: e, related: relatedPlaces } }} >{e.name}</Link></h1></Card.Title>


                      <Card.Img variant="top" src={e.img} />

                      <p>likes:{e.likes}</p>
                      <Button variant="outline-dark" onClick={() => this.addLikesHandler(e._id)} disabled={this.state.button1Disabled}> Like </Button>
                      <Button variant="outline-dark" onClick={() => this.addDislikeHandler(e._id)} disabled={this.state.button2Disabled} > Unlike </Button>
                    </Card.Body>


                  </Card>
                </Col>


              )
            })}



          </Row>
        </Container>

      </div>
    );
  }
}

export default Allplaces;

