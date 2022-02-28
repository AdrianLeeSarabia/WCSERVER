//Activity Name: fileupload.js
//Author Name: Sarabia, Adrian Lee S.
//Section and Code: WD - 202 / 2083

var express = require("express");
var multer = require('multer'); //middleware

var app = express();

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads');
    },
    filename: function(req, file, callback){
        callback(null, file.originalname);
    }
});

var upload = multer({storage : storage}).single('myfile');

app.get('/', function(req,res){
    res.sendFile(__dirname + "/file.html");
});


app.post('/uploaded', function(req,res){
    upload(req, res, function(err){
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded successfully!");
    });
});


app.listen(2000, function(){
    console.log("Server is running on port 2000")
})