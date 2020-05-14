const express = require("express");
const app = express();

//setting up port
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("Develop/public"));

//calling the app function from Routes.js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})
