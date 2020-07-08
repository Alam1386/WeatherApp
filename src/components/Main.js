import React, { useState } from "react";
import Axios from "axios";
import Context from "../Context";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Content from "./Layout/Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";
function Main() {
  const API_KEY = "";
  const [weather, setWeather] = useState();
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const getWeather = async (e) => {
    e.preventDefault();
    const location = e.target.elements.city.value;
    console.log(location);
    if (!location) {
      return setError(" Please enter the city name"), setWeather(null);
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = Axios.get(url);
    const response = await request;
    console.log(response);
    setError(null);
    setWeather(response.data.main);
    setCity(response.data.name);
  };
  return (
    <div className="main">
      <Header />
      <Content>
        <Context.Provider value={{ getWeather, weather, city }}>
          <WeatherSearch />
          {error !== null && <p>{<Error error={error} />} </p>}
          {weather && <WeatherData />}
        </Context.Provider>
        <Footer />
      </Content>
    </div>
  );
}

export default Main;
