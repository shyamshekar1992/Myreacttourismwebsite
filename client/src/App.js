
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'react-bootstrap'

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

// import AddProject from './components/projects/AddProject'
import axios from 'axios'
import Places from './components/Allplaces'
import Detailplaces from './components/Detail'

import Cart from './components/Cart'
import UserDetail from './components/auth/UserDetail'
import Logout from './components/auth/Logout'
import Weather from './components/projects/Weather-berlin'
import Chatroom from './components/Chatroom'
import Home from './components/Home'
// import Dark from './components/Dark'
import Map from './components/Map'
import Cal from './components/Calender'
import Newroom from './components/NewRoom'
import NavBar from './components/Navbar'
import Cars from './components/projects/Cars'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav2 from './components/Nav2'

import Badge from 'react-bootstrap/Badge'
import Form from "./components/Form"
import Drcypt from './components/MagicText'



// import Client from './components/Client';
// import Agents from './Agent';


import { Switch, Route, Link } from "react-router-dom";
import AllplacesSB from './components/projects/AllplacesSB';
import Userupdate from './components/auth/UserUpdate';

// import TestChat from './components/TestChat';



class App extends React.Component {

  state = {
    currentUser: this.props.user.userDoc,
    products: JSON.parse(localStorage.getItem('products')),

    //cart
  }

  componentDidMount() {
    axios.get('/api/projects').then((resp) => {
      console.log(resp.data)
    }
    )
  }


  updateCurrentUser = (userObjFromBackend) => {
    this.setState({
      currentUser: userObjFromBackend
    })
  }

  render() {


    console.log("user", this.state.currentUser)
    return (
      <div className="App">
        <Logout />
        <Button variant="primary">
          <Link to={"Kart/"} >kart</Link> <Badge variant="light">{(this.state.products).length}</Badge>
          <span className="sr-only"></span>

        </Button>

        <NavBar />
        <Nav2 />
        {this.state.currentUser ? <Jumbotron>
          <h1>Welcome, {this.state.currentUser.firstname} </h1></Jumbotron>



          :
          (
            <div>
              <h1>Signup</h1>
              <Signup></Signup>
              <br></br>
              <h1>Login</h1>
              <Login updateCurrentUser={this.updateCurrentUser} ></Login>
            </div>
          )}


        {/* <Cars /> */}


        <Switch>
          <Route exact path='/' component={Cars}></Route>


          <Route exact path='/Chatroom' component={Home}></Route>
          <Route exact path='/All' component={Places}></Route>
          {/* <Route exact path='/Europe' component={Europe}></Route> */}

          <Route exact path='/login' component={Places}></Route>
          <Route exact path='/magic' component={Drcypt}></Route>
          <Route exact path='/Userupdate' render={() => <Userupdate currentUser={this.state.currentUser} />}></Route>





          <Route exact path='/Place/:potato' render={(props) => { return <Detailplaces {...props} currentUser={this.state.currentUser} /> }}></Route>
          <Route exact path='/Search' component={AllplacesSB}></Route>
          <Route exact path='/kart' component={Cart}></Route>
          <Route exact path='/Form' component={Form}></Route>

          <Route exact path='/User' render={() => <UserDetail currentUser={this.state.currentUser} />}></Route>
          <Route exact path='/weather' component={Weather}></Route>
          <Route exact path="/chat/:roomId" component={Chatroom} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/cal" component={Cal} />
          <Route exact path="/newchatroom" component={Newroom} />









          {/* <Route exact path='/Contact' component={Form}></Route> */}




          {/* Route is setting props.match.params.theID for us in the component */}
        </Switch>
        <br></br>


      </div>
    );
  }
}

export default App;
