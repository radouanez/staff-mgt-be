'use strict';
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  const nodeEnv = process.env.NODE_ENV;
  const data = `staff management service in${process.env.DB_URI}`;
  res.status(200).send(data).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});


module.exports = app;