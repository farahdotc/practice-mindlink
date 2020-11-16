require('./db/config/index');
const express = require('express'),
  app = express(),
  openRoutes = require('./routes/open');
  
app.use(express.json());

app.use(express.static(__dirname + '../../practice-mindlink'));
// res.sendFile(path.join(__dirname + '../../practice-mindlink/client/src/index.js'));

// app.get('/', (req, res) => {
//   res.send('Did it work?')
// })

app.use('/', openRoutes);

module.exports = app;