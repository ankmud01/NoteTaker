const fs = require("fs");
const path = require("path");

const notes = "./db.json";
//changing the new note received into string using JSON.stringify and writing the string file into db.json.
 const writeNotes = (newNote) => {
    fs.writeFileSync(path.join(__dirname, notes), JSON.stringify(newNote),(err, data) =>{
        if(err) throw err;
    })
};
// console.log(writeNotes);

module.exports = writeNotes;