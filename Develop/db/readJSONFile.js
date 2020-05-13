const fs = require("fs");
const path = require("path");

const notes = "./db.json"
//reading the notes which is a string from db.json file and parsing the string into JSON
const readNotes =  JSON.parse(fs.readFileSync(path.join(__dirname,notes), (err,data) =>{
            if(err) throw err;
        })
    );
// console.log(readNotes);

module.exports = readNotes;