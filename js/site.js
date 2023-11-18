// index.js - purpose and description here
// Author: Your Name
// Date:

//update this with added moth secrets
const password = "lunacomet";

$(".moth-photo").click(function(){
  var input = prompt("What is the password?)");
  input = input.toLowerCase();
  if (input == password)
  {
    $("#links").append("<a href='mothZone/index.html'>Path to the Moth Zone</a>")
  }
})
