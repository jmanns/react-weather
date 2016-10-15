const React = require('react');
const {Link} = require('react-router');

const Examples = props => {
  return (
    <div className="callout">
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=NY">New York</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
        <li>
          <Link to="/?location=Mexico">Mexico</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
