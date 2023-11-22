/*
Number
JavaScript handles both integers and decimals as numbers.
*/
let age = 40;
let temperature = 25.5;

/*
String
Strings can hold anything from a single character to a whole paragraph.
*/
let name = "Olmes";
let greeting = "Hello, world!";

/*
Boolean
Booleans are great for conditions, like checking if it's sunny or raining.
*/
let isSunny = true;
let isRaining = false;

/*
Null and Undefined
*/
let nothing = null; // You might use this when you intentionally want to say, "There's nothing here."
let notDefined; // If you declare a variable but don't assign a value, it's undefined.

/*
Array
Arrays can store multiple values, making it easy to work with lists of items.
*/
let favoriteFruits = ["Apple", "Banana", "Orange"];

/*
Object
Objects help you organize data with named properties. Here, we have a person with a
name, age, and student status.
*/
let myObject = {
    name: "Olmes",
    age: 25,
    isStudent: true
  };
  
/*
Functions
Functions are a type of data in JavaScript. They can be assigned to variables and passed
around in your code.
*/
let greet = function() {
  console.log("Hello!");
};

/*
Date
The Date type is used for working with dates and times.
*/
let currentDate = new Date();

/*
RegExp (Regular Expression)
Regular expressions are used for pattern matching within strings.
*/
let pattern = /[a-zA-Z]+/;
