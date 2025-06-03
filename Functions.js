
// 📂 Category: Function Statement / Expression / Declaration
// Create a function statement that takes a string and returns the number of vowels present in it.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // Output: 3



// Create a function expression that takes an array of numbers and returns the maximum number.
const findMax = function(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}


console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

// Use a function expression to check if a number is a prime number or not.
const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Output: true

// Write a function declaration that checks whether a given string is an anagram of another.
function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // Output: true


// 📂 Category: Anonymous & Named Function Expressions
// Use an anonymous function inside setInterval to log the current timestamp every 3 seconds.
setInterval(function() {
    console.log("Current Timestamp:", new Date().toISOString());
}
, 3000);
console.log("Logging current timestamp every 3 seconds...");





// Implement a named function expression that recursively calculates the sum of digits of a number.

// Use a named function expression to count the number of words in a string.
const countWords = function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello World! This is a test.")); // Output: 7

// 📂 Category: Parameters vs Arguments
// Create a function generateReport(studentName, totalMarks, grade) that logs a structured report using the passed arguments.
function generateReport(studentName, totalMarks, grade) {
    console.log(`Student Name: ${studentName}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Grade: ${grade}`);
}
generateReport("John Doe", 85, "A"); // Output: Student Name: John Doe, Total Marks: 85, Grade: A

// Write a function that accepts an object as a parameter and destructures it to extract and display user details.
function displayUserDetails({ name, age, email }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}
displayUserDetails({ name: "Alice", age: 30, email: "   alice@example.com    " }); // Output: Name: Alice, Age: 30, Email: alice@example.com
    

// 📂 Category: First-Class Functions
// Write a function that accepts another function as an argument, adds some logging before and after its execution, and then executes it.
function executeWithLogging(func) {
    console.log("Before executing the function...");
    func();
    console.log("After executing the function...");
}
function sayHello() {
    console.log("Hello, World!");
}

executeWithLogging(sayHello); // Output: Before executing the function..., Hello, World!... After executing the function...

// Create a function that returns another function which greets a specific user (closure concept).

// Store multiple functions inside an array and invoke each one in a loop.
const functionsArray = [
    () => console.log("Function 1 executed"),
    () => console.log("Function 2 executed"),
    () => console.log("Function 3 executed")
];
functionsArray.forEach(func => func()); // Output: Function 1 executed, Function 2 executed, Function 3 executed


// 📂 Category: Arrow Functions
// Rewrite a traditional function into an arrow function that checks if a year is a leap year.
const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2020)); // Output: true



// Write an arrow function that filters an array of numbers and returns only those divisible by 3 and 5.
const numbers = [1, 3, 5, 15, 30, 45, 60];
const divisibleBy3And5 = numbers.filter(num => num % 3 === 0 && num % 5 === 0);
console.log(divisibleBy3And5); // Output: [15, 30, 45, 60]

// Use an arrow function with .reduce() to calculate the total price from a list of products (with price field).
const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice); // Output: 600


// 📂 Category: Higher-Order Functions
// Write a function customMap(arr, callback) that mimics the behavior of the native .map() method.
function customMap(arr, callback) {
    const result = [];  
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
console.log(customMap([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]

// Create a function that takes another function and an argument, and applies the function after a delay of 2 seconds.

function delayedExecution(fn, arg) {
    setTimeout(() => fn(arg), 2000);
}
delayedExecution(console.log, "Delayed Hello!"); // Output: Delayed Hello! after 2 seconds



// 📂 Category: Real-world Simulation
// Create a calculator function that takes two numbers and a callback to perform operations like add, subtract, multiply, etc.

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(calculator(5, 3, add)); // Output: 8
console.log(calculator(5, 3, subtract)); // Output: 2


// Write a function fetchUserData(id, callback) that simulates an asynchronous API call using setTimeout.
function fetchUserData(id, callback) {
    setTimeout(() => {
        const fakeData = { id, name: "User " + id };
        callback(fakeData);
    }, 1000);
}
fetchUserData(1, data => console.log(data)); // Output: { id: 1, name: 'User 1' } after 1 second


// 📂 Category: Advanced / Closure + Scoping
// Implement a function that maintains a counter using closure and returns increment/decrement methods.
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.decrement()); // 0




// Create a function secureAccess(role) that returns another function which checks if the user has access based on role (admin, user, guest).
function secureAccess(role) {
    return function (userRole) {
        if (role === userRole) {
            console.log("Access granted.");
        } else {
            console.log("Access denied.");
        }
    };
}
const checkAdmin = secureAccess("admin");
checkAdmin("user");  // Access denied.
checkAdmin("admin"); // Access granted.








