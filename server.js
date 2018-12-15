//create express server
//will require npm i express in terminal
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

//this || is important for heroku deployment
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//create array variables for our data
var reservations = [
    {
        customerName: "Bob",
        phoneNumber: "3031119923",
        customerEmail: "iambob@gmail.com",
        customerID: 2,
    },

];

var waitlist = [
    {
        customerName: "Pop",
        phoneNumber: "72012345d7",
        customerEmail: "pop@gmail.com",
        customerID: 3,
    },

];

//create routes for HTML display
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

app.post("/api/reservations", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
  
    console.log(reservations.length);
  
    if (reservations.length < 5) {
        reservations.push(newReservation);
      } else {
          waitlist.push(newReservation);
      };
  
    res.json(newReservation);
  });

//listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});