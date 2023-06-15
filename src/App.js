import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <div className="row">
          <div className="col-md-12">
            <img
              src="https://img.icons8.com/fluency/240/weather-forecast.png"
              alt="weather-forecast"
              className="App-logo"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p id="mainHeading">Weather Forecast</p>
          </div>
        </div>
      </div>
    );
  }
}
