// index.js - Code used to illustrate principles of callbacks and anonymous functions for lab 8
// Author: Henry Tripp Barrick and Tomoya Kato
// Date: Novemeber  2023

//Variables and function declaration
var array = [1,3,5,7,11,13,17];

function lab8Func(x){
    return (x * x);
}

//writes function called with random number number
console.log(lab8Func(56));
console.log(lab8Func(2));

//Calls it for all values in array
console.log(array.map(lab8Func));

//Makes an anonymous function
console.log(array.map(function(x){
    return (x+10);
}))