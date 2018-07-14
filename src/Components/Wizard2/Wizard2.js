import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import './Wizard2.css';

import { updateImage } from '../../ducks/reducer';

class Wizard2 extends Component {

  render() {
    const { updateImage } = this.props;
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
            <h2>Image URL</h2>
            <input type="text" onChange={e => updateImage(e.target.value)} />
          </div>
          <div>
            <Link to="/wizardStep1">
              <button>Previous Step</button>
            </Link>
            <Link to="/wizardStep3">
              <button>Next Step</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { imgUrl } = state;

  return {
    imgUrl
  };
};

export default connect(
  mapStateToProps,
  { updateImage }
)(Wizard2);
