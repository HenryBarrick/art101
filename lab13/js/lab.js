// index.js - This is code for lab 13 which is focused on using loops.
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: November  2023

$("#button").click(function(){
    for (var itr = 1; itr <= 200; itr++){
        var moth = "";
        
        if ((itr % 3) == 0){
        moth += "Fizz";
        }
        if ((itr % 5) == 0){
        moth += "Buzz";
        }
        if ((itr % 7 ) == 0){
        moth += "Boom";
        }
        if (moth.length <= 0){
        moth = itr;
        }

        $("#output").append("<p>" + moth + "</pl>");
}});

