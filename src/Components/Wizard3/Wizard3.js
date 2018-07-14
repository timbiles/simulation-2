import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
// import './Wizard3.css';

import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip,
  updateImage,
  updateMortgage,
  updateRent
} from '../../ducks/reducer';

class Wizard3 extends Component {

  handleSubmit = id => {
    let {
      propName,
      addInput,
      cityInput,
      stateInput,
      zipInput,
      imgUrl,
      mortAmt,
      monthlyRent
    } = this.props;
    // console.log(this.props)

    axios.post('/api/listings', {
      name: propName,
      address: addInput,
      city: cityInput,
      state: stateInput,
      zip: zipInput,
      img: imgUrl,
      mortgage: mortAmt,
      rent: monthlyRent
    });
  };

  render() {
      const {updateMortgage, updateRent} = this.props;
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
            <h2>Monthly Mortgage Amount</h2>
            <input
              type="number"
              placeholder="0"
              onChange={e => updateMortgage(e.target.value)}
            />
          </div>
          <div className="input_box_prop">
            <h2>Desired Monthly Rent</h2>
            <input
              type="number"
              placeholder="0"
              onChange={e => updateRent(e.target.value)}
            />
          </div>
          <div>
            <Link to="/wizardStep2">
              <button>Previous Step</button>
            </Link>
            <Link to="dashboard">
              <button onClick={id => this.handleSubmit(id)}>Submit</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    propName,
    addInput,
    cityInput,
    stateInput,
    zipInput,
    imgUrl,
    mortAmt,
    monthlyRent
  } = state;

  return {
    propName,
    addInput,
    cityInput,
    stateInput,
    zipInput,
    imgUrl,
    mortAmt,
    monthlyRent
  };
};

export default connect(
  mapStateToProps,
  {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    updateImage,
    updateMortgage,
    updateRent
  }
)(Wizard3);
