const React = require('react');

const WeatherMessage = ({temp, location}) => {
  return (
      <p>It's {temp} in {location}!!</p>
  );
}

module.exports = WeatherMessage;
