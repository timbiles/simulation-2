import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

import routes from './routes.js';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <header className="App-header">
              <Header />
            </header>
            <div>
              <Link to="/">House</Link>
              {/* <Link to='/header'>Header</Link> */}
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/wizard">Wizard</Link>
            </div>
          </nav>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
