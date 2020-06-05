//Initializing objects.
const storage = new Storage();

//Getting stored location data.
const weatherLocation = storage.getLocationData();

//Initializing objects.
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

//Getting weather on DOM load.
document.addEventListener('DOMContentLoaded', getWeather);

//Changing location event.
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //Changing the location.
  weather.changeLocation(city, state);

  //Setting location in LS.
  storage.setLocationData(city, state);

  //Getting and displaying weather.
  getWeather();

  //Closing the modal.
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather().then(results => {
      ui.paint(results);
    }).catch(err => console.log(err));
}