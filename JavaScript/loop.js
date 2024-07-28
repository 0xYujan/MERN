// There are three type of lagacy loop in all programming language They are:
// 1. For Loop
// It is the type of loop that is used when the number of iterations in known in advance.
// syntax:
/* for (initialization; condition; increment or decrement) {
    code block to be executed
    } */

//Example 
// WAP to print even number 

// for(let i = 1; i <= 20; i++) {
//     // if(i%2==0){
//     //     console.log(i);
//     // }
//     i%2==0 ? console.log(i) : ""
//     }

// second way 
// for(let i = 2; i<=20; i+=2){
//     console.log(i)
// }


// WAP to print 
//1 is odd because it is not divisible by 2
// 2 is even because it is divisible by 2


// 20 is even because it is divisible by 2

// for(let i=1; i<=20; i++){
//     let msg = i%2==0 ? `${i} is even because it is divisible by 2` : `${i} is odd because it is not divisible by 2`
//     console.log(msg);
// }

// for(let i=1; i<=20; i++){
//     const isEven = i%2==0 
//     console.log(`${i} is ${isEven ?`even`: `odd`} because it is${isEven?``: ` not`} devisible by 2 `)
// }

//create a function that takes a number and given its multiplication table up to 10

// const multiplication = (tableOf, upTo) => {
//     for(let i =1; i<=upTo; i++){
//         console.log(`${tableOf} X ${i} = ${i*tableOf}`)
//     }
// }
// multiplication(4, 19)

// 2. While Loop
//It is a the type of loop that is used when the number of iterations are unknown beforehand.
//Syntax:
// while(condition){
//     //code to be executed while the condition is true
// }

//Example 1:
// let i =1
// while(i<=20){
//     i%2==0 && console.log(i)
//     i++
// }


//Example 2:
// let i = 1
// while(i<=20){
//     const isEven = i%2==0
//     console.log(`${i} is ${isEven ?`Even` : `odd`} because it is${isEven ? `` : ` not`} devisible by 2`)
//     i++
// }

// Infinite while loop:

//











// 3. Do-While Loop
