
import React from 'react';
// import logo from './logo.svg';
import './App.css';

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





// import Client from './components/Client';
// import Agents from './Agent';






// import Form from "./components/Form"

import { Switch, Route } from "react-router-dom";
import AllplacesSB from './components/projects/AllplacesSB';
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

        <NavBar />
        {/* <Cars /> */}

        {this.state.currentUser ? <h1>Welcome, {this.state.currentUser.firstname} </h1>



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
        {/* <Form /> */}
        <h1>{(this.state.products).length}</h1>




        <Logout />


        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/All' component={Places}></Route>
          <Route exact path='/login' component={Places}></Route>
          <Route exact path='/car' component={Cars}></Route>



          <Route exact path='/Place/:potato' render={(props) => { return <Detailplaces {...props} currentUser={this.state.currentUser} /> }}></Route>
          <Route exact path='/Search' component={AllplacesSB}></Route>
          <Route exact path='/kart' component={Cart}></Route>
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
