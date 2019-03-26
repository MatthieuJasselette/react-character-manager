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
              <Form.Control type="text" defaultValue={this.props.package.name}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput2">
              <Form.Label>Write a short description:</Form.Label>
              <Form.Control type="text" defaultValue={this.props.package.shortDescription}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlTextarea1">
              <Form.Label>Write an extensive description:</Form.Label>
              <textarea className="form-control" rows="8">{this.props.package.description}</textarea>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput4">
              <Form.Label>Pick a picture of the character:</Form.Label>
              <Form.Control className="browse-input" type="file" onChange={this.props.onChangeImage}/>
            </Form.Group>
          </Form>
          <ConfirmModalContainer
            message="Do you want to Save these changes ?"
            variant="primary"
            label="Submit changes"
            onClick=""/>
        </div>
      </div>
    );
  }
}
