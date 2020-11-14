import React, {useState}from "react";
import axios from "axios";
import "./Search.css";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function Search(props) {
  const [weatherData, setWeatherData]= useState({ready:false});
  const[city, setCity]=useState(props.city);
  function handleResponse(response){
    setWeatherData({
      ready:true,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      visibility: response.data.visibility,
      pressure:response.data.main.pressure,
    })
  }
  function search(){
    const apiKey="535a81cfe607afc1ece04c1b6c1aa468";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCity(event){
    setCity(event.target.value);
  }
  if (weatherData.ready){
  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" className="input-bar" onChange={handleCity}/>
        <input type="submit" value="🔍" className="search-button" />
      </form>
      <Weather info={weatherData} />
      <Forecast city={weatherData.city}/>
    </div>

  );} else{
    search();
    return "Loading ...";
  }
}
