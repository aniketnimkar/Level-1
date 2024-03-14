// 1. Given an array of objects representing students with exam scores, add a new property indicating whether they passed or failed using `.map()`. 60 and above is the passing score.
const students = [
  { name: "Alice", score: 85 },

  { name: "Bob", score: 55 },

  { name: "Charlie", score: 75 },
];

const studentPassOrFaild = students.map((student) => {
  return { ...student, passed: student.score > 60 ? true : false };
});

console.log(studentPassOrFaild);

// 2. Given an array of objects representing songs with durations (in seconds), convert durations to minutes using .map().
const songs = [
  { title: "Bohemian Rhapsody", duration: 367 },

  { title: "Hotel California", duration: 420 },

  { title: "Stairway to Heaven", duration: 482 },
];

const secToMin = songs.map((song) => {
  const minutes = Math.floor(song.duration / 60);
  const secs = song.duration / 60;
  return {
    ...song,
    duration: `${minutes} : ${secs}`,
  };
});
console.log(secToMin);

// 3. Given an array of objects representing employees with monthly salaries, extract the salaries and calculate the annual income using .map().
const employees = [
  { name: "Alice", salary: 50000 },

  { name: "Bob", salary: 60000 },

  { name: "Charlie", salary: 70000 },
];

const annualSalaryEmployees = employees.map((employee) => ({
  ...employee,
  salary: employee.salary / 12,
}));
console.log(annualSalaryEmployees);

console.log("------------------");

// 4. Given an array of objects representing students with ages, extract the ages and classify them as "adult" or "minor" using .map(). 18 and above is an adult.
const newStudents = [
  { name: "Alice", age: 22 },

  { name: "Bob", age: 17 },

  { name: "Charlie", age: 25 },
];

const adultandMinor = newStudents.map((student) => {
  return { ...student, classification: student.age > 18 ? "adult" : "minor" };
});
console.log(adultandMinor);

// 5. Given an array of objects representing employees with salaries, use .map() to add $ sign to the salaries.
const employees2 = [
  { name: "Emily", salary: 60000 },

  { name: "David", salary: 45000 },

  { name: "Grace", salary: 75000 },
];

const employeeWith$sign = employees2.map((employee) => ({
  ...employee,
  salary: `$${employee.salary}`,
}));
console.log(employeeWith$sign);

// 6. Given an array of objects representing products with prices, use .map() to label them as "expensive" or "affordable." Consider products with prices of $100 and above as "expensive."
const products = [
  { name: "Laptop", price: 1200 },

  { name: "Headphones", price: 50 },

  { name: "Smartphone", price: 800 },
];

const labeledProducts = products.map((product) => ({
  name: product.name,
  label: product.price > 100 ? "expensive" : "affordable",
}));
console.log(labeledProducts);

console.log("------------------");

// 7. Given an array of objects representing books with publication years, use .map() to categorise them as "modern" or "classic." Assume books published in or after the year 2000 are considered "modern."
const books = [
  { title: "The Catcher in the Rye", year: 1951 },

  { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },

  { title: "The Hunger Games", year: 2008 },
];

const bookCategory = books.map((book) => ({
  title: book.title,
  category: book.year < 2000 ? "classic" : "modern",
}));
console.log(bookCategory);

// 8. Given an array of objects representing software developers with hourly rates and hours worked per week, use .map() to calculate their annual income. Assume 50 weeks per year.
const developers = [
  { name: "John", hourlyRate: 40, hoursPerWeek: 30 },

  { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },

  { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
];

const developersAnnualIncome = developers.map((developer) => ({
  name: developer.name,
  annualIncome: developer.hoursPerWeek * 50 * developer.hourlyRate,
}));
console.log(developersAnnualIncome);

// 9. Given an array of objects representing sales representatives with monthly commissions, use .map() to calculate their annual income assuming a fixed base salary of $50000.
const salesReps = [
  { name: "David", monthlyCommission: 8000 },

  { name: "Helen", monthlyCommission: 10000 },

  { name: "Ivan", monthlyCommission: 6000 },
];

const salesRepsAnnualIncome = salesReps.map((rep) => ({
  name: rep.name,
  annualIncome: rep.monthlyCommission * 12 + 50000,
}));
console.log(salesRepsAnnualIncome);

// 10. Given an array of objects representing students with scores, use .map() to convert scores to grades based on the grading system (A, B, C, D, F).
const students1 = [
  { name: "Alice", score: 85 },

  { name: "Bob", score: 60 },

  { name: "Charlie", score: 92 },
];

const studentsScore = students1.map((student) => {
  let grade;

  if (student.score >= 90) {
    grade = "A";
  } else if (student.score >= 80 && student.score < 90) {
    grade = "B";
  } else if (student.score >= 70 && student.score < 80) {
    grade = "C";
  } else if (student.score >= 60 && student.score < 70) {
    grade = "D";
  } else {
    grade = "F";
  }
  return { name: student.name, grade: grade };
});
console.log(studentsScore);
