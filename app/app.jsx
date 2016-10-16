const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// load fonts
require('file?emitFile=false!./font/weathericons-regular-webfont.eot');
require('file?emitFile=false!./font/weathericons-regular-webfont.svg');
require('file?emitFile=false!./font/weathericons-regular-webfont.ttf');
require('file?emitFile=false!./font/weathericons-regular-webfont.woff');
require('file?emitFile=false!./font/weathericons-regular-webfont.woff2');

// weather icons css
require('style!css!weatherStyles');

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
