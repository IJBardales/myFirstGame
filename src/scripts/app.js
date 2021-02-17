//jshint esversion:6
const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});