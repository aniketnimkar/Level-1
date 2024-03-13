// 1. Given an array of objects representing books, extract the titles using `.map()`.
const books = [
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },

  { title: "To Kill a Mockingbird", author: "Harper Lee" },

  { title: "1984", author: "George Orwell" },
];

const bookTitles = books.map((book) => book.title);
console.log(bookTitles);

// 2. Given an array of objects representing fruits, convert their names to uppercase using `.map()`.
const fruits = [
  { name: "apple", color: "red" },

  { name: "banana", color: "yellow" },

  { name: "kiwi", color: "brown" },
];

const uppercaseNames = fruits.map((fruit) => ({
  ...fruit,
  name: fruit.name.toUpperCase(),
}));
console.log(uppercaseNames);

// 3. Given an array of objects representing employees with salaries, increase each salary by 10% using `.map()`.
const employees = [
  { name: "Alice", salary: 50000 },

  { name: "Bob", salary: 60000 },

  { name: "Charlie", salary: 70000 },
];

const increasedSalaryArray = employees.map((employee) => ({
  ...employee,
  salary: (employee.salary * 0.1 + employee.salary).toFixed(2),
}));
console.log(increasedSalaryArray);

console.log("------------------");

// 4. Given an array of objects representing products with prices, apply a 20% discount using `.map()`.
const products = [
  { name: "Laptop", price: 1000 },

  { name: "Smartphone", price: 500 },

  { name: "Headphones", price: 100 },
];

const discountedPriceProducts = products.map((product) => ({
  ...product,
  price: product.price - product.price * 0.2,
}));

console.log(discountedPriceProducts);

console.log("------------------");

// 5. Given an array of objects representing cities with temperatures (in Celsius), convert temperatures to Fahrenheit using `.map()`.
const cities = [
  { name: "New York", temperature: 25 },

  { name: "Los Angeles", temperature: 30 },

  { name: "Chicago", temperature: 20 },
];

const tempInFahrenheit = cities.map((city) => ({
  ...city,
  temperature: (city.temperature * 9) / 5 + 32,
}));
console.log(tempInFahrenheit);

console.log("------------------");

// 6. Given an array of objects representing teachers with monthly salaries, use .map() to calculate their annual income assuming they receive a summer bonus of $500.
const teachers = [
  { name: "Olivia", monthlySalary: 4500 },

  { name: "Paul", monthlySalary: 5500 },

  { name: "Rachel", monthlySalary: 5000 },
];

const teachersAnnualIncome = teachers.map((teacher) => ({
  ...teacher,
  monthlySalary: teacher.monthlySalary * 12 + 500,
}));
console.log(teachersAnnualIncome);

console.log("------------------");

// 7. Given an array of objects representing countries with populations, use .map() to calculate the population density (population per square kilometers). Density is calculated as population / landArea.
const countries = [
  { name: "USA", population: 331000000, landArea: 9833517 },

  { name: "India", population: 1393000000, landArea: 2973190 },

  { name: "Brazil", population: 213993437, landArea: 8515767 },
];

const countriesWithPopularDensity = countries.map((country) => {
  return {
    name: country.name,
    populationDensity: country.population / country.landArea,
  };
});
console.log(countriesWithPopularDensity);
