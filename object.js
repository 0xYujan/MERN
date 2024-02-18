//Object:- It is an important non-primitive datatype in JavaScript. Object are special data structure that can hold values in well ordered manner. It can as well hold other complex entities.

//Syntax:- variableType identifier = {key:value, key2:value2, ...., keyN:valueN}

//example object:

const Person = {
    firstName: "Yujan",
    lastName: "Ranjitkar",
    gender: "Male",
    address:{
        temporary:{
            Street: "Sudal -8",
            City: "BKT",
            Province: "Bagmati",
            Country: "Nepal"
        },
        permanent:{
            Street: "Kotashwor -18",
            City: "KTM",
            Province: "Bagmati",
            Country: "Nepal"
        }
    },
    isMarried: false,
    birthYear: 2001,
    age: (currentYear) => currentYear - Person.birthYear
}

//here firstName is property and age is method 
console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === "Male" ? "He" : "She"} is ${Person.isMarried? `` : "not"} Married`)

// console.log(Person.address.temporary.Province)
// console.log(Person['address']['permanent']['Street'])


//Accessing values from an object :
//There are two ways to access values from an object.
//1. Dot Notation 
// console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === "Male" ? "He" : "She"} is ${Person.isMarried? `` : "not"} Married`)

// Yujan Ranjitkar is 23 years old and He is not Married

//2. Bracket Notation
console.log(Person['lastName']) //Ranjitkar


