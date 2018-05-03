const express = require('express');
const app = express();

var indexRoutes = require('./routes/index');

app.set('view engine', 'ejs');

app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('server started')
});
