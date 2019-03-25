import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.js';
import ConfirmModalContainer from'./ConfirmModalContainer.js';

export default class CharEdit extends Component {
  render() {
    return (
      <div>
      <NavBar message="EditPage"/>
        <div>
          <p>This is the CharEdit page</p>
          <input type="text>" defaultValue={this.props.package.name}></input>
          <img src={"data:image;base64,"+this.props.package.image} />
          <input type="text" defaultValue={this.props.package.shortDescription}></input>
          {this.props.package.description}
          <ConfirmModalContainer message="CharEditPage"/>
        </div>
      </div>
    );
  }
}
