// 1. Given an array of objects representing students, filter out the students with a grade lower than 70%.
const students = [
  { name: "Alice", grade: 80 },

  { name: "Bob", grade: 65 },

  { name: "Charlie", grade: 90 },
];

const filterStudents = students.filter((student) => student.grade < 70);
console.log(filterStudents);
console.log("------------------");

// 2. Given an array of objects representing products, filter out the products with a price higher than $1000.
const products = [
  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Tablet", price: 500 },
];
const filterProductsHigherThan1000 = products.filter(
  (product) => product.price > 1000
);
console.log(filterProductsHigherThan1000);
console.log("------------------");

// 3. Given an array of objects representing employees, filter out the employees with a salary lower than $50,000.
const employees = [
  { name: "Alice", salary: 60000 },

  { name: "Bob", salary: 45000 },

  { name: "Charlie", salary: 70000 },
];

const filterEmployeesLowerThan50000 = employees.filter(
  (employee) => employee.salary < 50000
);
console.log(filterEmployeesLowerThan50000);

console.log("------------------");
// 4. Given an array of objects representing movies, filter out movies with a rating lower than 7.0.
const movies = [
  { title: "Inception", rating: 8.8 },

  { title: "Interstellar", rating: 8.6 },

  { title: "The Dark Knight", rating: 9.0 },
];

const filterMovies = movies.filter((movie) => movie.rating > 7.0);
console.log(filterMovies);

console.log("------------------");
// 5. Given an array of objects representing cars, filter out the cars older than 5 years.

const cars = [
  { brand: "Toyota", year: 2018 },
  { brand: "Honda", year: 2019 },
  { brand: "Ford", year: 2010 },
];
let currentYr = 2024;
const carsOlderthen5yr = cars.filter((car) => {
  return currentYr - car.year <= 5;
});

console.log(carsOlderthen5yr);
console.log("------------------");

// 6. Given an array of objects representing students, filter out the  students with a GPA lower than 3.5.
const students2 = [
  { name: "Alice", gpa: 3.8 },

  { name: "Bob", gpa: 3.2 },

  { name: "Charlie", gpa: 3.9 },
];

const filterGPA = students2.filter((student) => student.gpa < 3.5);
console.log(filterGPA);

console.log("------------------");

// 7. Given an array of objects representing fruits, filter out the fruits with a price higher than $2.00 per pound.
const fruits = [
  { name: "Apple", pricePerPound: 1.5 },

  { name: "Banana", pricePerPound: 2.2 },

  { name: "Orange", pricePerPound: 1.8 },
];

const filterFruits = fruits.filter((fruit) => fruit.pricePerPound > 2.0);
console.log(filterFruits);

console.log("------------------");

// 8. Given an array of objects representing employees, filter out the employees who are not currently employed.
const employees2 = [
  { name: "Alice", employed: true },

  { name: "Bob", employed: false },

  { name: "Charlie", employed: true },
];

const filterNotEmployed = employees2.filter(
  (employee) => employee.employed === false
);
console.log(filterNotEmployed);

console.log("------------------");

// 9. Given an array of objects representing products, filter out the products that are not in stock.
const products2 = [
  { name: "Laptop", inStock: true },

  { name: "Smartphone", inStock: false },

  { name: "Tablet", inStock: true },
];

const filterProducts = products2.filter((product) => product.inStock === false);
console.log(filterProducts);

console.log("------------------");
// / 10. Given an array of objects representing laptops, filter out the laptops with a screen size less than 15 inches.
const laptops = [
  { brand: "Dell", screenSize: 14 },

  { brand: "HP", screenSize: 15.6 },

  { brand: "Lenovo", screenSize: 13 },

  { brand: "Acer", screenSize: 17 },
];

const filterLaptops = laptops.filter((laptop) => laptop.screenSize < 15);
console.log(filterLaptops);
