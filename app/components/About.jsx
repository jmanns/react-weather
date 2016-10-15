const React = require('react');

// presentational components(manages no state)
// and only have a render method can be refactored to a stateless
// functional component
const About = props => {
    return (
      <div className="callout">
        <h1 className="text-center page-title">About</h1>
        <p>
          This is a simple weather application built using React JS.
          Here are some of the tools used:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              Javascript framework used.
          </li>
          <li>
            <a href="https://openweathermap.org">Open Weather Map</a> - The API
               being used to search for weather data by city.
          </li>
          <li>
            <a href="http://foundation.zurb.com/">Foundation</a> - was
               used for basic styling.
          </li>
          </ul>
          <p>
            The source code for this project can be viewed on
            <a href="https://github.com/jmanns/react-weather"> GitHub.</a>
          </p>

      </div>
    );
}

module.exports = About;
