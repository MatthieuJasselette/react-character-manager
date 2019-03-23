import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class CharCreate extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>Get me back to the list.</Link>
        <p>This is the CharCreate page</p>
      </div>
    );
  }
}
