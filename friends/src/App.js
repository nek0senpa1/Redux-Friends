import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from './components/FriendsList';



//<img src={logo} className="App-logo" alt="logo" />

class App extends Component {


 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>REDUX FRIENDS APP!</h1>

        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
