import React from 'react'
import { useApi } from "../../context/ApiContext";
import "./styles.css"

export const CurrentWeather = () => {
  const weather = useApi()

  if(!weather){
    return <p>Loading...</p>
  }

  console.log(weather)
  return (
    <section className="container" >
      <div className="currentWeather--details">
      <h1>{weather.timezone}</h1>
        <h2>Temp</h2>
        <span>{weather.current.temp}°</span>
        <ul className="currentWeather--stats">
          <li>
            <span>Wind </span>
            <span>{weather.current.wind_speed} km/h</span>
          </li>
          <li>
            <span>Humidity </span>
            <span>{weather.current.humidity} %</span>
          </li>
        </ul>
        <div className="currentWeather--actual">
          {weather.current.weather.map((type) => <h3 key={type.id} >{type.main}</h3>)}
        </div>
      </div>
      <div className="currentWeather--img">
        <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="Weather" />
      </div>
    </section>
  )
}