// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create array variables for our data
// =============================================================
var customers = [
  {
    customerName: "Jane",
    phoneNumber: "7201234567",
    customerEmail: "iamjane@gmail.com",
    customerID: 1,
  },
  
];

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

//will require npm i express in terminal


//create routes for HTML display
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/waitlist", function (req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});

app.get("/api/reserve", function (req, res) {
    return res.json(reserve);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

//create routes for posting data

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
