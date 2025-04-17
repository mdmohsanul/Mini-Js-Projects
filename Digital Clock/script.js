const currTime = document.querySelector("#time");
const currLocation = document.querySelector("#location");

let latitude;
let longitude;
const successCallback = (position) => {
  console.log(position);
  console.log(position.coords.latitude);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
};

console.log(latitude);
const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

var time = new Date().toLocaleTimeString();
console.log(time);

currTime.innerHTML = time;

async function getCityName() {
  let res = await fetch(
    "http://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      latitude +
      "," +
      longitude +
      "&sensor=true"
  );
  let data = await res.json();
  return data;
}

console.log(getCityName());
