## Array
`Array:` It is a non-primitive datatype. It is a special type of object in JavaScript that is used to store multiple similar valued data in a single variable.

### Example:

```javascript
array of fruits:
let fruits = [ 'apple', 'banana', 'cherry', 'guava', 'watermelon']

array of years:
let years = [2015, 2016, 2017, 2018, 2019 ]

mixed array:
let mixedArray = ['hello', 1010, true, undefined, null, Symbol(1), 200n, fruits, {a:1, b:2}]
```
The data present inside an array are called elements, and each element has its own `index`.
The index of the array always starts from `0`. It means `1st element is represented by a 0 index`, the second element is represented by a `1 index`, and so on.

In JavaScript, array can be created using
#### Array Literals
It is the most common/used way to create an array.
```javascript
VariableType identifier = [el1, el2, ..., elN]
```

#### Array Constructor
Since, array is an special object in javaScript, it can be created using its constructor

`Example: `
```javascript
let brands = new Array('Adidas', 'Nike', 'Gucci', 'Dior', 'Goldstar')
console.log(typeof(brands)) // Object
```

Accessing an element of an array using index

```javascript
console.log(brands[0])
```
Adding elements in an array using an index
```javascript

let cities = []
cities[0] = 'Sydny'
cities[1]= 'Ktm'
cities[2]= 'London'
cities[3]= 'Bkt'
cities[7]= 'Jhapa'
```
## Array Holes
```javascript
console.log(cities) //[ 'Sydny', 'Ktm', 'London', 'Bkt', <2 empty items>, 'Jhapa' ]
```
Array is a special in-built object in javascript. So it has many special methods as well
It is one special property 
`.length`-> it return the length of array
```javascript
console.log(cities.length)//8
```
### methods:
    merhods are functions desined in an object

#### Array methods:
`.indexOf()` -> it returns index of the element passed as an argument. If element doesn't exist it returns -1.
```javascript
console.log(fruits.indexOf('appl')) // -1
console.log(fruits.indexOf('apple')) //0
```

`.includes()` -> it check the existence of element in the array and returns boolean values.
```javascript
console.log(fruits.includes('appl')) // false
console.log(fruits.includes('apple')) // true
```

`ARRAYS THAT MUTATES THE ORIGINAL ARRAY`
<hr>

`.push()` -> it add the element to the end of the array
```javascript
console.log(fruits) //[ 'apple', 'banana', 'cherry', 'guava', 'watermelon' ]
fruits.push('grape', 'Kiwi')
console.log(fruits) //[ 'apple', 'banana', 'cherry', 'guava', 'watermelon', 'grape', 'Kiwi' ]
```
```javascript
let checkReturnedValueOFArray =fruits.push('grape', 'Kiwi')
console.log(fruits) 
console.log(checkReturnedValueOFArray)
```

`.POP()` -> it remove an element from the end of the original array

```javascript
console.log(brands) //[ 'Adidas', 'Nike', 'Gucci', 'Dior', 'Goldstar' ]
let popped1 = brands.pop() //remove element is returned
console.log(popped1) //Goldstar
```

`.shift()` -> It remove elements from the start of the array
```javascript
let fruits = ['apple', 'banana', 'mango', 'guava']
const returenedValue = fruits.shift()
console.log(returenedValue)
console.log(fruits)
```
`.unshift()` -> It adds elements from the start of the array
```javascript
let fruits = ['apple', 'banana', 'mango', 'guava']

const returenedValue = fruits.unshift('kiwi')
console.log(returenedValue)
console.log(fruits)
```
`splice` -> thus method is used to add, remove or replace elements from any position of the array. This method takes the three argument

`1st argument` -> starting index
`2nd argument` -> count fromm the starting index
`3rd argument` -> elements to be added // replaced
```javascript
let fruits = ['apple', 'banana', 'mango', 'guava']

fruits.splice(1,2,) // from 1 index to next two value remove 
OutPut : [ 'apple', 'guava' ]
fruits.splice(1,2, "grapes") // from 1 index to next two value remove and add grapes
OutPut: [ 'apple', 'grapes', 'guava' ]

fruits.splice(1,0, "grapes") // if second argument is 0 then nothing to remove just add "grapes"
OutPut : [ 'apple', 'grapes', 'banana', 'mango', 'guava' ]
console.log(fruits)
```
`.reverse()`-> it reverse the array
```javascript
fruits.reverse();
console.log(fruits)
```
` .sort()` -> it shorts the array in ascending order
```javascript
fruits.sort()
console.log(fruits)
//decending
fruits.sort().reverse()
console.log(fruits)

```
```javascript
//While shorting a numbers array the output is not as we expected.
let num = [4,6,3,1,7,34,68,3,2,76,23,7,9,23,100]
num.sort()
console.log(num) 
/*[
    1, 100, 2, 23, 23, 3,
    3,  34, 4,  6, 68, 7,
    7,  76, 9
  ]*/

To solve this issue .sort() method takes a callback function (specially called compare function) as its argument

let num = [4,6,3,1,7,34,68,3,2,76,23,7,9,23,100]
let output = num.sort((a,b) => a-b)
console.log(output)

string sorting in decending
console.log(fruits.sort((a,b)=> b.localeCompare(a)))

create a function that takes from array and returns its elements from last to first
// let num = [4, 6, 3, 1, 7, 34, 68, 3, 2, 76, 23, 7, 9, 23, 100, 'c'];
let num = ["df","df","dfg"]
function dec(num){
console.log(num.sort((a,b)=>b.localeCompare(a)))
}
dec(num)
```
### Task 1
Create a function that takes an array and return last element of that array

```javascript
let num = [4,6,23,76,3,4,23]
const last = num => num[num.length-1]
console.log(last(num)) 
```
###Methods that does not change the original array:

1.`slice()` -> This methods is used to take a portion of the array. It doesn't mutate the origina array rather it creates a shallow copy of it. It takes two arguments
`1st arg -> Starting index`
`2nd arg -> count of element` (does not include the final element of the count)

```javascript
let fruits = ['apple', 'banana', 'mango', 'guava']
console.log(fruits.slice(1,3))
console.log(fruits)
```

`concat()` -> this methd is used to join two array

```javascript
let a = [23,345,56,34]
let b = [23,46,876,98,2]

console.log(a.concat(fruits))
```
`3. spread operator(...)` -> This opertor is used to copy elements of one array to the another array
```javascript
let toys = ['ball', 'car']
let hobbies = ['reading', 'coding']

let arrayMadeUsingSpreadOperator = [...toys, ...hobbies]
console.log(arrayMadeUsingSpreadOperator)
```


### Create a function that takes array of numbers and return the sum of the number

```javascript
let num = [1,3,4,5,7,8]

const last = num => {
  let sum =0
  for(i=0; i<num.length; i++){
    sum += num[i]
  }
  i++
  return sum
}
console.log(last(num))
```


`MAP ->` This method is used to iterate over the array and change the value of each element present in the array. This method does't mutates the original array. This method returns a new array

This method has a call back function with three arguments and that callback function has three paramaters

1st -> Element
2nd -> index of that Element
3rd -> array itself

```javascript
syntax: array.map((e, i, arr)=>{})
```

## example
```javascript
let num = [1,2,3,4,5,6]
output need: [ 2, 4, 6, 8, 10,12 ]

let doubleNum = num.map(e => e * 2)
console.log(doubleNum)

let num = [1,2,3,4,5,6]
let expOutput = num.map((e,i)=> e * i
)
console.log(expOutput)
//OutPut [ 0, 2, 6, 12, 20, 30 ]
```

`Task`  A company offered 15% increment in a salary for its employees

```javascript
let salary2080 = [17000, 25000, 35000, 50000]

let salary2081 = salary2080.map(e=> e*.15+e)
console.log(salary2081)

let students = ['Sandip', 'Kushal', 'Tara', 'Ajaya', 'Aram']
let details =  students.sort().map((e, i)=> `Roll no.:${i+1} ${e}`)
console.log(details)


ktm temperature (deg Celius) this week has been

let ktmTempInCel = [17, 10, 3, 5, 23, 10, 12]

// convert this temp to fahrenheit

let output = ktmTempInCel.map(temp => temp *1.8 +32)
console.log(output)
```

## Filter method
This is an array method that is used to filter individual element from an array. This method also returns a new array

`Sysntax:`
```javascript
array.filter((element, index, array)=>{return condition;});
```
In the callback function of this method a condition is intialized and based on the elements are added (filtered) in the new array returned by this method

If the condition is true element is added and if the condition is false the element won't be added.

### Example
```javascript
let number = [10,4,38,403,43,23,76,23,1,4,9,5]

let Odd = number.filter((num)=> num %2 !== 0) //[403, 43, 23, 23, 1,  9,  5]

let evenIndex = number.filter((_, index)=> index %2 === 0) //[ 10, 38, 43, 76, 1, 9 ] 
// if element is not used so we used "_" rather than e or element

console.log(Odd)
console.log(evenIndex)
```

### Example
```javascript
// A survay was done in a community where the monthly salary of the household 

let salaries = [17000, 25000, 35000, 50000, 23000, 45500, 9990, ]

// The gov has defined the minimum salary is 17,500, find out how many people from the survay are getting below average salary

//Example output: Out of 10 people 3 are getting below avg salary

let belowSalary = salaries.filter((salary)=> salary < 17500

)
console.log(`Out of ${salaries.length } people ${belowSalary.length} are getting below avg salary`)
let minimum = salaries.filter(salary => salary < 17500).map(min=> `${min} is ${100 - (min /17500 * 100).toFixed(2)}% below than avg salary`)

console.log(minimum)
```

## Reduce Method -> 
Reduce is the method of that can return any type of value. (Either primitive or non-primitive ). It will reduce all element in an array into a single value.

Unlike map and filter this method has two argument:
1st. -> callback function
2nd. -> Initial value of accumulator

The callback fubction in this method has four parameters
1. accumulator
2. current element
3. index
4. array

```javascript
// Example -> summing all elements in the array
let num =[3,45,23,5,67,23,76,34,34]
let output = num.reduce((sum, num)=> sum + num)
console.log(output)
```

### Task avg salary 
```javascript
let salaries = [17000, 25000, 35000, 50000, 23000, 45500, 9990]
let output = salaries.reduce((sum, num)=> sum + num)/salaries.length
console.log(output)


let salaries = [17000, 25000, 35000, 50000, 23000, 45500, 9990]
let minimum = salaries.reduce((acc, num)=>{num < 17500 && acc.push(`${num} is ${100 - (num /17500 * 100).toFixed(2)}% below than avg salary`)
return acc},[]
)
console.log(minimum)
```

## Task
create a function that takes two parameter, word and letter respectively. The function should return the count letter present in the word

exp output letter count ('apple', 'p') -> 'There are 2 p 's in the word apple
hint Convert word into array

By using split method:

```javascript
//Syntax: 
String.split(separator)
let str = "Hello World"
let arrStr = str.split("")
console.log(arrStr)

// By using split method:
// Array From
let str = "Hello World"
let arrStr = Array.from(str)
console.log(arrStr)


const letterCount =(word, letter)=>{
  // let arrLetters = [...word]
  // let output = arrLetters.reduce((count, letterr) => {
  let output = [...word].reduce((count, letterr) => {
    if((letterr.toLowerCase()) === (letter.toLowerCase())){
    count++
  }
  return count
},0)

return `There ${(output>1 ? `are`:`is`)} ${output} ${letter}${(output>1 ? `'s`:``)} in the word ${word}`
// console.log(`There are ${output}${letter}'s in the word ${word}`)
} 

console.log(letterCount('rmlal', 'a'))
```

## Array Destructing
//It is a way to sequentially assign values from arrays to variable

##### example:
```javascript
let [a,b,c] = [1,2,3]

//Rest Parameters
let [x,y,z, ...others] = [9,8,7,6,5,4,3,2,1] 
```