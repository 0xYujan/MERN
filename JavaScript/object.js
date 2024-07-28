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


// const Bank ={

    
//     firstName: "Ram ",
//     lastName: "Thapa",
//     accountNo: 19358358,
//     currentBalance: 4000,
//     Fund: {
//         withdrawal: (withdrawalAmount)=> (withdrawalAmount > Bank.currentBalance) ? console.log(`there's no sufficient balance`): console.log(`Amount withdrawal successfuly`),
    
//         deposited: (addAmount)=> {Bank.Fund.currentBalance + addAmount 
//             console.log(`You Amount has been deposited successfuly`)
//         }
// }
//     // statement: 
    
// }

// // // const payment = Bank(1000,2343)
// Bank.Fund.deposited(343)

function Bank(firstName, lastName, accountNo, currentBalance){

    
      this.first_name = firstName,
      this.last_name = lastName,
      this.account_no = accountNo,
      this.current_balance = currentBalance,
      this.transaction = [],
      // this.addAmount = addAmount,

      this.withdrawal = function(withdrawalAmount){
      if(withdrawalAmount > Bank.currentBalance){
        console.log(`there's no sufficient balance`)
      } else{
        Bank.current_balance -= withdrawalAmount;
        this.transaction.push({
          type: "Withdrawal",
          ammount: withdrawalAmount,
          date: Date.now()
        })
        console.log(`Amount withdrawal successfuly`)
    }
  
  },
  this.deposited = function(addAmount) {
    Bank.currentBalance + addAmount
    this.transaction.push({
      type: "Deposited",
      ammount: addAmount,
      date: Date.now()
    }) 
    console.log(`You Amount has been deposited successfuly`)
      },

  this.fundCheck = function(){
    `your total amount is ${currentBalance} `
  },

  this.depositedCheck = function(){
    return this.transaction.filter(t => t.type === 'Deposited')
  }
  this.withdrawalCheck  = ()=> this.transaction.filter(t => t.type === 'Withdrawal')
      
} 
  
const bank = new Bank("Yujan", "Ranjitkar",3433435, 40000)
bank.fundCheck()
bank.deposited(4000)
bank.deposited(300)
bank.withdrawal(4000)

console.log(bank)
console.log(bank.depositedCheck())
console.log(bank.withdrawalCheck())



//There are two ways to create object dynamically in javascript.
//1. Factory Function 
// const Product = (producName, productPrice, productDesc, countInStock, paymentBool) => {
//     return {
//         product_name: producName,
//         product_price: productPrice,
//         product_desc: productDesc,
//         count_in_stock: countInStock,
//         payment_message: ()=> paymentBool ? console.log(`Payment has been received`) : console.log(`Please make a payment.`)

//     }
// }

// const jacket = Product('Nike Jacket', 9000, 'This is very warm jacket', 50, true)
// console.log(jacket)
// jacket.payment_message()


//2. Constructor Functiona

// function Product(producName, productPrice, productDesc, countInStock, paymentBool){
//         this.product_name= producName;
//         this.product_price= productPrice;
//         this.product_desc= productDesc;
//         this.count_in_stock= countInStock
//         this.payment_message= ()=> paymentBool ? console.log(`Payment has been received`) : console.log(`Please make a payment.`)

// }

// const jacket = new Product('Nike Jacket', 9000, 'This is very warm jacket', 50, true)
// console.log(jacket);
// jacket.payment_message()


