import React, { Component } from "react";
import "./weatherCardStyle.css";
export default class WeatherCard extends Component {
  render() {
    const { location, current } = this.props.data;
    if (
      location === undefined ||
      location.length === 0 ||
      current === undefined
    ) {
      return <p>Enter a valid city name</p>;
    }
    const { name, region, country } = location;
    const { temp_c, condition, wind_kph, humidity } = current;
    return (
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="card text-center border-primary mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <p id="cityName">{name}</p>
                    <p id="cityRegion">{region}</p>
                    <p id="cityCountry">{country}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p id="cityTemp">{temp_c}°C</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p id="cityCondition">{condition.text}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p id="cityWind">Wind: {wind_kph} kph</p>
                  </div>
                  <div className="col-md-6">
                    <p id="cityHumidity">Humidity: {humidity}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
