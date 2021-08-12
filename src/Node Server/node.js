
const express = require('express');
const cors = require('cors');
const app = express();
const mySQL = require('mysql');
var QuoteController = require('./Services/QuoteController');
var LocationController = require('./Services/LocationController');
var TravellerController = require('./Services/TravellerController');

const db = mySQL.createPool({
  host: "localhost",
  user: "user",
  password: "root",
  database: "db-wet-bat"
});
app.use(cors());
app.use(express.json());

QuoteController(app, db);
LocationController(app, db);
TravellerController(app, db);


app.listen(3001, () => {
  console.log('server running port 3001');
});