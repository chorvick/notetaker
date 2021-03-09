// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const fs = require('fs');
const express = require('express');
const path = require('path');


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//sanity check to make sure server works
app.get("/", (req, res) => {
    res.send(`<h1> this thing works</>`);
});




// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require("./public/assets/js/routes/apiRoutes.js")(app);
// require("./public/assets/js/routes/htmlRoutes")(app);
// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
