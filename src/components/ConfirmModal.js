import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ConfirmModal extends React.Component {

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.props.handleShow}>
          Submit
        </Button>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>You called this modal from {this.props.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
