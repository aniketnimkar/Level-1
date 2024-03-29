// 1. Given an array of numbers, filter the numbers more than 10 into a new array.

const nums = [12, 5, 20, 8, 15, 30];

const numBiggerthen10 = nums.filter((num) => num > 10);
console.log(numBiggerthen10);
// 2. Given an array of strings, filter the strings that contain the letter 'o' into a new array.

const words = ["hello", "world", "apple", "orange", "banana"];

const wordContainO = words.filter((word) => word.includes("o"));
console.log(wordContainO);

// 3. Given an array of numbers, filter the prime numbers into a new array.
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterPrimeNumbers = numbers.filter((num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});

console.log(filterPrimeNumbers);

console.log("----------------");

// 4. Given an array of numbers, filter the numbers that are not multiples of 3 into a new array.
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notMultiplesOf3 = threeMultiples.filter((num) => num % 3 !== 0);
console.log(notMultiplesOf3);

console.log("----------------");

// 5. Given an array of numbers, filter the numbers not divisible by both 2 and 3 into a new array.
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersNotDivisibleBy2And3 = numbs.filter(
  (num) => num % 2 !== 0 && num % 3 !== 0
);
console.log(numbersNotDivisibleBy2And3);

console.log("----------------");

// 6. Given an array of strings, filter the strings that are in uppercase into a new array.
const words2 = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const stringsInUpperCase = words2.filter((word) => word === word.toUpperCase());
console.log(stringsInUpperCase);

console.log("----------------");

// 7. Given an array of strings, filter the strings that do not end with the letter 'y'.
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const filterDoNotEndWithY = wordsY.filter(
  (word) => word.endsWith("y") === false
);
console.log(filterDoNotEndWithY);

console.log("----------------");

// 8. Given an array of numbers, filter the numbers that are multiples of both 2 and 3 into a new array.
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipleOfBoth2And3 = nums2.filter(
  (num) => num % 2 === 0 && num % 3 === 0
);
console.log(multipleOfBoth2And3);

console.log("----------------");

// 9. Given an array of strings, filter the strings that includes the letter 'y' and 'u' into a new array.
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];

const wordsWithYandU = feelingWords.filter(
  (word) => word.includes("y") || word.includes("u")
);
console.log(wordsWithYandU);

console.log("----------------");

// 10.Given an array of numbers, filter the numbers that are multiples of 5 or 3 into a new array.
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesBy5And3 = newNums.filter(
  (num) => num % 5 === 0 || num % 3 === 0
);
console.log(multiplesBy5And3);
