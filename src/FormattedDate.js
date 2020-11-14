import React from "react";

export default function FormattedDate(props){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day=days[ props.date.getDay()];
    let date=props.date.getDate();
    let hours= props.date.getHours();
    if (hours<10){
        hours=`0${hours}`;
    }
    let minutes= props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }
    let months=["January", "February", "March", "April", "May", "Juin", "July", "August", "September", "October", "November", "December"];
    let month= months[props.date.getMonth()];
    return(
        <div>
            {day} {date} {month} {hours}:{minutes}
        </div>
    )
}