/*const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter(){
    console.log("mouse is here");
    title.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/

/*
const age = parseInt(prompt("How old are you?"));

console.log(typeof age);
*/

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)||age<0) {
    console.log("Please write a number");
}
else if (age<18) {
    console.log("Thank you for writing your age.");
}
else if (age <= 18)