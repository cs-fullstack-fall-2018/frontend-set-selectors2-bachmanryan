// Return The First <p> Tag
var firstpTag = document.getElementById("first");
console.log(firstpTag);

var pTag = document.getElementsByTagName("p");
console.log(pTag[0]);

var anotherpTag = document.getElementsByClassName("special");
console.log(anotherpTag[0]);


//Print the Special Class
var getTheSpecialClass = document.querySelectorAll(".special");
console.log(getTheSpecialClass);

var getTheSpecialClassAgain = document.querySelector(".special");
console.log(getTheSpecialClassAgain);


//Change the color of the h1 statement to blue
var geth1Element = document.getElementsByTagName("h1");
geth1Element[0].style.color = "blue";


// Change the color of the last p tag to yellow
var changeTheLastpTag = document.getElementsByTagName("p");
changeTheLastpTag[3].style.color = "yellow";

/*

All correct. From Kenn
*/