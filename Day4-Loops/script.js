for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`The total sum is ${sum}`);

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

let k = 10;
let fact = 1;
do {
  fact *= k;
  k--;
} while (k >= 1);

console.log(`The factorial of 10 is ${fact}`);

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
