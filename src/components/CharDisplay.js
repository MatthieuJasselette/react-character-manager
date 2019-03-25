import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import { Button } from 'react-bootstrap';

import NavBar from './NavBar.js';
import ConfirmModalContainer from './ConfirmModalContainer.js';

export default class CharDisplay extends Component {
  render() {
    return (
      <div>
        <NavBar message="DisplayPage"/>
        <div>
          <h3>{this.props.package.name}</h3>
          <img src={"data:image;base64,"+this.props.package.image} />
          <p>{this.props.package.shortDescription}</p>
          <ReactMarkdown source={this.props.package.description} />
        </div>
        <Link to={"/char-edit-container-"+this.props.package.id}><Button>Edit this fool !</Button></Link>
        <ConfirmModalContainer message="Do you desire to erase this character ?" />
      </div>
    );
  }
}
