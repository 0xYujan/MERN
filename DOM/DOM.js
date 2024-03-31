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

//1. .getElementsByTagName()

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


//Styling the DOM
heading.style.backgroundColor = "aqua";
heading.style.textTransform = "lowercase"

//adding, removing and toggling the classNames

heading.classList.remove("primary-color")
heading2.classList.add("primary-color")


//Changing the txtContent

heading.textContent = "Changinig text using textContent"
heading2.innerText = "Changinig text using InnerText"

//Creating HTML element using DOM method

const headingMadeUsingDOM = document.createElement("h1");
headingMadeUsingDOM.textContent = "I was Created using DOM"
const div2 =document.getElementById("div2");
div2.appendChild(headingMadeUsingDOM)

//Chnaging Attributes using DOM

const input = document.querySelector(".example-inpute")
input.placeholder = "Enter Password"
input.type = "Password"


//Event handling

//There are two ways for it
//1. inline event handlers
const func1 = () => console.log("You have clicked me")

//2. .addEventListener() method

//Type 1. heading2.addEventListener('click', () => console.log("You've clicked me") )

// Type 2. heading2.addEventListener('click', func1)


let paraa = document.querySelector(".para")
paraa.addEventListener('click', ()=>{
    let text = paraa.textContent
    alert(text)
} )
