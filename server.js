// First off, I wanna import some modules, then create variables, as well as define them.
const express = require("express");
const path = require('path');
// this is the environment variable i wanna get
require("dotenv").config();

const app = express();

//Now what I want to do is use express.static to bring a static website.
app.use(express.static(path.join(__dirname, "public")));
// ^ this is the middleware to load up my static page.

// I wanna make it so that it shows an error if you type in any other endpoint.
app.use(function(req, res, next) {
  res.status(404);
  res.send("404: File Not Found.");
});

// Using my environment variable, I will make a port.
const PORT = process.env.PORT || 8080;
// Initially, I assigned the variable PORT using let but then realized that the port should stay consistent without change, so I changed it to const.

// Now I want my app to listen on port 8080
app.listen(PORT, function() {
  console.log(`I am listening on port ${PORT}`);
  //console log to show that it is currently listening on port 8080
});


