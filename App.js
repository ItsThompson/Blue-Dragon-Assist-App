const express = require("express");
const app = express();
const imageToBase64 = require("image-to-base64");
var ms = require("mediaserver");

var PORT = process.env.PORT || "3000";

app.listen(PORT, function(){
    console.log("Server started");
})

app.get("/homepage/:language", function(req, res){
    if(req.params.language == "english"){
        res.json(
            [
                {
                    "id": 1,
                    "title": "english",
                    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        );
    }
})

app.get("/homepage/:language/:image", function(req, res){
    if(req.params.image){
        imageToBase64("./smiley.jpg")
        .then((response) => {
            res.json({
                Image: response
            });
        })
    }
})

app.get("/audio", function(req, res){
    console.log(ms.mediaTypes);
    ms.pipe(req, res, "audio.mp3");
})

app.get("/video", function(req, res){
    ms.pipe(req, res, "video.mp4", "video/mpeg");
})





//make audio, video requests separate, only one at a time.