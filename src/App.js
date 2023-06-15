import "./App.css";
import SearchBox from "./Components/SearchBox/searchBoxComponent.jsx";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Faisalabad",
      weatherData: {},
    };
  }
  getWeatherData = async () => {
    const url = `https://api.weatherapi.com/v1/current.json?key=7bacfcd5c71e46a4aec62558231506&q=${this.state.city}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  onSearch = (event) => {
    this.getWeatherData();
  };
  onChange = (event) => {
    this.setState({ city: event.target.value });
    console.log(this.state.city);
  };

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
        <div className="row">
          <div className="col-md-12">
            <SearchBox
              placeholder="Enter City Name"
              buttonText="Search"
              onClickHandler={this.onSearch}
              onChangeHandler={this.onChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
