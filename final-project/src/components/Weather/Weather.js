import React, { useState } from "react"
import "./Weather.css"
/*
import styled from "styled-components"
import cloudImage from "./assets/cloudy.jpg"
import thunderImage from "./assets/thunder.jpg"
import sunnyImage from "./assets/sunny.jpg"
import rainImage from "./assets/rain.jpg"
import snowImage from "./assets/snow.jpg"

const Weather = () => {
  // State
  const [apiData, setApiData] = useState({})
  const [getState, setGetState] = useState("97266")
  const [state, setState] = useState("97266")
  // API KEY AND URL
  const apiKey = process.env.REACT_APP_API_KEY
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${state}&appid=${apiKey}`

  // API KEY AND URL
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
  }, [apiUrl])

  const inputHandler = (event) => {
    setGetState(event.target.value)
  }

  const submitHandler = () => {
    setState(getState)
  }
  const Wrapper = styled.div`
    background-image: url(${sunnyImage});
  `
  
  const bimage =
    apiData.weather[0].main === "Thunderstorm"
      ? thunderImage
      : apiData.weather[0].main === "Rain"
      ? rainImage
      : apiData.weather[0].main === "Clouds"
      ? cloudImage
      : apiData.weather[0].main === "Snow"
      ? snowImage
      : sunnyImage
  
  const kelvinToFarenheit = (k) => {
    return ((9 / 5) * (k - 273) + 32).toFixed(2)
  }
  return (
    <div className="App">
      <Wrapper>
        <header className="d-flex justify-content-center align-items-center">
          <h2>React Weather App</h2>
        </header>
        <div className="container">
          <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
            <div class="col-auto">
              <label for="location-name" class="col-form-label">
                Enter Zipcode :
              </label>
            </div>
            <div class="col-auto">
              <input
                type="text"
                id="location-name"
                class="form-control"
                onChange={inputHandler}
                value={getState}
              />
            </div>
            <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
            </button>
          </div>

          <div className="card mt-3 mx-auto" style={{ width: "60vw" }}>
            {apiData.main ? (
              <div class="card-body text-center">
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />

                <p className="h2">
                  {kelvinToFarenheit(apiData.main.temp)}&deg; F
                </p>

                <p className="h5">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>{apiData.name}</strong>
                </p>

                <div className="row mt-4">
                  <div className="col-md-6">
                    <p>
                      <i class="fas fa-temperature-low "></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_min)}&deg; F
                      </strong>
                    </p>
                    <p>
                      <i className="fas fa-temperature-high"></i>{" "}
                      <strong>
                        {kelvinToFarenheit(apiData.main.temp_max)}&deg; F
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {" "}
                      <strong>{apiData.weather[0].main}</strong>
                    </p>
                    <p>
                      <strong> USA</strong>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Weather
*/

const Weather = () => {
  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  }
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?zip=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery("")
          console.log(result)
        })
    }
  }

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    console.log(date)
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div
      className={
        typeof weather.weather != "undefined"
          ? weather.weather[0].main === "Rain"
            ? "app rain"
            : "app"
          : "app"
      }
    >
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Type a zip to search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.weather[0] != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)} f</div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="description">{weather.weather[0].description}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}
export default Weather
