import "./App.css";
import SearchBox from "./Components/SearchBox/searchBoxComponent.jsx";
import WeatherCard from "./Components/WeatherCard/weatherCardComponent";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Faisalabad",
      weatherData: {},
    };
  }
  // using XMLHttpRequest
  getWeatherData = () => {
    const xhr = new XMLHttpRequest();
    const url = `https://api.weatherapi.com/v1/current.json?key=7bacfcd5c71e46a4aec62558231506&q=${this.state.city}`;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          this.setState({ weatherData: data });
        } else {
          console.error(`HTTP request failed with status ${xhr.status}`);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  };
  // using modern fetch
  // getWeatherData = () => {
  //   const url = `https://api.weatherapi.com/v1/current.json?key=7bacfcd5c71e46a4aec62558231506&q=${this.state.city}`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ weatherData: data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // using async await
  // getWeatherData = async () => {
  //   try {
  //     const url = `https://api.weatherapi.com/v1/current.json?key=7bacfcd5c71e46a4aec62558231506&q=${this.state.city}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     this.setState({ weatherData: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  onSearch = (event) => {
    event.preventDefault();
    this.getWeatherData();
  };
  onChange = (event) => {
    this.setState({ city: event.target.value });
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
        <br />
        <div className="row">
          <div className="col-md-12">
            <WeatherCard data={this.state.weatherData} />
          </div>
        </div>
      </div>
    );
  }
}
