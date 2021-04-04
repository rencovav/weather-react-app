import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature" style={{color:'#0b8043'}}>
        {Math.round(props.celsius)}
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
