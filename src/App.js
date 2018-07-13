import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes.js';
import Header from './Components/Header/Header';
import store from './ducks/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
                <Link to="/wizardStep1">Wizard</Link>
              </div>
            </nav>
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
