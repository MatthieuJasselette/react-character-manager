import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {this.props.message}
        <Link to={"/"}>Get me back to the list.</Link>
        <Link to={"/char-create-container"}>Create a character</Link>
      </div>
      );
    }
  }
