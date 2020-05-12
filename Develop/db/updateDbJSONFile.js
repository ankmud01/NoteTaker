const fs = require("fs");
const path = require("path");

const data = "./db.json";

const writenote = (writeDb) => {
    fs.writeFileSync(path.join(__dirname, data), JSON.stringify(writeDb),(err, data) =>{
        if(err) throw err;
    })
};
// console.log(writenote);

module.exports = writenote;