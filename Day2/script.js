function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

const remainder = (a, b) => a % b;

console.log(divide(3, 3));
console.log(add(3, 3));
console.log(subtract(3, 3));
console.log(multiply(3, 3));
console.log(remainder(7, 6));

let a = 10;
a += 1;
console.log(a);

let b = 10;
b -= -1;
console.log(b);

console.log(10 > 9);
console.log(10 < 9);

console.log(10 >= 9);
console.log(10 <= 9);

console.log(10 == "10");
console.log(10 === "10");
console.log(10 === 10);

console.log(10 > 9 && 9 > 8);
console.log(10 > 9 || 8 > 9);
console.log(!10 < 9);

console.log(10 > 0 ? "Positive" : "Negative");
