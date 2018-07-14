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
          <div className="img_display">
            <img src={e.img} height="200px" width="300px" />
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
          {/* <button className='dash_btn' onClick={id => this.handleDelete(e.product_id)}>
            x
          </button> */}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAAAXNSR0IArs4c6QAAAPRJREFUOBHVks0KQUEYhoeV8lOSlegkP1nbuAPZ2NkpO1txBzYWlLKwsnUBbsKGrWLB5pRQygXYeD46pzOnCTt565kz7zvfzDRnRqlfqMCmE8h8sXmKmjHInKfqtGdwg1estWncERpaimmBDbKqX3GCLXT8A47v0tlBwgn4hmAJQ09m7A5IVxCBICxgDgFwpRk3VWpG34ID5KAGd/go2WkDN4iZqqXApCZhFGTyyFRgyqqEFyhCGNYg536rMqNXqHiq5A/LVfQ8mdbN4k4gj8EvuVsb5K41JXF7aGupbvJYOYK7sHOOvl5ndBbpFEoyKi/jD/QAHqIgGPWMguQAAAAASUVORK5CYII="
            alt="delete button"
            class="dash_btn"
            onClick={id => this.handleDelete(e.product_id)}
          />
        </div>
      );
    });
    return (
      <Fragment>
        <div className="dashboard_header">
          <h1>Dashboard</h1>
          <Link to="/wizardStep1">
            <button className='new_btn'> Add New Property</button>
          </Link>
        </div>
        <div className="dashboard_body">
          <div>{listingMap}</div>
        </div>
      </Fragment>
    );
  }
}
