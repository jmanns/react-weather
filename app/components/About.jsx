const React = require('react');

// presentational components(manages no state)
// and only have a render method can be refactored to a stateless
// functional component
const About = props => {
    return (
        <h3>About component</h3>
    );
}

module.exports = About;
