const title = document.querySelector("div.hello:first-child h1");

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