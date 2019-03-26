import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

// import CharCreate from './CharCreate'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import ConfirmModalContainer from'./ConfirmModalContainer.js';

export default class CharEditContainer extends Component {
  constructor (props) {
    super (props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state= {file:"", imagePreviewUrl:""};

    this.state = {
      character: [],
      charName: "",
      charDesc: "",
      charShortDesc: "",
      charImage: "",
      file:"",
      imagePreviewUrl:""
    }
  }

  getCharacter = () => {
    axios
    .get('https://character-database.becode.xyz/characters/'+this.props.match.params.id)
    .then(result => this.setState({
      character: result.data,
      charDesc: result.data.description
    }))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getCharacter()
  }

  onChangeName(e) {
    this.setState({
      charName: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      charDesc: e.target.value
    });
  }

  onChangeShortDescription(e) {
    this.setState({
      charShortDesc: e.target.value
    });
  }

  onChangeImage(e){
    this.setState({
      image: e.target.value
    })
  }

  _handleChangeImage(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  onSubmit(data) {
    data.preventDefault();
    const obj = {
      name: this.state.charName,
      description: this.state.charDesc,
      shortDescription: this.state.charShortDesc,
      image: this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    };
    // console.log(obj);
    axios
      .post("https://character-database.becode.xyz/characters/", obj)
      .then(this.props.history.push('/'))
      .catch(err => console.log(err))
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview=null;
    if (imagePreviewUrl) {
      $imagePreview = (<React.Fragment>
        {/* "data:image;base64," */}
          <img class="preview-img" ref="image" src={imagePreviewUrl} width="100" height="100" />
        </React.Fragment>);
    } else {
      let preview;
      if (this.state.charImage){
        preview = <img class="preview-img" ref="image" src={"data:image/;base64,"+this.state.charImage} width="100" height="100" />
      } else{
        preview = <img class="preview-img" src="https://img3.cliparto.com/pic/s/256180/5361912-user-icon-handcuffs-icon.jpg" width="100" height="100" />
      }
      $imagePreview = (
          preview);
    }
    console.log(this.state.character.description);
    return (
      <React.Fragment>
        <div>
          <Link to={"/"}><Button>Get me back to the list.</Button></Link>
          <Form>
            <Form.Group controlId="createForm.ControlInput1">
              <Form.Label>Name of the character:</Form.Label>
              <Form.Control type="text" onChange={this.onChangeName} defaultValue={this.state.character.name}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput2">
              <Form.Label>Write a short description:</Form.Label>
              <Form.Control type="text" onChange={this.onChangeShortDescription} defaultValue={this.state.character.shortDescription}/>
            </Form.Group>
            <Form.Group controlId="createForm.ControlTextarea1">
              <Form.Label>Write an extensive description:</Form.Label>
               <textarea className="form-control" ref="description" name="description" rows="10"  onChange={this.onChangeDescription}>
                {this.state.character.description}
               </textarea>
            </Form.Group>
            <Form.Group controlId="createForm.ControlInput4">
              <Form.Label>Pick a picture of the character:</Form.Label>
              <Form.Control className="browse-input" type="file" onChange={(e)=>this._handleChangeImage(e)}/>
              {$imagePreview}
            </Form.Group>
          </Form>
          <ConfirmModalContainer
          message="Do you want to add this character ?"
          variant="primary"
          label="Submit changes"
          onClick={this.onSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}
