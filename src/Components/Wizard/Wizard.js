import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Wizard.css';

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      propName: '',
      addInput: '',
      cityInput: '',
      stateInput: '',
      zipInput: ''
    };
  }

  handleName = val => {
    this.setState({ propName: val });
  };

  handleAddress = val => {
    this.setState({ addInput: val });
  };

  handleCity = val => {
    this.setState({ cityinput: val });
  };

  handleState = val => {
    this.setState({ stateInput: val });
  };

  handleZip = val => {
    this.setState({ zipInput: val });
  };

  handleSubmit = id => {
    let { propName, addInput, cityInput, stateInput, zipInput } = this.state;

    axios.post('/api/listings', {
      name: propName,
      address: addInput,
      city: cityInput,
      state: stateInput,
      zip: zipInput
    });
  };

  render() {
    return (
      <Fragment>
        <header className="header">
          <h1>Add New Property</h1>
          <Link to="/dashboard">
            <button>Cancel</button>
          </Link>
        </header>
        <div className="input_boxes">
          <div className="input_box_prop">
            <h2>Property Name</h2>
            <input
              type="text"
              onChange={e => this.handleName(e.target.value)}
            />
          </div>
          <div className="input_box_address">
            <h2>Address</h2>
            <input
              type="text"
              size={60}
              onChange={e => this.handleAddress(e.target.value)}
            />
          </div>
          <div className="input_box_city">
            <h2>City</h2>
            <input
              type="text"
              onChange={e => this.handleCity(e.target.value)}
            />
            <h2>State</h2>
            <input
              type="text"
              onChange={e => this.handleState(e.target.value)}
            />
            <h2>Zip</h2>
            <input type="text" onChange={e => this.handleZip(e.target.valu)} />
          </div>
          <div className="complete_btn">
            <button onClick={id => this.handleSubmit(id)}>Submit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
