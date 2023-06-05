import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded) { 
  console.log(forecast); 
  return (
    <div className="WeatherForecast">
      <div className="row">
      <div className="col WeatherForecast-column">
       <WeatherForecastDay data={forecast[0]} />
    </div>
    </div>
    </div>
  );
} else {
  let apiKey = "a5c1a8d6ca8307bb18045a8ofa2at259";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
return null;
}
  
 }