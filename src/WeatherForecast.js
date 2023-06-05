import React from "react";
import "./WeatherForecast.css"


export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="col WeatherForecast-column">
        <div className="WeatherForecast-day">Tues</div>
       <div className="WeatherForecast-icon">Icon</div>
        <div className="WeatherForecast-temperatures">
          <span className="WeatherForecast-temperature-max">19°</span>{" "}
          <span className="WeatherForecast-temperature-min">10°</span>
      </div>
    </div></div>
  );
}