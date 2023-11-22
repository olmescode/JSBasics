### Variables and Operations

#### Answers to the questions:

- **What is a variable, and what is it for?**
  Variables are like boxes (memory spaces) where we can store information, depending on the types and data structures supported by our language.

- **Difference between declaring and initializing a variable?**
  Declaring is telling JavaScript we're creating a variable with a specific name. Initializing is giving that variable a value.

- **Difference between adding numbers and concatenating strings?**
  The `+` operator allows us to add numbers and concatenate strings. When used with numbers, it adds them. With strings, it joins (concatenates) them.

#### Naming and data types:

**Number:**
JavaScript handles both integers and decimals as numbers.
```javascript
let age = 40;
let temperature = 25.5;
```

**String:**
Strings can hold anything from a single character to a whole paragraph.
```javascript
let name = "Olmes";
let greeting = "Hello, world!";
```

**Boolean:**
Booleans are great for conditions, like checking if it's sunny or raining.
```javascript
let isSunny = true;
let isRaining = false;
```

**Null and Undefined:**
```javascript
let nothing = null; // You might use this when you intentionally want to say, "There's nothing here."
let notDefined; // If you declare a variable but don't assign a value, it's undefined.
```

**Array:**
Arrays can store multiple values, making it easy to work with lists of items.
```javascript
let favoriteFruits = ["Apple", "Banana", "Orange"];
```

**Object:**
Objects help you organize data with named properties. Here, we have a person with a
name, age, and student status.
```javascript
let myObject = {
    name: "Olmes",
    age: 25,
    isStudent: true
  };
 ```

**Functions:**
Functions are a type of data in JavaScript. They can be assigned to variables and passed
around in your code.
```javascript
let greet = function() {
  console.log("Hello!");
};
```
**Date:**
The Date type is used for working with dates and times.
```javascript
let currentDate = new Date();
```

**RegExp (Regular Expression):**
Regular expressions are used for pattern matching within strings.
```javascript
let pattern = /[a-zA-Z]+/;
```


#### JavaScript code for the variables:

```javascript
let name = 'Juan Sultan';
let lastName = 'Castro Galeas';
let username = 'juandc';
let age = 19;
let email = 'crespo@gmail.xyz';
let isLegalAge = true;
let savedMoney = 1000;
let debts = 100;
```

### Calculations:

```javascript
let fullName = name + ' ' + lastName;
let realMoney = savedMoney - debts;
```

## Functions

### Answering in a nutshell:

- What is a function?
A function is like a recipe – a set of instructions to perform a specific task.

- When is it useful to use a function in my code?
Use functions to avoid repeating code, make it more readable, and organize tasks logically.

- Difference between parameters and arguments of a function?
Parameters are placeholders in a function definition, and arguments are the actual values passed when calling the function.

### Converting code into a function:

```javascript
function introduceYourself(name, lastName, nickname) {
  let completeName = name + ' ' + lastName;
  console.log("My name is " + completeName + ", but I prefer you to call me " + nickname + ".");
}
```

## Conditionals

- What is a conditional?
A conditional is a decision-making structure in code.

- Types of conditionals in JavaScript and differences?
In JavaScript, there are if, else if, and else. They handle different conditions sequentially.

- Can I combine functions and conditionals?
Absolutely, you can use functions to encapsulate tasks within conditionals.

### Replicating switch behavior:

```javascript
const subscriptionType = "Basic";

if (subscriptionType === "Free") {
  console.log("You can only take free courses.");
} else if (subscriptionType === "Basic") {
  console.log("You can take almost all Platzi courses for a month.");
} else if (subscriptionType === "Expert") {
  console.log("You can take almost all Platzi courses for a year.");
} else if (subscriptionType === "ExpertPlus") {
  console.log("You and someone else can take ALL Platzi courses for a year.");
}
```

### Replicating without else and else if:

```javascript
/*
"lookup table" or "dictionary."
It's essentially a mapping between keys (subscription types) and values (associated messages).

This approach leverages the key-based retrieval capabilities of objects, providing a cleaner and more efficient way to manage multiple conditions.

It's a form of "declarative programming" where you declare what should happen for each case rather than explicitly programming the steps to take for each case (as you would with multiple if statements)
*/

// Subscription information object
const subscriptionInfo = {
  Free: "You can only take free courses.",
  Basic: "You can take almost all Platzi courses for a month.",
  Expert: "You can take almost all Platzi courses for a year.",
  ExpertPlus: "You and someone else can take ALL Platzi courses for a year."
};

// Function to check and display subscription information
function checkSubscription(subscriptionType) {
  const message = subscriptionInfo[subscriptionType];
  if (message) {
    console.log(message);
  } else {
    console.log("Invalid subscription type.");
  }
}

// Example usage:
checkSubscription("Free");
checkSubscription("Basic");
checkSubscription("Expert");
checkSubscription("ExpertPlus");
checkSubscription("InvalidType");
```

## Loops

Answering questions:

- What is a loop?
A loop is a way to repeatedly execute a block of code.

- Types of loops in JavaScript?
Common loops are for, while, and do-while.

- What is an infinite loop, and why is it a problem?
An infinite loop never stops, causing the program to run indefinitely, often leading to system or application crashes.

- Can I mix loops and conditionals?
Absolutely, combining loops and conditionals is common for complex logic.

### Converting `for` loops to `while`:

```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log("The value of i is: " + i);
  i++;
}

let j = 10;
while (j >= 2) {
  console.log("The value of j is: " + j);
  j--;
}

```

### Asking users about 2 + 2 until correct:

```javascript
let userAnswer;
do {
  userAnswer = prompt("What is 2 + 2?");
} while (userAnswer !== "4");

alert("Congratulations! You got it right!");
```
## Lists

### Answering questions:

- What is an array?
An array is a data structure that stores a collection of elements.

- What is an object?
An object is a collection of key-value pairs, often representing real-world entities.

- When is it better to use objects or arrays?
Use arrays for ordered lists of similar items; use objects for key-value pairs representing attributes of a single entity.

- Can I mix arrays with objects or even objects with arrays?
Absolutely, you can have arrays of objects or objects containing arrays.

## Creating functions:

### Function to print the first element of any array:
```javascript
let myArray = [1, 2, 3, 4];

function printFirstElement(arr) {
  console.log(arr[0]);
}

printFirstElement(myArray);
```

### Function to print all elements of any array:
```javascript
let anotherArray = ['apple', 'orange', 'banana'];

function printAllElements(arr) {
  for (let element of arr) {
    console.log(element);
  }
}

printAllElements(anotherArray);
```

### Function to print all elements of any object:

```javascript
function printAllObjectElements(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

// Example usage:
let myObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
printAllObjectElements(myObject);
```
