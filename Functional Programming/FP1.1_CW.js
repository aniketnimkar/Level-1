// map() method

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByTwo = numbers.map((num) => num * 2);
console.log(numbersMultipliedByTwo);
// console.log(numbers)

//Doubling the array
const numbersArray = [2, 4, 5, 6];
const doubleNumbersArray = numbersArray.map((num) => num * num);
console.log("Doubled Array: ", doubleNumbersArray);

//Capitalize first character of each fruit
const wordsArray = ["Apple", "mango", "orange", "grapes"];

const captalizeWordsArray = wordsArray.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

console.log(captalizeWordsArray);

//change numbers array to string

const numericArray = [1, 2, 3, 4, 5];
const stringArray = numericArray.map((num) => num.toString());
console.log("String Array: ", stringArray);
