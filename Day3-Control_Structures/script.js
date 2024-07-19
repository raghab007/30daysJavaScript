// #Activity 1
let a = 10;
if (a > 0) {
  console.log("Postitive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not elgible to vote");
}
// Activity 2
const x = 10;
const y = 20;
const z = 30;
if (x > y && x > z) {
  console.log("x is greatest");
} else if (y > z && y > x) {
  console.log("y is greatest");
} else {
  console.log("Z is greatest");
}
//  #Activity 3
const day = 1;
switch (day) {
  case 1:
    "Sunday";
    break;
  case 2:
    "Monday ";
    break;
  case 3:
    "Tuesday";
    break;
  case 4:
    "Wednesday";
    break;
  case 5:
    "Thursday";
    break;
  case 6:
    "Friday";
    break;
  case 7:
    "Saturday";
}

// Activity 4
const num = 10;
console.log(num % 2 == 0 ? "Even" : "Odd");

// Activity 5
const year = 2022;
if (year % 4 == 0 && year % 100 != 0 && year % 400 == 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
