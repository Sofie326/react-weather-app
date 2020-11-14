import React from "react";
import "./ForecastPreview.css";

export default function ForecastPreview(props){
    function hours(){
        let date= new Date(props.data.dt*1000);
        let hours= date.getHours();
        if (hours<10){
            hours=`0${hours}`;
        }
        return `${hours}:00`;
    }
    function temperature(){
        let temperature= Math.round(props.data.main.temp);
        return `${temperature}`;
    }
    function icon(){
        let iconUrl=`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
        return `${iconUrl}`
    }
    return(
    <div className="ForecastPreview col-sm">
          <p>{hours()}</p>
          <hr />
            <img
              src={icon()}
              alt={props.data.weather[0].description}
            />
          <p >{temperature()} °C</p>
    </div>);
}