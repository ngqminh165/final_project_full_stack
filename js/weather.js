//Cody Code Begin
/*
const weatherApiKey = "8d3792116b619ca66e2569b0ec1f39c0"
let wzip = document.getElementById("inputName").value

//Pull data from API
function getWeather() {
  alert("Got to getWeather")
  let wUrl =
    "https://api.openweathermap.org/data/2.5/forecast/daily?zip=" +
    wzip +
    "&appid=" +
    weatherApiKey +
    "}"
  fetch(wUrl)
    .then((response) => response.json())
    .then(function (data) {
      displayWeather(data)
    })
}
*/
//Display Weather to webpage
function displayWeather(d) {
  alert("Got to displayWeather")
  let temp = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32) //Convert Kelvin to Fahrenheit
  console.log(temp)
}

let API_KEY = "8d3792116b619ca66e2569b0ec1f39c0"

function getWeather() {
  let value = document.querySelector("#inputName").value
  if (value.length != 5) return
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    data: {
      zip: value,
      units: "imperial",
      APPID: API_KEY,
    },
    success: (data) => {
      console.log(data["main"]["temp"] + " F")
      let ic = data["weather"][0]["icon"]
      console.log(ic)
      let iUrl = `http://openweathermap.org/img/wn/${ic}@4x.png`
      document.getElementById("weatherIcon").src = iUrl
      document.getElementById("cityName").innerHTML = data["name"]
      document.getElementById("degree").innerHTML = data["main"]["temp"] + " F"
      document.getElementById("descript").innerHTML =
        data["weather"][0]["description"]
    },
  })
}
function getIcon() {}
//function convertTime (API Given in UTC, need to convert to standard date to compare)

//Cody Code End
