const React = require('react');
const WeatherMessage = require('WeatherMessage');
const WeatherForm = require('WeatherForm');
const ErrorModal = require('ErrorModal');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState() {
        return {isLoading: false}
    },
    handleSearch(location) {
        let that = this;

        this.setState({
          isLoading: true,
          errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(temp => {
            that.setState({location, temp, isLoading: false});
        }, err => {
            that.setState({
              isLoading: false,
              errorMessage: err.message
            });
        });
    },
    render() {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage () {
          if (isLoading)
            return <h3 className="text-center">Fetching Weather...</h3>;
          else if (temp && location)
            return <WeatherMessage location={location} temp={temp}/>
        }

        function renderError () {
          if (typeof errorMessage === 'string')
            return (
              <ErrorModal message={errorMessage}/>
            );
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
