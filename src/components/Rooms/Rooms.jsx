import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Loading from '../Loading/Loading.jsx';
import './Rooms.css';
const API = require('../../utils/API').default;

//Component to display a list of rooms
export default class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    }
  }

  componentDidMount(){
    API.getRooms().then(rooms => { this.setState({rooms}) });
  }

  render() {
    if(!this.state.rooms.length){
      return (<Loading/>);
    }
    return (
      <div>
        <Navbar/>
        <div className="container my-container">
          <h1 className="text-center mt-5 mb-5">Top 30 Most Popular Rooms</h1>
            {this.state.rooms.map((room, i) => {
              return (
                <div className="row border-top pt-5 pb-5" key={i}>
                  <div className="col-sm">
                    <img className="img-thumbnail img-spot" src={room.mainPhotoUrl} alt=""/>
                  </div>
                  <div className="col-sm mt-3 mt-sm-0">
                    {room.title}
                  </div>
                  <div className="col-sm mt-3 mt-sm-0">
                    <span className="badge-spot badge badge-dark ml-1 float-right float-sm-none">{room.pricePerMonth} €</span>
                  </div>
                  <div className="col-sm mt-3 mt-sm-0">
                    <button className="btn btn-spot-secondary rounded-0 d-none d-sm-block btn-block">More details</button>
                    <button className="btn btn-spot rounded-0 btn-block">Book now!</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
