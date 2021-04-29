//Cody Code Begin
const weatherApiKey = "8d3792116b619ca66e2569b0ec1f39c0"

//Pull data from API
function getWeather(zip) {
  let wUrl =
    "https://api.openweathermap.org/data/2.5/forecast/daily?zip=${" +
    zip +
    "}&appid=${" +
    weatherApiKey +
    "}"
  fetch(wurl)
    .then((response) => response.json())
    .then(function (data) {
      displayWeather(data)
    })
}

//Display Weather to webpage
function displayWeather(d) {
  let temp = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32)
}

//function convertTime (API Given in UTC, need to convert to standard date to compare)

//Cody Code End
