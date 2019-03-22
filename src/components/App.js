import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
//import components
import AppRoute from './AppRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AppRoute />
        </header>
      </div>
    );
  }
}

export default App;
