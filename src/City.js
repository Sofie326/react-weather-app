import React, { useState} from "react";
import axios from "axios";
import "./City.css";
import FormattedDate from "./FormattedDate";

export default function City(props) {
const [weatherData, setWeatherData]= useState({ready:false});
function handleResponse(response){
  setWeatherData(
    {
      ready:true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].descripiton,
      iconUrl: "http://openweathermap.org/img/wn/01n@2x.png",
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      pressure:response.data.main.pressure,
    })
}
if (weatherData.ready){
  return (
    <div className="City">
      <h2 ><FormattedDate date={weatherData.date}/> </h2>
      <h2>in</h2>
      <h1 >{weatherData.city}</h1>
      <div className="current-weather">
        <div className="row">
          <div className="col-sm">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />
          </div>
          <div className="col-sm">
            <p className="temperature">
              <span>{weatherData.temperature} </span>
              <span >
                <button className="active">
                  °C
                </button>
                |
                <button>
                  {" "}
                  °F
                </button>
              </span>
            </p>
            <hr />
            <p >{weatherData.descripiton}</p>
          </div>
        </div>
      </div>
       <div className="row">
      <div className="col-sm">
        <h3>Humidity</h3>
        <hr />
        <p>
          <span >{weatherData.humidity} </span>%
        </p>
      </div>
      <div className="col-sm">
        <h3>Visibility</h3>
        <hr />
        <p>
          <span id="visibility">{weatherData.visibility} </span>
          km
        </p>
      </div>
      <div className="col-sm">
        <h3>Wind</h3>
        <hr />
        <p>
          <span >{weatherData.wind} </span>
          km/h
        </p>
      </div>
      <div className="col-sm">
        <h3>Pressure</h3>
        <hr />
        <p>
          <span >{weatherData.pressure} </span>
          hPa
        </p>
      </div>
    </div>
    </div>
  );

} else{
  const apiKey="535a81cfe607afc1ece04c1b6c1aa468";
  let city=props.city;
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading ...";
}
  
}
