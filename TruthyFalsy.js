// Truthy vs Falsy
// there are 7 falsy values in js, they are 0, -0, 0n, false, undefined, null,NaN, "".

// Except these values all the values in JS are Truthy values.

// if (0) {
//   console.log("0 is truthy");
// } else {
//   console.log("0 is falsy");
// }

//Short Circuting using Logical Operators: It is the practice to write code to get required result based on behavior shown by logical operators.

//Using AND operator
// let age = 17;

// if (age >= 18) {
//   console.log("Go to vote on Mangsir 29");
// } else {
// }

// age >= 18 && console.log("Go to vote on Mangsir 29");

//Using OR operator
let fname = "CODE";
let lname = "BREAKER";

let username = "Paraaa";

// if (username) {
//   document.write(`Welcome ${username}`);
// } else {
//   document.write(`Welcome ${fname} ${lname} ${Date.now()}`);
// }

username = username || `${fname} ${lname}${Date.now()}`;
document.write(`Welcome ${username}`);
