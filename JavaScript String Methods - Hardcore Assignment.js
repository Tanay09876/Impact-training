// JavaScript String Methods - Hardcore Assignment
// Level: Intermediate to Advanced
// Target Audience: Developers aiming to enhance their understanding of JavaScript String Methods Objective: To focus on logic building, output prediction, and edge case handling using string methods in JavaScript. Number of Questions: 30
// Sections:
// -	Section A: Output-Based Questions
// -	Section B: Logic-Building Tasks
// -	Section C: Trick-Based Deep Output
// Section A: Output-Based Questions (15 Questions)

// 1.
let str = "  HelloWorld ";
console.log(str.trim().toUpperCase().slice(0, 5));

//output: "HELLO"
//explanation: The trim() method removes whitespace from both ends of a string. The toUpperCase() method converts a string to uppercase letters. The slice() method extracts a section of a string and returns

// 2.
let str1 = "JavaScript";
console.log(str1.slice(4, 1));
// Output: "S"
// Explanation: The slice() method extracts a section of a string and returns a new string. The first argument (4) is the start index, and the second argument (1) is the end index. Since the end index is exclusive, it will not include the character at that index.

// 3.
let a = "Learn@Code#123";
console.log(a.replace(/[A-Za-z]/g, "*"));
// Output: "L***C***123"
// Explanation: The replace() method replaces a specified value with another value in a string. The regular expression /[A-Za-z]/g matches any uppercase or lowercase letter. The replacement is done using the asterisk (*) character.

// 4.
let x = "  12345  ";
console.log(x.trim().padStart(10, "0"));
// Output: "000012345"
// Explanation: The trim() method removes whitespace from both ends of a string. The padStart() method adds specified text to the beginning of a string until the length reaches the specified minimum. The asterisk (*) character is used as the padding text.

// 5.
let str2 = "abcabcabc";
console.log(str2.replace("abc", "X"));
// Output: "Xbcabcabc"
// Explanation: The replace() method replaces a specified value with another value in a string. The regular expression /abc/ matches the substring "abc" and replaces it with "X".

//6.
let result = "HelloWorld".charAt(100);
console.log(result.length);
// Output: 0
// Explanation: The charAt() method returns the character at the specified index in a string. Since the index is out of range (100), it returns an empty string. The length property of an empty string is 0.

// 7.
let data = "abc def".split("").reverse().join("");
console.log(data);
// Output: "fedcba"
// Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string.

// 8.
console.log("Ram".concat("123").charAt(5));
// Output: "Ram123"
// Explanation: The concat() method combines two or more strings and returns a new string. The charAt() method returns the character at the specified index in a string.
//9.
let str3 = "banana";
console.log(str3.indexOf("na", 3));
// Output: 4
// Explanation: The indexOf() method returns the first index at which a given element can be found in a string. The second argument (3) specifies the starting index. The function returns the index of the first occurrence of "na" in the string, starting from index 3.

// 10.
console.log("Coding".padEnd(4, "*"));
// Output: "Coding***"
// Explanation: The padEnd() method pads the current string with another string (repeated, if necessary) until the resulting string reaches the specified length. The second argument ("*") specifies the padding text.

// 11.	'
console.log("APPLE".toLowerCase().includes("pp"));

// Output: true
//Explanation: The toLowerCase() method converts a string to lowercase letters. The includes() method returns true if a string contains the specified value, otherwise false. The function checks if the lowercase version of

// 12.	
console.log("12345".repeat(0));

// Output: ""
//Explanation: The repeat() method repeats a string a specified number of times and returns a new string. The argument (0) specifies that the string should be repeated 0 times, resulting in
    






//13. 
let str4 = "  ";
 console.log(str.trim().length); 
//Output: 0
//Explanation: The trim() method removes whitespace from both ends of a string

//  14. 
 let name = "RAM";
  console.log(name.charCodeAt(name.length));
//Output: NaN
//Explanation: The charCodeAt() method returns the Unicode of the character at the specified index

// 15.
 let X = "A" + 1 + 2; 
 console.log(typeof X);
 //Output: "string"
 //Explanation: The + operator concatenates strings, but it also converts numbers to strings.



// Section B: Logic-Building Tasks (10 Questions)
// 1.	Write a function to capitalize the first letter of every word.
         function capitalizeWords(str) {
  return str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
console.log(capitalizeWords("hello world"));
//Output: "Hello World"
//Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The map() method applies a function to each element of an array and returns a new array

// 2.	Write a function that reverses the words in a sentence (not characters).
         function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("hello world"));
 //Output: "world hello"
 //Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string

// 3.    Write a function that checks if a given string is palindrome (without using a loop)
         function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar"));
 //Output: true
 //Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string


// 4.	Write a function to convert "10/06/2025" to "2025-06-10" using string methods only.
         function convertDate(str) {
  let [month, day, year] = str.split("/").map(Number);
  return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}
console.log(convertDate("10/06/2025"));
 //Output: "2025-06-10"
 //Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The map() method applies a function to each element of an array and returns a new array. The join() method joins all elements of an array into a string

// 5.	Write a function to create a masked phone number (e.g., ******3210).
         function maskPhoneNumber(str) {
  return `****${str.slice(-4)}`;
}
console.log(maskPhoneNumber("1234567890"));
 //Output: "****5678"
 //Explanation: The slice() method extracts a section of a string and returns a new string. The last four characters are extracted using the slice(-4) syntax. The template literal `****${str.slice(-4)}` is used to insert the masked phone number into the string


// 6.	Write a function to check if a given email is valid (must contain one @ and one . after @).

function isValidEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

console.log(isValidEmail("test@example.com")); 
// true
//Explanation: The test() method tests for a match in a string against a regular expression. The regular expression /^[^\s@]+@[^\s@]+\.[^\s@]+$/ matches strings

// 7.	Write a function to count the number of vowels in a given string (no loop, use match + regex).
         function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("hello world"));
 //Output: 3

 //Explanation: The match() method retrieves the matches of a regular expression in a string. The /[aeiou]/gi pattern matches any vowel (a, e, i, o, u) in the string, and the g flag makes the search case-insensitive. The || [] operator returns an empty array if the match() method returns null. The length property of the array is then used to count the number of matches.
// 8.	Write a function to return the middle character(s) of a string. If even, return 2 chars; if odd, return
        function getMiddleChars(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return str.substr(mid - 1, 2);
  } else {
    return str[mid];
  }
}

console.log(getMiddleChars("hello world"));
 //Output: "lo"
 //Explanation: The padStart() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The Math.floor() function is used to round down the division result. The substr() method extracts a section of a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string.

// 10. Write a function to find the longest word in a sentence using only string methods and split.
         function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("hello world this is a test sentence"));
 //Output: "sentence"
 //Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The for...of loop iterates over each element of an array. The length property of the element is compared with the length of the longestWord, and if it is greater, the longestWord is updated. The concat() method concatenates strings. The padStart() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the longest word. The === operator checks if two values are equal, and the split() method splits a string into an array of substrings

// 9.	Write a function to remove all non-alphanumeric characters from a string.
         function removeNonAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeNonAlphanumeric("Hello, World! 123"));
 //Output: "HelloWorld123"
 //Explanation: The replace() method replaces a specified value with a new value in a string. The /[^a-zA-Z0-9]/g pattern matches any character that is not a letter or a number, and the g flag makes the search global. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the longest word. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all

// 10.	Write a function to find the longest word in a sentence using only string methods and split.
         function findLongestWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("hello world this is a test sentence"));
 //Output: "sentence"
 //Explanation: The split() method splits a string into an array of substrings based on a specified delimiter. The for...of loop iterates over each element of an array. The length property of the element is compared with the length of the longestWord, and if it is greater, the longestWord is updated. The concat() method concatenates strings. The padStart() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the longest word. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a

 // Section C: Trick-Based Deep Output (5 Questions)

// 1.
 console.log("0".padStart(5, 12345));
 //Output: "123450"
 //Explanation: The padStart() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a
 
 //2. 
 let strl = "abc"; 
 console.log(strl.concat().concat().concat());
 //Output: "abc"
 //Explanation: The concat() method concatenates strings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string.

 // 3. 
 console.log(" hello ".trim().padEnd(10).length); 
 //Output: 10
 //Explanation: The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The
 
 //4. 
 let strl1 = "Banana"; 
 console.log(strl1.replaceAll("a", "").length);
 //Output: 4
 //Explanation: The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The === operator checks if two values are equal. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the


// 5. 
 let s = "level";
 console.log(s === s.split("").reverse().join(""));
//Output: true
 //Explanation: The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The === operator checks if two values are equal. The trim() method removes whitespace from both ends of a string. The padEnd() method pads a string with another string (repeated, if necessary) until the resulting string reaches the specified length. The length property of the string is used to determine the length of the resulting string. The replaceAll() method replaces all occurrences of a specified value with a new value in a string. The concat() method concatenates strings. The split() method splits a string into an array of substrings. The reverse() method reverses the order of the elements in an array. The join() method joins all elements of an array into a string. The replaceAll() method replaces all occurrences of a specified value with a


 
// Bonus
// If you would like, I can provide you with:
// -	Answer Key
// -	Explanation Sheet
// -	Score-Card Logic (Auto-Checker Code)
