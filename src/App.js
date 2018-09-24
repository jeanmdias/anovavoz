import React, { Component } from 'react';
import './App.css';

import Navbar from './bootstrap-theme-wingman/Navbar';
import SectionHome from './bootstrap-theme-wingman/SectionHome';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="nav-container">
          <div className="bg-dark navbar-dark" data-sticky="top">
            <div className="container">
              <Navbar />
            </div>
          </div>
        </div>
        <div className="main-container">
          <SectionHome />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
