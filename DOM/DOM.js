// DOM - DOM stand for Documnet Object Model, It is a programming interface for HTML and XML. DOM represents the webpage so that the script can change the style, structure, content etc. The DOM represents each elements, text content as well as comments as nodes.

// The DOM represents the structure of a webage in hierarchical (tree-like) structure/model where each elements, attributes , text content in the HTML document is represented as a "Node".


//Accessing the nodes using different DOM Methods:

//Accessing individual node

//1 .getElementById()
const heading = document.getElementById("heading1")
console.log(heading)

//2.  .querySelector() - This method can also access the indivial node. The argument passed in this is similar to CSS selectors as string

const para1 = document.querySelector(".para")
console.log(para1)

//Method accessing multiple nodes

//1.  .getElementsByTagName()

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

//2. .getElementsByClassName()
const para = document.getElementsByClassName("para")
console.log(para)

//3. .querySelectorAll()
const headingg = document.querySelectorAll("h1")
console.log(headingg)


//Accessing the text node

//1. .innerText
console.log(heading.innerText)

//2. .textContent
console.log(heading.textContent)

//3. .innerHTML
console.log(heading.innerHTML)


