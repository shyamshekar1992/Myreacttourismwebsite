
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

import AddProject from './components/projects/AddProject'

class App extends React.Component {

  state = {
    currentUser: this.props.user.userDoc
  }

  updateCurrentUser = (userObjFromBackend) => {
    this.setState({
      currentUser: userObjFromBackend
    })
  }

  render() {
    return (
      <div className="App">

        <AddProject></AddProject>
        <br></br>
        {this.state.currentUser ? <h1>Welcome, {this.state.currentUser.username}</h1> : (
          <div>
            <h1>Signup</h1>
            <Signup></Signup>
            <br></br>
            <h1>Login</h1>
            <Login updateCurrentUser={this.updateCurrentUser} ></Login>
          </div>
        )}

      </div>
    );
  }
}

export default App;
