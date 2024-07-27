const button1 = document.querySelector("#button1");
const paragraph = document.querySelector("#para");

// Basic Event Handling
button1.addEventListener("click", function () {
  paragraph.textContent = `Hello my name is raghab pokhrel and i want to be a java developer`;
});

const button2 = document.querySelector("#button2");
const image = document.querySelector(".img");
button2.addEventListener("dblclick", function () {
  if (image.style.display == "none") {
    image.style.display = "inline";
  } else {
    image.style.display = "none";
  }
});

// Mouse-Events
const newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.style.height = "100px";
newDiv.style.width = "100px";
newDiv.style.backgroundColor = "green";
newDiv.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.target.value);
});

// Key events

const input2 = document.querySelector(".input");
const p = document.querySelector("#p");
input2.addEventListener("keyup", function () {
  p.textContent = this.value;
});

const allInputs = document.querySelectorAll("input");
allInputs.forEach((input) => (input.style.display = "block"));

// Form events
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.querySelector("#form-input").value);
  console.log(document.querySelector("#form-password").value);
});
