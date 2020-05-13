var path = require("path");

module.exports = function(app){

    app.get("/notes", function(req, res){
        // res.send("Here is the list of notes we have created..");
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    app.get("*", function(req, res){
        // res.send("Thank You for visiting us");
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}