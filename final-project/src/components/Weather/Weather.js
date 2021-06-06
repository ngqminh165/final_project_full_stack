import React, { useState, useEffect } from "react"
//import "./Weather.css"
import styled from "styled-components"
import cloudImage from "./assets/cloudy.jpg"
import thunderImage from "./assets/thunder.jpg"
import sunnyImage from "./assets/sunny.jpg"
import rainImage from "./assets/rain.jpg"
import snowImage from "./assets/snow.jpg"

const Wrapper = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  -webkit-text-fill-color: ${(props) => props.inputColor || "white"};
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  backgroundrepeat: "no-repeat";
  background-position: "left";
`
const Wrapper2 = styled.div`
  background: transparent;
`

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

  /*
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
  */
  const kelvinToFarenheit = (k) => {
    return ((9 / 5) * (k - 273) + 32).toFixed(2)
  }
  /*
  className={
    typeof weather.weather != "undefined"
      ? weather.weather[0].main === "Rain"
        ? "app rain"
        : "app"
      : "app"
  }
  */

  return (
    <div className="App">
      <Wrapper
        background={
          apiData.weather !== undefined
            ? apiData.weather[0].main === "Rain"
              ? rainImage
              : apiData.weather[0].main === "Thunder"
              ? thunderImage
              : apiData.weather[0].main === "Sunny" ||
                apiData.weather[0].main === "Clear"
              ? sunnyImage
              : apiData.weather[0].main === "Snow"
              ? snowImage
              : cloudImage
            : cloudImage
        }
        inputColor={
          apiData.weather !== undefined
            ? apiData.weather[0].main === "Rain"
              ? "yellow"
              : apiData.weather[0].main === "Thunder"
              ? "white"
              : apiData.weather[0].main === "Sunny"
              ? "black"
              : apiData.weather[0].main === "Snow"
              ? "black"
              : "white"
            : "white"
        }
      >
        <header className="d-flex justify-content-center align-items-center">
          <h2>Today's Weather</h2>
        </header>
        <div className="container">
          <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
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
            <button className="btn btn-primary mt-1" onClick={submitHandler}>
              Search
            </button>
          </div>
          <Wrapper2>
            <div
              className="card mt-4 mx-auto"
              style={{
                background: "transparent",
                width: "60vw",
                border: "transparent",
              }}
            >
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
                        <strong>LOW</strong>
                      </p>
                      <p>
                        <strong> HIGH </strong>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </Wrapper2>
        </div>
      </Wrapper>
    </div>
  )
}

export default Weather