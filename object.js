//Object:- It is an important non-primitive datatype in JavaScript. Object are special data structure that can hold values in well ordered manner. It can as well hold other complex entities.

//Syntax:- variableType identifier = {key:value, key2:value2, ...., keyN:valueN}

//example object:

// const Person = {
//     firstName: "Yujan",
//     lastName: "Ranjitkar",
//     gender: "Male",
//     address:{
//         temporary:{
//             Street: "Sudal -8",
//             City: "BKT",
//             Province: "Bagmati",
//             Country: "Nepal"
//         },
//         permanent:{
//             Street: "Kotashwor -18",
//             City: "KTM",
//             Province: "Bagmati",
//             Country: "Nepal"
//         }
//     },
//     isMarried: false,
//     birthYear: 2001,
//     age: (currentYear) => currentYear - Person.birthYear
// }

// //here firstName is property and age is method 
// console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === "Male" ? "He" : "She"} is ${Person.isMarried? `` : "not"} Married`)

// console.log(Person.address.temporary.Province)
// console.log(Person['address']['permanent']['Street'])


//Accessing values from an object :
//There are two ways to access values from an object.
//1. Dot Notation 
// console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === "Male" ? "He" : "She"} is ${Person.isMarried? `` : "not"} Married`)

// Yujan Ranjitkar is 23 years old and He is not Married

//2. Bracket Notation
// console.log(Person['lastName']) //Ranjitkar

//Changing or assiging values in object:
//change value
// Person.firstName = "Sam"
// console.log(Person.firstName)// Sam

//add Value
// Person.college = "Mega"
// console.log(Person) 
/*{
    firstName: 'Sam',
    lastName: 'Ranjitkar',
    gender: 'Male',
    address: {
      temporary: {
        Street: 'Sudal -8',
        City: 'BKT',
        Province: 'Bagmati',
        Country: 'Nepal'
      },
      permanent: {
        Street: 'Kotashwor -18',
        City: 'KTM',
        Province: 'Bagmati',
        Country: 'Nepal'
      }
    },
    isMarried: false,
    birthYear: 2001,
    age: [Function: age],
    college: 'Mega'
  }*/

// Nullish Coelscing Assigment: It helps us to assign a variable with null or undefined if it's not 
// Person.firstName ??= "Sam"
// console.log(Person.firstName)// Yujan

// Person.college??= "Mega"
// console.log(Person)
 /*{
    firstName: 'Yujan',
    lastName: 'Ranjitkar',
    gender: 'Male',
    address: {
      temporary: {
        Street: 'Sudal -8',
        City: 'BKT',
        Province: 'Bagmati',
        Country: 'Nepal'
      },
      permanent: {
        Street: 'Kotashwor -18',
        City: 'KTM',
        Province: 'Bagmati',
        Country: 'Nepal'
      }
    },
    isMarried: false,
    birthYear: 2001,
    age: [Function: age],
    college: 'Mega'
  }*/


// const Nepal = {
//     common: "Nepal",
//     official: "Federal Democratic Republic of Nepal",
//     nativeName: {
//         nep: {
//             official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
//             common: "नेपाल"
//         }
//     },
//     startOfWeek: "sunday",
//     capitalInfo: {
//         latlng: [
//             27.72,
//             85.32
//         ]
//     }

// }

// console.log(`The latitude of ${Nepal.nativeName.nep.official} is ${Nepal.capitalInfo.latlng[0]} and longitude is ${Nepal.capitalInfo.latlng[1]}`) 
// //The latitude of नेपाल संघीय लोकतान्त्रिक गणतन्त्र is 27.72 and longitude is 85.32
 
// console.log(`The latitude of ${Nepal['nativeName']['nep']['official']} is ${Nepal['capitalInfo']['latlng']['0']} and longitude is ${Nepal['capitalInfo']['latlng']['1']}`) 
// //The latitude of नेपाल संघीय लोकतान्त्रिक गणतन्त्र is 27.72 and longitude is 85.32


// // New Car Object

// const Car = {
//     model:"Tesla S",
//     manufacturer : "Tesla, Inc.",
//     Producion :"2012 - present",
//     Assembly : {
//         country: {
//             UnitedStates : [
//                 "Fremont",
//                 "California",
//                ],
//             Netherlands :[
//                 "Tilburg"
//             ]
//         }
//     },
//     Designer : "Franz von Holzhausen",
//     bodyStyle : "5-door Liftback sedan",
//     Engine: "3-phase AC induction motor",
//     Battery: "100 kWh",
//     ElectricRange: "320-405 mi (515-652 km)",
//     Related : "Tesla Model X",
//     Dimensions: {
//         Wheelbase : "116.5 in (2,960 mm)",
//         Length: "195.9 in (4,980 mm)",
//         Width : [
//             "77.3 in (1,964 mm) (ex. mirrors)",
//             "86.2 in (2,189 mm) (inc. mirrors)"
//         ],
//         Height : "56.5 in (1,440 mm)",
//         CurbWeight : "4,323–4,960 lb (1,961–2,250 kg)"
//     }
    
// }



//Object Coding Challenge #1
// Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
// this object should also have method for fund deposit, fund withdrawal and fund Check.

// Incase of fund deposit:
// Step: add amount that has been deposited with the current balance and show message

// Incase of fund withdrawal:
// Step1: Check if there's sufficient balance in the account
// Step2: If there's sufficient balance then deduct amount from currentBalance and show message.
// If there's no sufficient balance just show the message

