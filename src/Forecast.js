import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="title">
        <h2>Hourly</h2>
        <hr />
      </div>

      <div className="row forecast" id="forecast">
        <div className="col-sm">
          <p className="time">11:00</p>
          <hr />
          <p className="weather-emoji">
            <img
              src="http://openweathermap.org/img/wn/03n@2x.png"
              alt="scattered clouds"
            />
          </p>
          <p className="temperature">19°C</p>
        </div>
        <div className="col-sm">
          <p className="time">14:00</p>
          <hr />
          <p className="weather-emoji">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="broken clouds"
            />
          </p>
          <p className="temperature">18°C</p>
        </div>
        <div className="col-sm">
          <p className="time">17:00</p>
          <hr />
          <p className="weather-emoji">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="broken clouds"
            />
          </p>
          <p className="temperature">17°C</p>
        </div>
        <div className="col-sm">
          <p className="time">20:00</p>
          <hr />
          <p className="weather-emoji">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="broken clouds"
            />
          </p>
          <p className="temperature">19°C</p>
        </div>
        <div className="col-sm">
          <p className="time">23:00</p>
          <hr />
          <p className="weather-emoji">
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="broken clouds"
            />
          </p>
          <p className="temperature">18°C</p>
        </div>
      </div>
    </div>
  );
}
