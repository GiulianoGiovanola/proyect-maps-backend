// Includes
const express = require("express"),
    app = express(),
    methodOverride = require("method-override"),
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect(
  //'mongodb+srv://maimo:dKiw8vPdNBfIQzRD@cluster0.jkpmu.mongodb.net/gmaps?retryWrites=true&w=majority',
  'mongodb+srv://giulianogiovanola:g46820665@cluster0.cxndw.mongodb.net/markersmap?retryWrites=true&w=majority',
  //'mongodb+srv://giulianofg_:OoES1sRk44gp7eU4@cluster0.hm2zm.mongodb.net/gmaps?retryWrites=true&w=majority',
  //'mongodb+srv://giulianofg_:OoES1sRk44gp7eU4@cluster0.tywl6.mongodb.net/gmaps?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, res) {
      try {
          console.log('Connected to Database');
      } catch (err) {
          console.log(err)
          throw err;
      }
  });

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());
const cors = require('cors')
app.use(cors())

routes = require('./routes/markers')(app);

//Root
app.get('/', function (req, res) {
  res.send("GET request to homepage");
});

app.get('/markers', function (req, res) {
  res.send("GET request to page");
});

/*app.put('/', function (req, res) {
  res.send("PUT request to homepage");
});

app.post('/', function (req, res) {
  res.send("POST request to homepage");
});

app.delete('/', function (req, res) {
  res.send("DELETE request to homepage");
});*/

//Iniciamos el servidor
server.listen(process.env.PORT || 3000, function () {
  console.log("Node server running on http://localhost:3000");
});
module.exports = app;