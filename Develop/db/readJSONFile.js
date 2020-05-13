const fs = require("fs");
const path = require("path");

// readNotes = console.log("This will have logic to read all notes...")

const notes = "./db.json"
const readNotes =  JSON.parse(fs.readFileSync(path.join(__dirname,notes), (err,data) =>{
            if(err) throw err;
        })
    );
console.log(readNotes);

module.exports = readNotes;