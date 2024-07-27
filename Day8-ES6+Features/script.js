// Template Literals
let naam = "Aastha";
let age = 19;
console.log(`Her name is ${naam} and age ${age}`);

const multiString = `
    Hehehehehehe
    hehehehehehe
    hehehehehehe
`;
console.log(multiString);

// Destructuring
const ourAges = [19, 18, 20];
const [aasthaAge, nirajanAge] = ourAges;
console.log(aasthaAge, nirajanAge);

const book = {
  title: "Theory Of Relativity",
  author: "Albert Einstein",
};

const { title: Title, author: Author } = book;
console.log(`Title: ${Title}, Author: ${Author}`);

// Spread and Rest operators
const newAges = [...ourAges, 54, 42];
console.log("New Ages:", newAges);

function sum(...numbers) {
  let SUM = 0;
  for (let num of numbers) {
    SUM += num;
  }
  return SUM;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Default Parameters
function product(a, b = 1) {
  return a * b;
}

console.log(product(2, 3));
console.log(product(2));

// Enhanced Object Literals
