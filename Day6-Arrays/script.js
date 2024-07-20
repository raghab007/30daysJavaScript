// Arrays creation and access
const nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(nums[0], nums[nums.length - 1]);

// Array Methods (Basic)
nums.push(6);
console.log(nums);
nums.pop();
console.log(nums);
nums.shift();
console.log(nums);
nums.unshift(1);
console.log(nums);

// Array Methods (Intermediate)
const newArr = nums.map((x) => x * 2);
console.log(newArr);
const evenNumbers = nums.filter((x) => x % 2 == 0);
console.log(evenNumbers);
const sum = nums.reduce(
  (accumlator, currentValue) => accumlator + currentValue,
  0
);

// Array Iteration
for (let i = 0; i < nums.length; i++) {
  console.log(i);
}
nums.forEach((x) => {
  console.log(x);
});

// Two Dimensional Array
const twoDiArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
console.log(twoDiArray);

const number = twoDiArray[1][2];
console.log(number);
