
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open');
  
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Did it work?')
// })

app.use('/', openRoutes);

module.exports = app;