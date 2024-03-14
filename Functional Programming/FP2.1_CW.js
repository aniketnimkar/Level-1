//.Filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const words = ["Apples", "Mango", "Banana", "Orange"];
const longWords = words.filter((word) => word.length > 5);
console.log(longWords);

const numbersArray = [2, -7, 5, 7, -8, -6, 9];

const positiveNumberArray = numbersArray.filter((num) => num > 0);

console.log(positiveNumberArray);

const fruits = ["apple", "kiwi", "orange", "grapes", "melon"];

const fruitsContainA = fruits.filter((fruit) => fruit.includes("a"));
console.log(fruitsContainA);
