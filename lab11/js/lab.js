// index.js - This code is to return a sorted string from an input field in our html file
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: November 2023

const password = "cemot";

$("#submit").click(function(){
    var name = $("#user-name").val();
    var userNameSorted = sortString(name);

    //hidden moth event, please ignore for grading :3

    $("#output").html("<div class='text'><p>" + userNameSorted + "</p></div>");
    if (userNameSorted.toLowerCase() == password){
        $("#output").html("<div class='text'><p>You just inputted the secret code :smile:</p></div>");
        $("#output").append("<img class='moth-photo' src='./img/cometMoth.jpg'></a></br>");
    }
})

function sortString(inputString){
    return inputString.split('').sort().join('');
}