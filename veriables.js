//veriables - They are veru important concep in every programming language that are used to hold (store) data and manipulate them.
//veriables can store valuas and expressions.
//Expressions are something that will evantually resolves to a value.

//Javascript is dynamically Typed programming language.

//Syntax:
//variable_type variable_name (identifier) = (assignment operator) value or expression.

//There are three ways to declare a variables in javascript. They are:-
//1. Var (Pre-ES6)
//2. let (ES6+)
//3. const (ES6+)

//Rules for Identifier:
//1. Identifier should always start with (a-z, A-Z, _, $)
//2. It shouldn't start with number or special characters except($,_).
//3. They are case sensative. It mean x and X are two different.
//4. There shouldn't be space between the identifier.

//Standard Conventions for Identifier in JS.
//1. Variables names should be in camelCase (eg, var myName;)
//2. Identifier must be descriptive and relevent to what kind of values it must hold(store).

//Pascel Case (Every Word First Letter Capital) - oop

//JavaScript is backward compatible pragramming language.

/*
//var vs let vs const
//var - var is used to declare variable which value can or any change overtime in our program.
//2. Variable decaration only possible in var.(eg. var firstName;)
var firstName; // value Decelaration
firstName = "Yujan"; // value assign
//3. Variable re-decleration is possible in var.
// 4. Variable declare with var are hosted
eg: 
        //var address;
    console.log(address); //undefined
    var address = "BKT";
    console.log(address); //BKT

// 5. Var is function scoped
*/ /*

//let - let is used to declare variable which value can or any change overtime in our program.
//2. Variable decaration only possible in let. (eg. let lastName;)
let lastName; // value decelaration
lastName = "Ranjitkar"; //value assign
//3. Variable re-decleration is not possible in let.
// 4. Variable declare with let are not hosted
    eg: 
        console.log(address); //Error
        var address = "BKT";
        console.log(address); //BKT

// 5. let is block scoped

*/ /*
//const - it is used to declare constant veriable.
//2. Variable decaration only is not possible in Constant.(eg. const address;x)
//3. Variable re-decleration is not possible in const.
// 4. Variable declare with const are not hosted
    eg: 
        console.log(address); //Error
        var address = "BKT";
        console.log(address); //BKT

// 5. const is block scoped


*/

// Hoisting -> (It is the default behaviour of JavaScript whhich raise the variable declared with var and function to the top of its scope)

// console.log(address); //undefined
// var address = "BKT";
// console.log(address); //BKT

/*
//Characteristics of variable in JavaScript
1. Mutablity
2. Scope

//Scope: It is the region where the variable is declared 

//There are two types of scope in JS
1. Global Scope (A global variable is accessible from anywhere within the code.)
2. Local Scope (A local variable is only accessible inside its own function and block.)
    //a. Function scope 
    //b. Block scope




*/
