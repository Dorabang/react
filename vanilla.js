// vanilla js

let counter = 0;
const button = document.querySelector("#btn");
const span = document.querySelector("span");

function handleClick() {
  counter = counter+1;
  span.innerHTML = `Total Clicks: ${counter}`;
}

button.addEventListener("click", handleClick);