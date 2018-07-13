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
          <div> {e.name}</div>
          <div>{e.address}</div>
          <div>{e.city}</div>
          <div>{e.state}</div>
          <div>{e.zip}</div>
          <button onClick={id => this.handleDelete(e.product_id)}>
            Remove
          </button>
        </div>
      );
    });
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <Link to="/wizard">
          <button> Add New Property</button>
        </Link>
        <div>{listingMap}</div>
      </Fragment>
    );
  }
}
