// index.js - This is our code used in lab 7 about functions
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: Novemeber  2023


//uses window.prompt to get user input, then converts this to array, sorts, and rejoins it
function sortUserInput(){
    var userName = window.prompt("Hello Traveler, What is your name so we may be better acquainted? :");
    var nameArray = userName.split("");
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join("");
    return nameSorted;
}

document.writeln("Here is your new name :) -> ",
    sortUserInput(), "</br>");
