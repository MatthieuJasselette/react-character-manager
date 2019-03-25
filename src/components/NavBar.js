import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}><Button variant="primary">Get me back to the list.</Button></Link>
        <Link to={"/char-create-container"}><Button variant="primary">Create a character</Button></Link>
      </div>
      );
    }
  }
