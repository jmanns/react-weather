const React = require('react');

const WeatherMessage = ({temp, description, location}) => {
  return (
      <h5>It's {temp}&deg; in {location} with {description}.</h5>
  );
}

module.exports = WeatherMessage;
