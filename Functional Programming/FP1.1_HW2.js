// 1. Given an array of strings, use .map() to extract the first three characters of each string.
const words = ["apple", "banana", "kiwi", "orange", "grape"];

const extractFirstThreeChar = words.map((word) => word.slice(0, 3));
console.log(extractFirstThreeChar);

console.log("------------------");

// 2. Given an array of numbers, use `.map()` to calculate the cube of each number.
const nums = [1, 2, 3, 4, 5];

const cubeArray = nums.map((num) => num ** 3);
console.log(cubeArray);

console.log("------------------");

// 3. Given an array of strings, use .map() to extract the characters of each string removing the first two characters.
const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];

const extractString = fruitsArray.map((fruit) => fruit.slice(2));
console.log(extractString);

console.log("------------------");
// 4. Given an array of salaries, use .map() and return salaries with 10% bonus added.
const salaries = [5000, 7500, 12000, 3000, 9000];

const bonusAdded = salaries.map((salary) => salary * 0.1 + salary);
console.log(bonusAdded);

console.log("------------------");

// 5. Given an array of names, use .map() to create an array of greetings by adding "Hello, " before each name.
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

const greetingsArray = names.map((name) => `Hello, ${name}`);
console.log(greetingsArray);

console.log("------------------");

// 6. Given an array of sentences, use .map() to find the length of each sentence.
const sentences = [
  "Hello, how are you?",
  "JavaScript is fun!",
  "Arrays are versatile.",
];

const sentenceLengthArray = sentences.map((sentence) => sentence.length);
console.log(sentenceLengthArray);

console.log("------------------");

// 7. Given an array of temperatures in Celsius, use map() to convert each temperature to Fahrenheit.
const temperaturesCelsius = [0, 20, 37, -5, 10];

const toFahrenheit = temperaturesCelsius.map((temp) => (temp * 9) / 5 + 32);
console.log(toFahrenheit);

console.log("------------------");

// 8. Given an array of prices, use .map() to apply and return 10% discounted price.
const prices = [50, 75, 120, 30, 90];

const discountedPrice = prices.map((price) => Math.abs(price * 0.1 - price));
console.log(discountedPrice);

console.log("------------------");

// 9. Given an array of decimal numbers, use `.map()` to fix each number to two decimal points.
const decimalNumbers = [50.2456, 750.5677, 12.56705, 300.5065, 9.23406789];

const decimalPoints = decimalNumbers.map((num) => num.toFixed(2));
console.log(decimalPoints);

console.log("------------------");

// 10. Given an array of names, use .map() to create an array with length of each name added to the name.
const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];

const lengthName = namesArray.map((name) => `${name}${name.length}`);
console.log(lengthName);
