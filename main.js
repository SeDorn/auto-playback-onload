// Auto-Playback-OnLoad
// Created: 13.03.2017
// By: Sebastian Dorn

//TODO: Setup folder where the info.json is located
var URL = "sounds";

window.onload = function(){
    //Request sound list
    get(URL + "/info.json", function(response){
        //Parse sound list to json
        var json = JSON.parse(response);

        //Get a random number from the files on the server
        var random = Math.floor((Math.random() * json.count) + 1);

        //Create stream url from the random file name
        var streamURL = URL + "/" + json[random];

        //Stream the .mp3 file
        var audio = new Audio(streamURL);
        audio.play();
    });
    
}

function get(url, callback)
{
    var xml = new XMLHttpRequest();
    //Call function back when server has responded
    xml.onreadystatechange = function() { 
        if (xml.readyState == 4 && xml.status == 200)
            //Call our old funtion back
            callback(xml.responseText);
    }
    //Open the connection
    xml.open("GET", url, true);
    //Send request
    xml.send(null);
}