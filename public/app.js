const searchElement = document.querySelector('[data-city-search]');

const searchBox = new google.maps.places.SearchBox(searchElement);

searchBox.addListener('places_changed', () => {
 const place = searchBox.getPlaces()[0];
 if(place == null) return 
 const latitude = place.geometry.location.lat();
 const longitude = place.geometry.location.lng();
 fetch('/weather', {
  method:'POST',
  headers:{
   'Content-Type': 'application/json',
   'Accept': 'application/json'
  },
  body:JSON.stringify({
   latitude:latitude,
   longitude:longitude,
  })
 })
 .then(res => res.json())
 .then(data => {
  setWeatherData(data, place.formatted_adderss)
 })
});

const statusElement = document.querySelector('[data-status]');
const locationElement = document.querySelector('[data-location]');
const wind = document.querySelector('[data-wind]');
const temperature = document.querySelector('[data-temperature]');
const pressure = document.querySelector('[data-pressure]');

function setWeatherData(data,place){
 locationElement.textContent = place;
 statusElement.textContent = data.list[0].weather[0].description;
 wind.textContent = data.list[0].wind.speed;
 temperature.textContent = data.list[0].main.temp;
 precipitation.textContent = data.list[0].main.pressure;
}