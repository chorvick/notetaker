const fs = require("fs");
const path = require("path");
const db = __dirname + "/../db/db.json"
const { v4: uuidv4 } = require('uuid');
uuidv4();
///You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
/////  package uuid ---NEED TO INSTALL AND LEARN HOW TO WORK ONCE BASIC WEB PAGE FUNCTIONS


module.exports = (app) => {
    // A get request that shows all of the notes data.
    app.get("/api/notes", (req, res) => {
        // Read the db.json file
        fs.readFile(db, "utf-8", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        })
        // Resond with the contents of the file.
    });

    app.post("/api/notes", (req, res) => {
        let new_note = req.body;
        new_note.id = uuidv4()
        // Get the payload of the uncoming note
        // Read the current db
        // Add the payload with a UUID to the parsed DB 
        // Respond with the whole Array
    });


    // A post route to add data to the db.json


    // A Delete route to remoce the note given the UUID
};





