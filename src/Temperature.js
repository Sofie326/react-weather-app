import React, {useState} from "react";
import "./Temperature.css";

export default function Temperature(props){
    const[unit,setUnit]=useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius*9)/5+32;
    }
    if (unit==="celsius"){
    return(
        <div  className="Temperature">
              <span>{props.celsius} </span>
              <span >
                <a href="/">
                  °C
                </a>
                | 
                <a href="/" onClick={showFahrenheit} className="active">
                  °F
                </a>
              </span>
            </div>
    )} else{
        return(
        <div  className="Temperature">
              <span>{Math.round(fahrenheit())} </span>
              <span >
                <a href="/" onClick={showCelsius} className="active">
                  °C
                </a>
                |
                <a href="/" >
                  °F
                </a>
              </span>
            </div>
        )}
}