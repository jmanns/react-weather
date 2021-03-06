const React = require('react');

const WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render() {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="search" placeholder="Search weather by city" ref="location"/>
            <button className="hollow expanded button">Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
