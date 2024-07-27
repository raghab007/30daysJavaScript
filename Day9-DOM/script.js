const el1 = document.querySelector("#inner");
el1.textContent = "Javascript Challenge Day 9 DOM";

const el2 = document.querySelector(".container");
el2.style.backgroundColor = "red";

// Creating and appeding child to the body
const newDiv = document.createElement("div");
newDiv.textContent = "Hello Niroj Bro";
document.body.appendChild(newDiv);

// Adding new Li
const newLi = document.createElement("li");
newLi.textContent = "Javascript";
const ul = document.querySelector("ul");
ul.appendChild(newLi);

// Removing elements
const li = document.querySelector("li");
li.remove();

const lastLi = ul.lastChild;
lastLi.remove();

const newButton = document.createElement("button");
const newPara = document.createElement("p");
document.body.appendChild(newButton);
newButton.textContent = "Click me!";
newPara.textContent = "Hello raghab how are doing!";
document.body.appendChild(newPara);
newButton.addEventListener("click", function () {
  if (newPara.textContent == "You are doing well>>>") {
    newPara.textContent = "Hello raghab how are doing!";
  } else {
    newPara.textContent = "You are doing well>>>";
  }
});

newButton.addEventListener("mousehover", function () {
  this.style.border = "100px";
  newPara.style.backgroundColor = "red";
});

const section = document.querySelector(".section");
section.classList.remove("section");
