var express = require("express")
var app = express()

app.get("/", function(req, res){
    res.send("hello express!")
})

app.listen(80, function(){
    console.log("PORT 80 OPEND")
})