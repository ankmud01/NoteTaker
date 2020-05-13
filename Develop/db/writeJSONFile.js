const fs = require("fs");
const path = require("path");
const readNotes = require("../db/readJSONFile");

const notes = "./db.json";
 const writeNotes = (newNote) => {
    fs.writeFileSync(path.join(__dirname, notes), JSON.stringify(newNote),(err, data) =>{
        if(err) throw err;
    })
};
console.log(writeNotes);

module.exports = writeNotes;