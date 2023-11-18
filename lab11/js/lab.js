// index.js - This code is to return a sorted string from an input field in our html file
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: November 2023

const password = "comet";

$("#submit").click(function(){
    var name = $("#user-name").val();
    var userNameSorted = sortString(name);

    //hidden moth event, please ignore for grading :3
    if (name.toLowerCase() == password){
        $("#output").append("<img class='moth-photo' src='./img/cometMoth.jpg'></a></br>");
        console.log("henlo :3");
    }
    
    $("#output").html("<div class='text'><p>" + userNameSorted + "</p></div>");
})

function sortString(inputString){
    return inputString.split('').sort().join('');
}