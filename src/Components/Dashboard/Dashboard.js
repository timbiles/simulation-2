import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Dashboard.css';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      listings: []
    };
  }

  componentDidMount() {
    this.getListing();
  }

  getListing = () => {
    axios.get('/api/listings').then(res => {
      console.log(res);
      this.setState({ listings: res.data });
    });
  };

  handleDelete = id => {
    axios.delete(`api/listings/${id}`).then(() => {
      this.getListing();
    });
  };

  render() {
    let { listings } = this.state;

    let listingMap = listings.map((e, i) => {
      return (
        <div key={i} className="dashboard_display">
          <div>
            <img src={e.img} height="200px" width="200px" />
          </div>
          <div>
            <div> Property Name: {e.name}</div>
            <div> Address: {e.address}</div>
            <div> City: {e.city}</div>
            <div> State: {e.state}</div>
            <div> Zip: {e.zip}</div>
          </div>
          <div>
            <div> Mortgage:{e.mortgage}</div>
            <div> Rent:{e.rent}</div>
          </div>
          <button onClick={id => this.handleDelete(e.product_id)}>
            Remove
          </button>
        </div>
      );
    });
    return (
      <Fragment>
        <div className="dashboard_header">
          <h1>Dashboard</h1>
          <Link to="/wizardStep1">
            <button> Add New Property</button>
          </Link>
        </div>
        <div className='dashboard_body'>
          <div>{listingMap}</div>
        </div>
      </Fragment>
    );
  }
}
