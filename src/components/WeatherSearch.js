import React, { useContext } from "react";

import Context from "../Context";

const WeatherSearch = () => {
  const { getWeather } = useContext(Context);
  return (
    <div className="weather-search">
      <form onSubmit={getWeather} className="weather-search-form">
        <input
          autoComplete="off"
          name="city"
          className="weather-search-input"
          type="text"
          placeholder="Enter the city name..."
        />
        <div className="weather-search-submit">
          <button className="weather-search-button">&rarr;</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
