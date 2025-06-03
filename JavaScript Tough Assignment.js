// ✅ JavaScript Tough Assignment – 40 Questions (Coding 
// Heavy) 

// 🔁 Switch Statement (10 Questions — 7 Coding + 3 Conceptual) 
// 💻 Coding Practice (Q1–Q7) 
// 1.	Write a switch-based calculator supporting +, -, *, /, %, and **.  
function calculator(a, b, operator) {
    switch (operator) { 
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        case '%':
            return a % b;
        case '**':
            return a ** b;
        default:
            return 'Invalid operator';
    }
}

console.log(calculator(5, 3, '+')); 
console.log(calculator(5, 3, '-'));
console.log(calculator(5, 3, '*'));
console.log(calculator(5, 3, '/'));
console.log(calculator(5, 3, '%'));
console.log(calculator(5, 3, '**'));
console.log(calculator(5, 3, 'invalid')); 


 
// 2.	Use switch to print the full name of a month when a number (1–12) is given. 
function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Invalid month number';
    }
}
console.log(getMonthName(1));  
console.log(getMonthName(5));
console.log(getMonthName(12));
console.log(getMonthName(13)); 

 
// 3.	Build a switch block to convert grades (A-F) to performance messages. 
function getPerformanceMessage(grade) {
    switch (grade) {
        case 'A':
            return 'Excellent'; 
        case 'B':
            return 'Good';
        case 'C':       
            return 'Average';
        case 'D':
            return 'Below Average';
        case 'F':   
            return 'Fail';
        default:
            return 'Invalid grade';
    }
}
console.log(getPerformanceMessage('A'));
console.log(getPerformanceMessage('B'));
console.log(getPerformanceMessage('C'));
console.log(getPerformanceMessage('D'));
console.log(getPerformanceMessage('F'));
console.log(getPerformanceMessage('G'));

 
// 4.	Create a switch that checks browser type (Chrome, Firefox, etc.) and prints support message. 
function checkBrowserSupport(browser) {
    switch (browser) {
        case 'Chrome':
            return 'Chrome is supported';
        case 'Firefox':
            return 'Firefox is supported';
        case 'Safari':
            return 'Safari is not supported';
        default:
            return 'Browser not supported';
    }
}   
console.log(checkBrowserSupport('Chrome'));
console.log(checkBrowserSupport('Firefox'));
console.log(checkBrowserSupport('Safari'));
console.log(checkBrowserSupport('Edge'));

 
// 5.	Check whether a number is even or odd using switch and modulo %. 
function checkEvenOdd(number) {
    switch (number % 2) {
        case 0:
            return 'Even';
        case 1:
            return 'Odd';
        default:
            return 'Invalid number';
    }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(0));
console.log(checkEvenOdd(-3));

 
// 6.	Nested switch: Check user role (admin, user) and their action (create, edit, delete). 
function userAction(role, action) {
    switch (role) {
        case 'admin':
            switch (action) {
                case 'create':
                    return 'Admin can create';
                case 'edit':
                    return 'Admin can edit';
                case 'delete':
                    return 'Admin can delete';
                default:
                    return 'Invalid admin action';
            }
        case 'user':
            switch (action) {
                case 'create':
                    return 'User can create';
                case 'edit':
                    return 'User can edit';
                default:
                    return 'Invalid user action';
            }
        default:
            return 'Invalid role';
    }
}
console.log(userAction('admin', 'create'));
console.log(userAction('admin', 'edit'));
console.log(userAction('user', 'create'));
console.log(userAction('user', 'delete'));
console.log(userAction('guest', 'create'));

 
// 7.	Use switch with true to categorize age groups: Child, Teen, Adult, Senior. 
function categorizeAge(age) {
    switch (true) {
        case age < 13:
            return 'Child';
        case age >= 13 && age < 20:
            return 'Teen';
        case age >= 20 && age < 65:
            return 'Adult';
        case age >= 65:
            return 'Senior';
        default:
            return 'Invalid age';
    }
}
console.log(categorizeAge(10));
console.log(categorizeAge(15));
console.log(categorizeAge(30));
console.log(categorizeAge(70));
 
// 🧠 Conceptual (Q8–Q10) 
// 8.	What happens when break is missing in a switch? Explain with example. 
function missingBreakExample(value) {
    switch (value) {
        case 1:
            console.log('One');
        case 2:
            console.log('Two');
        case 3:
            console.log('Three');
        default:
            console.log('Default case');
    }
}
missingBreakExample(1);
// Output:
// One      
// Two
// Three
// Default case
// This shows that without break, execution falls through to subsequent cases.

 
// 9.	Can we place default at the top of the switch block? Show with code. 
 
function defaultAtTopExample(value) {
    switch (value) {
        default:
            console.log('Default case');
        case 1:
            console.log('One');
        case 2:
            console.log('Two');
        case 3:
            console.log('Three');
    }
}
defaultAtTopExample(2);
// Output:
// Default case
// Two
// Three
// This shows that default can be placed at the top, but it executes first if no case matches.

// 10.	Explain fall-through in switch with a multi-case example. 
function fallThroughExample(value) {
    switch (value) {
        case 1:
        case 2:
            console.log('One or Two');
            break;
        case 3:
            console.log('Three');
            break;
        default:
            console.log('Other');
    }
}
fallThroughExample(1);
fallThroughExample(2);
fallThroughExample(3);
// Output:
// One or Two
// One or Two
// Three
// This shows that cases 1 and 2 fall through to the same block, executing the same code.   
  
// ⚙ Higher Order Functions (15 Questions — 12 Coding + 3 Conceptual) 
// 💻 Coding Practice (Q11–Q22) 
// 11.	Use map() to convert an array of numbers into their squares. 
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
}   
console.log(squareNumbers([1, 2, 3, 4, 5]));
// Output: [1, 4, 9, 16, 25]

// 12.    Use filter() to return only the even numbers from an array.
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Output: [2, 4, 6]

// 12.	Use filter() to return only the names longer than 5 characters. 
function filterLongNames(names) {
    return names.filter(name => name.length > 5);
}
console.log(filterLongNames(['Alice', 'Bob', 'Charlotte', 'David']));
// Output: ['Charlotte']

// 13.    Use reduce() to find the sum of all numbers in an array.
function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers([1, 2, 3, 4, 5]));
// Output: 15
 
// 13.	Use reduce() to find the sum of all odd numbers in an array. 
function sumOddNumbers(numbers) {
    return numbers.reduce((sum, num) => num % 2 !== 0 ? sum + num : sum, 0);
}
console.log(sumOddNumbers([1, 2, 3, 4, 5]));
// Output: 9


// 14.    Use reduce() to find the maximum number in an array.
function maxNumber(numbers) {
    return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
}
console.log(maxNumber([1, 2, 3, 4, 5]));
// Output: 5

 
// 14.	Implement your own version of map() called customMap(). 
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
console.log(customMap([1, 2, 3], x => x * 2));
// Output: [2, 4, 6]
 
// 15.	Create a function repeat(fn, n) to call any function n times. 
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
function sayHello() {
    console.log('Hello');
}
repeat(sayHello, 3);
// Output:
// Hello
// Hello
// Hello

 
// 16.	Use forEach() to print the index and value of each array element. 
function printIndexAndValue(array) {
    array.forEach((value, index) => {
        console.log(`Index: ${index}, Value: ${value}`);
    });
}
printIndexAndValue(['a', 'b', 'c']);
// Output:
// Index: 0, Value: a
// Index: 1, Value: b
// Index: 2, Value: c
 
// 17.	Use reduce() to convert an array of strings into a sentence. 
function arrayToSentence(words) {
    return words.reduce((sentence, word) => sentence + ' ' + word, '').trim() + '.';
}

console.log(arrayToSentence(['Hello', 'world', 'this']));
// Output: "Hello world this."

 
// 18.	Filter out all palindromes from a string array. 
function filterPalindromes(words) {
    return words.filter(word => word === word.split('').reverse().join(''));
}
console.log(filterPalindromes(['racecar', 'hello', 'level', 'world']));
// Output: ['racecar', 'level']
 
// 19.	Map through an array of numbers and return strings like “Even” or “Odd”. 
function evenOddStrings(numbers) {
    return numbers.map(num => (num % 2 === 0 ? 'Even' : 'Odd'));
}
console.log(evenOddStrings([1, 2, 3, 4, 5]));
// Output: ['Odd', 'Even', 'Odd', 'Even', 'Odd']

 
// 20.	Use reduce() to count how many times each number appears in an array. 
const nums = [1, 2, 1, 3, 2, 1, 4];
const count = nums.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(count); // { '1': 3, '2': 2, '3': 1, '4': 1 }

 
// 21.	Create a function that accepts another function and applies delay using setTimeout(). 
function delayFunction(fn, time) {
  setTimeout(fn, time);
}
delayFunction(() => console.log("Executed after delay!"), 1000);
// Output: "Executed after delay!" after 1 second

 
// 22.	Filter an array of user objects (with name, age) to return only adults (age > 18). 
const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Carol', age: 19 }
];
const adults = users.filter(user => user.age > 18);
console.log(adults); // [{ name: 'Alice', age: 22 }, { name: 'Carol', age: 19 }]

 
// 🧠 Conceptual (Q23–Q25) 
// 23.	What's the difference between map() and forEach()? Show code example. 
function mapVsForEachExample() {
    const numbers = [1, 2, 3];
    
    // Using map
    const squares = numbers.map(num => num * num);
    console.log('Using map:', squares); // Output: [1, 4, 9]

    // Using forEach
    const results = [];
    numbers.forEach(num => results.push(num * num));
    console.log('Using forEach:', results); // Output: [1, 4, 9]
}
mapVsForEachExample();
// Output:
// Using map: [1, 4, 9]
// Using forEach: [1, 4, 9]

 
// 24.	Why is reduce() called powerful in functional programming? Explain with one-liner code. 
const sum = [1, 2, 3, 4].reduce((a, b) => a + b, 0); // Powerful aggregator
console.log(sum); // 10

 
// 25.	Explain what makes a function “Higher Order” with real code example. 
function higherOrder(fn) {
  fn(); // accepts a function
}

higherOrder(() => console.log("I'm a callback!")); // Function as argument

 
  
// 🧩 Object Methods and this (15 Questions — 11 Coding + 4 Conceptual) 
// 💻 Coding Practice (Q26–Q36) 
// 26.	Create a bankAccount object with deposit() and withdraw() methods using this.
const bankAccount = {
  balance: 0,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    this.balance -= amount;
  }
};

bankAccount.deposit(100);
bankAccount.withdraw(30);
console.log(bankAccount.balance); // 70

 
// 27.	Write an object with name and a method sayHello() that uses this correctly. 
const person = {
  name: 'xyz',
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.sayHello(); // Hello, my name is xyz

 
// 28.	Use Object.keys() to print only the keys of an object dynamically. 
 const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// 29.	Use Object.values() to sum all values of a numeric object. 
const scores = { math: 90, science: 85, english: 80 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total); // 255

 
// 30.	Merge two objects using Object.assign() and print the merged result. 
 const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2 }

// 31.	Freeze an object using Object.freeze() and try modifying it — verify the result. 
 const frozen = Object.freeze({ name: 'John' });
frozen.name = 'Jane'; // Won't change
console.log(frozen.name); // 'John'


// 32.	Seal an object using Object.seal() and test adding & updating keys. 
const sealed = Object.seal({ age: 25 });
sealed.age = 30;         
sealed.name = 'Alice';   
console.log(sealed); // { age: 30 }


 
// 33.	Check if a key exists in an object using hasOwnProperty(). 
const user = { name: 'xyz' };
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age'));  // false


 
// 34.	Build an object with custom methods: add(), subtract(), and call them. 
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(5, 3));     // 8
console.log(calculator.subtract(5, 3)); // 2

 
// 35.	Create a student object with method getDetails() that returns a formatted string. 
const student = {
  name: 'xyz',
  age: 21,
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
};

console.log(student.getDetails()); // xyz is 21 years old.

 
// 36.	Make a method that removes keys with null or undefined values from an object. 

function cleanObject(obj) {
    for (const key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}
const messyObject = { a: 1, b: null, c: 3, d: undefined };
console.log(cleanObject(messyObject)); // { a: 1, c: 3 }

 
// 🧠 Conceptual (Q37–Q40) 
// 37.	Explain the difference between Object.freeze() and Object.seal() with examples. 
function freezeVsSealExample() {
    const obj = { a: 1, b: 2 };

    // Freeze the object
    Object.freeze(obj);
    obj.a = 3; // This will not change the value
    console.log(obj.a); // Output: 1

    // Seal the object
    const sealedObj = { x: 10, y: 20 };
    Object.seal(sealedObj);
    sealedObj.x = 30; // This will change the value
    sealedObj.z = 40; // This will not add a new key
    console.log(sealedObj); // Output: { x: 30, y: 20 }
}
freezeVsSealExample();
// Output:
// Freeze: 1
// Seal: { x: 30, y: 20 }
 
// 38.	What happens if we use arrow function as object method and access this? Show output. 
function arrowFunctionThisExample() {
    const obj = {
        value: 42,
        method: () => {
            console.log(this.value); // this refers to global scope, not obj
        }
    };

    obj.method();
}
arrowFunctionThisExample();
// Output: undefined (or throws an error in strict mode, as this is not defined)
 
 // 39.	Show an example where method is passed as callback and loses this context. 
function methodCallbackExample() {
    const obj = {
        value: 42,
        method: function() {
            console.log(this.value);
        }
    };

    setTimeout(obj.method, 1000); // this will not refer to obj
}
methodCallbackExample();
// Output: undefined



 
// 40.	Explain Object.entries() and its use in converting object to array of key-value pairs. 
function objectEntries(obj) {
    return Object.entries(obj);
}

console.log(objectEntries({ name: 'Alice', age: 25 }));

// Output: [ [ 'name', 'Alice' ], [ 'age', 25 ] ]
    
