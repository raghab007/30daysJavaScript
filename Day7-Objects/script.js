// Object Creation and Access
const book = {
  title: "Theory Of Relativity",
  author: ["Albert Einstein", "Raghab Pokhrel"],
  year: 1800,
};

console.log(book.title, book.author);

// Nested Objects
const library = {
  name: "Kathmandu Library",
  books: ["Theory of Relativity", "Atomic Habits"],
};

console.log(library.name, library.books);

// Object Methods
book.bookDetails = function () {
  return `Book title ${this.title}, author:${this.author}`;
};

console.log(book.bookDetails());

book.changeBookYear = function (year) {
  this.year = year;
};

book.changeBookYear(1825);
console.log(book);

for (property in book) {
  console.log(`${property}: ${book[property]}`);
}

