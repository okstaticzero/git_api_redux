import React, { Component } from 'react';
import UserDetails from './userdetails/'
import UserList from './userlist/'

import Header from './header/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <UserList />
        <UserDetails />
      </div>
    );
  }
}

export default App;
