const React = require('react');

// const About = React.createClass({
//   render() {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

// presentational components like that one above that manages no state
// and only has a render method can be refactored to a stateless
// functional component

const About = props => {
    return (
        <h3>About component</h3>
    );
}

module.exports = About;
