import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="d-flex current-temp-display">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="weather-icon"
            />

            <div className="weather-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        
          <div className="col-sm-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
          </div>
        
      </div>
    </div>
  );
}
