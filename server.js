const express = require('express');

// create our app
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('express server is up on port 3000');
});
