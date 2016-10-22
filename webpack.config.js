const webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      WeatherIcon: 'app/components/WeatherIcon.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      ErrorModal: 'app/components/ErrorModal.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx',
      applicationStyles: 'app/css/app.scss',
      weatherStyles: 'app/css/weather-icons.min.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'url-loader'
      }
    ]
  },
  devtool: 'eval-source-map'
};
