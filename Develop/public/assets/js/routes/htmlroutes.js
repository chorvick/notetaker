const fs = require("fs");
const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
};
)


app.get("notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./notes.html"));
});