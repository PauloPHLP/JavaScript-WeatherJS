//Creating Storage class.
class Storage {
  //Creating class constructor.
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Curitiba';
    this.defaultState = 'PR';
  }

  //Method to get the location.
  getLocationData() {
    //Checking the city.
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    //Checking the state.
    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    //Returning results.
    return {
      city: this.city,
      state: this.state
    }
  }

  //Setting location data.
  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}