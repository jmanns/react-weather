const React = require('react');

const WeatherIcon = ({iconClass}) => {
  return (
    <div className="weather-display">
      <i className={iconClass}></i>
    </div>
  );
}

module.exports = WeatherIcon;
