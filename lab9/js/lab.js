    // lab.js - This script uses jQuery and Javascript to modify elements on the lab9 index.html page.
    // Author: Henry Tripp Barrick and Tomoya Kato
    // Date: November  2023

    //adds a button after the each section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#problems").append("<button id='button-problems'>Make Special</button>");
    $("#results").append("<button id='button-results'>Make Special</button>");

    //Adds a listener for all button types.
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });
    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });
    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });