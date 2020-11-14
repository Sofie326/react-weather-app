import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const[loaded,setLoaded]=useState(false);
  const[forecast,setForecast]=useState(null);
  function handleForecast(response){
    setForecast(response.data);
    setLoaded(true);
  }
  if(loaded && props.city===forecast.city.name){
    return (
    <div className="Forecast">
      <div className="title">
        <h2>Hourly</h2>
        <hr />
      </div>
      <div className="row">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
    </div>
    );
  } else {
  let apiKey="535a81cfe607afc1ece04c1b6c1aa468";
  let apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecast);
  return "Loading...";
  }
 
}
