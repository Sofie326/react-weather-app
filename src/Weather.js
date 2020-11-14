import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div className="Weather">
      <h2 >
        <FormattedDate date={props.info.date} /> 
      </h2>
      <h2>in</h2>
      <h1 >{props.info.city}</h1>
      <div className="current-weather">
        <div className="row">
          <div className="col-sm">
            <img
              src={props.info.iconUrl}
              alt={props.info.description}
            />
          </div>
          <div className="col-sm">
            <p className="temperature">
              <span>{props.info.temperature} </span>
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
            <p >{props.info.description}</p>
          </div>
        </div>
      </div>
       <div className="row">
      <div className="col-sm">
        <h3>Humidity</h3>
        <hr />
        <p>
          <span >{props.info.humidity} </span>%
        </p>
      </div>
      <div className="col-sm">
        <h3>Visibility</h3>
        <hr />
        <p>
          <span id="visibility">{props.info.visibility} </span>
          km
        </p>
      </div>
      <div className="col-sm">
        <h3>Wind</h3>
        <hr />
        <p>
          <span >{props.info.wind} </span>
          km/h
        </p>
      </div>
      <div className="col-sm">
        <h3>Pressure</h3>
        <hr />
        <p>
          <span >{props.info.pressure} </span>
          hPa
        </p>
      </div>
    </div>
    </div>
  );
}
