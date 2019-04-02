import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Rooms from './components/Rooms/Rooms.jsx';
import './App.css';

//Parent component to manage routes & state
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shared: {}
    };
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <Rooms shared={this.state.shared} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}
