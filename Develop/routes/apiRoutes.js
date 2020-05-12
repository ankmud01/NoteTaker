const readnotes = require("../db/readDbJSONFile");
const writenote = require("../db/updateDbJSONFile");
const shortid = require("shortid");


module.exports = function(app){
    app.get("/api/notes", function(req,res){
    const db = readnotes;
    res.json(db);
    });

    app.post("/api/notes", function(req, res){
    // console.log("Hello Ankit, I want logic to write notes");
    let unique = shortid.generate();
    console.log (unique);
    
    const newNote = req.body;
    newNote.id = unique;
    console.log(newNote);

    let writeDb = readnotes;
    writeDb.push(newNote);

    writenote(writeDb);
    res.json(writeDb);
    });

    app.delete("/api/notes/:id", function(req, res){
    console.log("Hello Ankit, I want logic to delete a note");
    });
}