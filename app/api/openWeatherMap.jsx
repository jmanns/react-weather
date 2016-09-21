const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=dd0ca4ec80f158fec3b85bf7a6f325d7&units=metric';

module.exports = {
  getTemp(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then( res => {
      if (res.data.cod && res.data.message) {
        console.log('throwing error')
        throw new Error(res.data.message);
      } else {
        console.log('resolving')
        return res.data.main.temp;
      }
    }, res => {
      throw new Error(res.data.message);
    });
  }
}
