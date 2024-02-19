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

// console.log(cities.length)//8
