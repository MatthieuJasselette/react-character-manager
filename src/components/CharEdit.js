import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import NavBar from './NavBar.js';
import ConfirmModalContainer from'./ConfirmModalContainer.js';

export default class CharEdit extends Component {
  render() {
    return (
      <div>
      <NavBar message="EditPage"/>
        <div>
          <Form>
            <Form.Group controlId="createForm.ControlInput1">
              <Form.Label>Name of the character:</Form.Label>
              <Form.Control type="text" placeholder={this.props.package.name}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput2">
              <Form.Label>Write a short description:</Form.Label>
              <Form.Control type="text" placeholder={this.props.package.shortDescription}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlTextarea1">
              <Form.Label>Write an extensive description:</Form.Label>
              <Form.Control as="textarea" rows="3" placeholder={this.props.package.description}/>
            </Form.Group>
          </Form>
          <ConfirmModalContainer message="Do you want to Save these changes ?"/>
        </div>
      </div>
    );
  }
}
