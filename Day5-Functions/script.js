// const oddOrEven = (a) => {
//   return a % 2 == 0 ? "Even" : "Odd";
// };

// const multiply = (a, b) => a * b;

// const square = (a) => multiply(a, a);

// Function Expression
function oddOrEven(a) {
  return a % 2 == 0 ? "Even" : "Odd";
}

function multiply(a, b) {
  return a * b;
}

function square(a) {
  return multiply(a, a);
}

// Function Declarations
const maxNumber = function (a, b) {
  console.log(a > b ? `${a}` : `${b}` + "is greater");
};

const concat = function (str1, str2) {
  console.log(str1 + str2);
};

// Arrow Functions
const sum = (a, b) => {
  console.log(a + b);
};

const doesContains = function (str, char) {
  return str.includes(char);
};

const doesContains2 = function (str, char) {
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == char) return true;
  }
  return false;
};

const product = function (a, b = 3) {
  return a * b;
};

const greetings = function (name, age = 20) {
  console.log(`Greetings from ${name} having age ${age}`);
};

// higher order functions
const higherOrderFunc = function (f, number) {
  for (let i = 1; i <= number; i++) {
    f();
  }
};

const higherOrderFunc2 = function (func1, func2, value) {
  //func2(func1(value));
  const result1 = func1(value);
  const result2 = func2(result1);
  return result2;
};

higherOrderFunc2(
  (a) => a * a,
  (a) => a + a,
  10
);
