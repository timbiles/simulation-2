require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const port = 3001;

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => {
    console.log(err);
  });

  //end-points
app.get('/api/listings', controller.getAll)
app.post('/api/listings', controller.create)
app.delete('/api/listings/:id', controller.del)


app.listen(port, () => {
  console.log(`Listening on Port: ${port}.`);
});
