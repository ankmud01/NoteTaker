const shortid = require("shortid");
const readNotes = require("../db/readJSONFile");
const writeNotes = require("../db/writeJSONFile");

module.exports = function(app){
    app.get("/api/notes", function(req,res){
        res.json(readNotes);
    });

    app.post("/api/notes", function(req, res){
    const newNote = req.body;
    
    //This generates a unique id using shortid package
    const noteId = shortid.generate();
    //Adding id variable to the new note that came from user request
    newNote.id = noteId;
    // console.log(newNote);
    
    //Listing the existing notes prior to adding the new note
    let notes = readNotes;
    // console.log(notes);

    //Push the newnote from request into the file to be written
    notes.push(newNote);
    // console.log(notes);

    //Call write function to add the newnote into the filesystem
    writeNotes(notes);

    //respond with the list of notes added into the file system including the new one
    res.json(notes);
    });

    app.delete("/api/notes/:id", function(req, res){
        const deleteNote = req.params;
        let notes = readNotes;
        //since notes are in array, using filter method to remove the matching note id's...
        const notesToKeep = notes.filter((note) =>note.id !== deleteNote.id)
         // console.log(notesToKeep);
        writeNotes(notesToKeep);
        res.json(notesToKeep);
    });


}
