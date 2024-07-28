// Special operators

// a. Ternary operater: it is a short hand operator used instead of if-else statement
// Sysntax:
// Condition ? rins if condition is true : runs if the condition is false
// Ex
// let age = 30;
// age >= 18
//   ? console.log("You are eligible to vote")
//   : console.log("You cannot vote");

//Example 2
// let message = age >= 18 ? "You are eligible to vote" : "You cannot vote";
// console.log(message);

// nested Ternary Operators
// Syntax:
// condition ? condition ? "true statement ": "false statement " : "statement if initial contition is false"

// let age = 30;
// let isFemale = true;
// let message =
//   age >= 18
//     ? isFemale
//       ? "Can get a free drink"
//       : "Can enter but no free drink"
//     : "Can't enter the club";
// console.log(message);

// b. Nullish Coelscing Operators
// If LHS value or expression is null or undefined, the RHS will be execuite

// let username = null;
// username ?? console.log("Please enter your username");

//Unary Operator:

/*
i. Increment operator(++)
ii. Decrement  operator(--)
iii. Unary +
ex
let x = 5
console.log(+x) // Output: 5
iv. Unary - or Negation Operator
ex
let y = 5
console.log(-y) // Output: -5
V. typeof Operator

//POSTFIX AND PREFIX
POSTFIX
let x = 7
let y = x++
console.log(x) // 8
console.log(y) // 7

PREFIX
let x = 7
let y = ++x
console.log(x) // 8
console.log(y) // 8

*/
