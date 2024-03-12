// 1. Implement a getUserName function that takes user's first name and  a callback as parameter. Use the getUserName function to use the callback function to display a personalized greeting message with full name of the user.

function getUserName(userName, callback) {
  let message = `Hello, ${userName}`;

  logUserMessage(message);
}

function logUserMessage(message) {
  console.log(message);
}

getUserName("John Doe", logUserMessage);

// 2.  Define a function calculateAge that uses the user's birth year and a callback function as parameters. The calculateAge function should compute the user's age by subtracting the birth year from the current year and then invoke the callback function with the calculated age as an argument. Create a displayAge function that logs a message to the console, such as "You are [age] years old!".

function calculateAge(userDOB, callback) {
  let currentAge = 2024 - userDOB;
  callback(currentAge);
}
function displayAge(currentAge) {
  console.log(`You are ${currentAge} years old!`);
}
calculateAge(1998, displayAge);

console.log("---------------------------");

// 3. Define a function generateUsername that takes the user's first name and a callback function as parameters. The generateUsername function should generate a username by concatenating the first name with a fixed string ("_user") and then invoke the callback function with the generated username as an argument. Create a displayUsername function that logs a message to the console, such as "Your username is: [username].!

function generateUsername(firstName, callback) {
  let userName = `${firstName}_user`;

  callback(userName);
}

function displayUsername(userName) {
  console.log(`Your username is: ${userName}!`);
}

generateUsername("Aniket", displayUsername);

console.log("---------------------------");
// 4. Define a function checkTemperature that takes the current temperature in Celsius and a callback function as parameters. The checkTemperature function should convert the temperature to Fahrenheit and invoke the callback function with the temperature. Create a displayTemperatureMessage function that checks whether it's "Hot," "Moderate," or "Cold" and logs the temperature message to the console. Take temperature argument as 25. Temperature more than 86 is hot. Temperature from 50 to 86 is moderate and temperature below 50 is cold.

function checkTemperature(tempInCelcius, callback) {
  let tempInFehreinheit = (9 / 5) * tempInCelcius + 32;

  callback(tempInFehreinheit);
}

function displayTemperatureMessage(tempInFehreinheit) {
  if (tempInFehreinheit < 50) {
    console.log("The temperature is: Cold");
  } else if (tempInFehreinheit >= 50 && tempInFehreinheit <= 86) {
    console.log("The temperature is: Moderate");
  } else {
    console.log("The temperature is: Hot");
  }
}

checkTemperature(25, displayTemperatureMessage);

console.log("---------------------------");

// 5. Convert the following code into an ES6 code (Arrow Functions).

// function processArray(numbers, callback) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     result.push(callback(numbers[i]));
//   }
//   console.log(result);
// }

// Function to square a number
// function squareNumber(num) {
//   return num * num;
// }

// Array of numbers
// const numbersArray = [1, 2, 3, 4, 5];
// Process the array and square each number
// processArray(numbersArray, squareNumber);

// conversionof the above function into Arrow function(ES6)
const numbersArray1 = [1, 2, 3, 4, 5];

const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const squareNumber = (num) => num * num;

processArray(numbersArray1, squareNumber);

console.log("---------------------------");

// 6. Define a function processArray that takes an array of numbers and a callback function as parameters. The processArray function should iterate over each element in the array using a for loop, apply the callback function to each element (callback function doubles each number), and then log the resulting array to the console. Create a doubleNumber function that doubles a given number.

// Array of numbers
const numbersArray = [2, 4, 6, 8, 10];

// Process the array and double each number
const processArraySum = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};

const doubleNumber = (num) => num + num;

processArraySum(numbersArray, doubleNumber);
