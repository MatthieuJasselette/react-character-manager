import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CharList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
        <Link to={"/char-create-container"}>Create a character</Link>
          </div>
          <div>
           {this.props.package.map(character =>
             <Card style={{ width: '18rem' }} key={character.id}>
              <Card.Img variant="top" src={"data:image;base64,"+character.image} />
              <Card.Body>
                <Card.Title><h5>{character.name}</h5></Card.Title>
                <Card.Text>
                  <p>{character.shortDescription}</p>
                </Card.Text>
                <Link to={"/char-display-container-"+character.id}>Display more info</Link>
              </Card.Body>
            </Card>
           )}
         </div>
        </div>
      </React.Fragment>
    );
  }
}
