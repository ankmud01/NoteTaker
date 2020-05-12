const fs = require("fs");
const path = require("path");

const data = "./db.json";

const readnotes =  JSON.parse(fs.readFileSync(path.join(__dirname,data), (err,data) =>{
            if(err) throw err;
        })
    );
console.log(readnotes);

module.exports = readnotes;