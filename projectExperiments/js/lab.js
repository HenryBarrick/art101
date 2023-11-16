// index.js - explanation
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: Novemeber  2023

var nameInput

$("#my-button").click(function(){
    nameInput = prompt("Please input your name :)")
    $("#title").html("Hello, " + nameInput)
})

