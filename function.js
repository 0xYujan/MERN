//function: A function is basivally a block of code that can execute a specific task. The value or action performed by a function can be achived when we call or invoke a function. A fuction consits of a function name (to write function names we have to follow the rules of writing identifiers). A function contains a paranthesis where parameters can be contained.

//There are three way to declear a function They are:-
/*
//1. Function Declaration
// function code(){
//     // Code to be execuited
// }

//Example
// function code() {
//   console.log("Hello world");
// }
// code();
// there are two major types of function
//1. Unparameterized function

function codee() {
  console.log("Hello world");
}
codee();

//2. Parameterized function
function code(name) {
  console.log(`Hello ${name}`);
}
code("CODE");

add(2, 4); //This is valid because functions with function declaration are hosted
function add(num1, num2) {
  console.log(num1 + num2);
}



// function check(age) {
//   if (16 > age) {
//     return `you where 16 ${age - 16} years ago`;
//   } else if (age < 16) {
//     return `you will be 16 after ${16 - age} years`;
//   } else {
//     return "You are 16";
//   }
// }

function check(age) {
  let message =
    age >= 16
      ? age < 16
        ? `you are 16 ${age - 16} years ago`
        : `You are 16`
      : `You will be 16 after ${16 - age} years`;
  return message;
}

console.log(check(17));

console.log(check(7));

console.log(check(70));

*/
//2. Function Expression

//3. Arrow Function (ES6+)
//Syntax:
//VariableType identifier = ()=>{}
//KISS Principle -> Keep It Simple Aand Short

// let greeting = () => console.log("Hello World");
// greeting();

// create a arrow function that returns sum of two num
//eg:1

// let sum = (num1, num2) => num1 + num2;
// console.log(sum(5, 8));

//eg:2
// let sum = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(sum(5, 8));

//Create an arrow function that return an string that say "You are eligible to vote " or "you are not eligible to vote " based on passed age via argument

// eg1:
// const vote = (age) => {
//   return age >= 18 ? `You are eligible to vote` : `you are not eligible to vote `;
// };

// eg:2
// const vote = (age) =>
//   age >= 18 ? `You are eligible to vote` : `you are not eligible to vote `;

// console.log(vote(9));
/*
let jhonWeight = 92;
let jhonHeight = 1.95;
let markWeight = 78;
let markHeight = 1.69;

let jhone = jhonWeight / jhonHeight ** 2;
let mark = markWeight / (markHeight * markHeight);

// console.log(jhone);
// console.log(mark);

// let markHigherBMI = mark > jhone;
// console.log(markHigherBMI)

const markHigher = (jhone, mark) =>
  mark > jhone ? `mark Higher ${mark}` : `jhone Higher ${jhone}`;

console.log(markHigher(jhone, mark));
*/

const whoIsWins = (
  Dolphins,
  Koalas,
  team1Scored1,
  team1Scored2,
  team1Scored3,
  team2Scored1,
  team2Scored2,
  team2Scored3
) => {
  let team1Sum = (team1Scored1 + team1Scored2 + team1Scored3) / 3;
  let team2Sum = (team2Scored1 + team2Scored2 + team2Scored3) / 3;

  if (team1Sum >= 100 || team2Sum >= 100) {
    if (team1Sum > team2Sum) {
      console.log(`The ${Dolphins} won!`);
    } else if (team2Sum > team1Sum) {
      console.log(`The ${Koalas} won!`);
    } else {
      console.log("It's a draw!");
    }
  } else {
    console.log("No one won because the minimum score was not reached");
  }
};

whoIsWins("Dolphins", "Koalas", 97, 111, 111, 97, 11, 111);



