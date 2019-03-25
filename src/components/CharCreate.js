import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


import ConfirmModalContainer from'./ConfirmModalContainer.js';

export default class CharCreate extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}><Button>Get me back to the list.</Button></Link>
        <Form>
          <Form.Group controlId="createForm.ControlInput1">
            <Form.Label>Name of the character:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="createForm.ControlInput2">
            <Form.Label>Write a short description:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="createForm.ControlTextarea1">
            <Form.Label>Write an extensive description:</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
        <ConfirmModalContainer message="Do you want to add this character ?"/>
      </div>
    );
  }
}
