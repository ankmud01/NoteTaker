const readDbJSONFile = require("../db/readDbJSONFile");
const updateDbJSONFile = require("../db/updateDbJSONFile");


module.exports = function(app){
app.get("/api/notes", function(req,res){
    console.log("Hello Ankit I want logic to read notes");
})
app.post("/api/notes", function(req, res){
    console.log("Hello Ankit, I want logic to write notes");
})
app.delete("/api/notes/:id", function(req, res){
    console.log("Hello Ankit, I want logic to delete a note");
})
}