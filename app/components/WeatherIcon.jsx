const React = require('react');

const WeatherIcon = ({iconClass}) => {
  return (
      <i className={iconClass}>weather icon class: {iconClass}</i>
  );
}

module.exports = WeatherIcon;
