//Creating Weather class.
class Weather {
  //Creating the class constructor.
  constructor(city, state) {
    this.apiKey = '99dfe35fcb7de1ee';
    this.city = city;
    this.state = state;
  }

  //Fetching weather from API.
  async getWeather() {
    //Awating for fetch with the API.
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    //Turning the response into a JSON.
    const responseData = await response.json();

    //Return the JSON.
    return responseData.current_observation;
  }

  //Changing weather location.
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}