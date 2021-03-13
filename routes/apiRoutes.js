const fs = require("fs");
const path = require("path");
const db = __dirname + "/../db/db.json"
const db2 = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

// uuidv4();
///You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
/////  package uuid ---NEED TO INSTALL AND LEARN HOW TO WORK ONCE BASIC WEB PAGE FUNCTIONS


module.exports = (app) => {
    let notes = JSON.parse(fs.readFileSync(db, "utf8"))
    // A get request that shows all of the notes data.
    app.get("/api/notes", (req, res) => {
        // Read the db.json file
        fs.readFile(db, "utf-8", (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data)) // Respond with the contents of the file.

        })

    });
    /// post request
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        req.body.id = uuidv4();
        db2.push(newNote);
        console.log(db2);

        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db2), (err) => {
            if (err) throw err;
            res.json("response");
        });


    });



    // A Delete route to remoce the note given the UUID

    app.delete("/api/notes/:id", (req, res) => {
        let idDel = req.params.id;

        notes = notes.filter(noteSelected => {
            return noteSelected.id != idDel
        });
        // console.log(id);
        // console.log("api/notes/:id");
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });




};