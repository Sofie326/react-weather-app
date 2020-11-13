import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <h2 >Sunday 11 October 10:06</h2>
      <h2>in</h2>
      <h1 >New York</h1>
      <div className="current-weather">
        <div className="row">
          <div className="col-sm">
            <img
              src="http://openweathermap.org/img/wn/01n@2x.png"
              alt="clear sky"
            />
          </div>
          <div className="col-sm">
            <p className="temperature">
              <span>18 </span>
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
            <p >clear sky</p>
          </div>
        </div>
      </div>
    </div>
  );
}
