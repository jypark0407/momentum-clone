const keyID = "b3ab48fffb20f496885f11663ff83aff";

// const COORDS = "coords";
function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function handleGeoSuccess(position) {
  console.log(position) // print the position on the console
  const latitude = position.coords.latitude; // assign latitude and loongtitude to the variables
  const longitude = position.coords.longitude;
  const coordsObj = { // assign a JS object of coordinates to be saved on localStorage
    latitude,
    longitude
  }
  localStorage.setItem("coords", JSON.stringify(coordsObj)); // save the coordinates data on localStorage
  getWeather(latitude, longitude); // load weather information with the saved coordinates
  // document.getElementById("weather").innerHTML = weather.main.temp;
  }

const weather = document.getElementById("weather");

function getWeather(lat, long){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${keyID}&units=metric`)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
      })
    // });
}

// function printWeather(weatherfunction){
//   document.getElementById("weather").innerHTML = weatherfunction.main.temp;
//   // document.getElementByID("weather").innerHTML = weatherfunction.weather.0,description;
// }

function handleGeoError() {
  console.log("Can't access geo location");
}

// function loadCoords() {
//   const loadedCords = localStorage.getItem(COORDS);
//   if(loadedCords === null) {
//     askForCoords();
//   } else {
//     const parseCoords = JSON.parse(loadedCoords)
//     console.log(parseCoords);
//   }
// }

askForCoords();
// saveRecords();
