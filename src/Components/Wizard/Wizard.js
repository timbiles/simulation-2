import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Wizard.css';

import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from '../../ducks/reducer';

class Wizard extends Component {

  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updateState,
      updateZip
    } = this.props;
    return (
      <Fragment>
        <header className="wizard_header">
          <h1>Add New Property</h1>
          <Link to="/dashboard">
            <button>Cancel</button>
          </Link>
        </header>
        <div className="input_boxes">
          <div className="input_box_prop">
            <h2>Property Name</h2>
            <input type="text" onChange={e => updateName(e.target.value)} />
          </div>
          <div className="input_box_address">
            <h2>Address</h2>
            <input
              type="text"
              size={60}
              onChange={e => updateAddress(e.target.value)}
            />
          </div>
          <div className="input_box_city">
            <h2>City</h2>
            <input type="text" onChange={e => updateCity(e.target.value)} />
            <h2>State</h2>
            <input type="text" onChange={e => updateState(e.target.value)} />
            <h2>Zip</h2>
            <input type="number" onChange={e => updateZip(e.target.value)} />
          </div>
          <div className="complete_btn">
            <Link to="/wizardStep2">
              <button>Next</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { propName, addInput, cityInput, stateInput, zipInput } = state;

  return {
    propName,
    addInput,
    cityInput,
    stateInput,
    zipInput
  };
};

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updateState, updateZip }
)(Wizard);
