import React, { Component } from 'react';
import './Navbar.css';
const CONSTANTS = require('../../utils/constants');

export default class Navbar extends Component {
  render() {
    return (
      <header style={{background: `url(${CONSTANTS.DEFAULT_COVER})`}}>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <span>SPOTAROOM</span>
              <span className="float-right d-none d-sm-block">The company · How we work · Contact us</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
