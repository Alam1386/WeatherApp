import React, { useContext } from "react";
import Context from "../Context";
function WeatherData() {
  const { weather, city } = useContext(Context);
  const { temp, humidity, pressure, temp_max, temp_min } = weather;
  console.log("Temp", temp);
  return (
    <div className="weather-data">
      <p className="weather-data-text">
        The weather information for{" "}
        <span className="weather-data-city">{city}</span>
      </p>
      <div className="weather-data-row">
        <div className="weather-data-box">
          <h3 className="weather-data-title">Temperature</h3>
          <p className="weather-data-text">{temp}</p>
        </div>
        <div className="weather-data-box">
          <h3 className="weather-data-title">Temp Min</h3>
          <p className="weather-data-text">{temp_min}</p>
        </div>
        <div className="weather-data-box">
          <h3 className="weather-data-title">Temp Max</h3>
          <p className="weather-data-text">{temp_max}</p>
        </div>
        <div className="weather-data-box">
          <h3 className="weather-data-title">Humidity</h3>
          <p className="weather-data-text">{humidity}</p>
        </div>
        <div className="weather-data-box">
          <h3 className="weather-data-title">Pressure</h3>
          <p className="weather-data-text">{pressure}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
