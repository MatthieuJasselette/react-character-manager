import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class CharList extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
        <div>
          <Link to={"/char-create-container"}><Button variant="primary">Create a character</Button></Link>
        </div>
        <Container>
          <Row>
            {this.props.package.map(character =>
              <Col xs={6} md={4}>
                <Card bg="dark" style={{ width: '18rem', marginBottom: '0.5rem' }} key={character.id}>
                  <div>
                    <img src={"data:image;base64,"+character.image} />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h3>{character.name}</h3>
                    </Card.Title>
                    <Card.Text>
                      <p>{character.shortDescription}</p>
                    </Card.Text>
                    <Link to={"/char-display-container-"+character.id}><Button variant="secondary">Display more info</Button></Link>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </div>
      </React.Fragment>
    );
  }
}
