// // // Here's an array having object as its elements 

// // const data = [
// //     {id: 1, name: 'Ram'},
// //     {id: 2, name: 'sam'},
// //     {id: 3, name: 'hari'},
// //     {id: 4, name: 'sita'},
// //     {id: 5, name: 'gita'}

// // ]
// // // WAP to create array of objects having odd id
// // // [ { id: 2, name: 'sam' }, { id: 4, name: 'sita' } ]

// // console.log(data.filter((e) => e.id % 2 != 1))

// // const data = [
// //     {id: 1, name: 'yellow shirt', productprice: 900},
// //     {id: 2, name: 'red shirt', productprice: 100},
// //     {id: 3, name: 'green shirt', productprice: 200},
// //     {id: 4, name: 'black shirt', productprice: 400},
// //     {id: 5, name: 'gray shirt', productprice: 300}

// // ]

// // // WAP to create an array of object having productPrice is 200 to 600

// // // console.log(data.filter((e) => e.productprice >=200 && e.productprice <=600 ))

// // console.log(data.map(e => {
// //     return {...e, address: "KTM"}}))

// // console.log(data)


// // woid MISSISSIPPI

// //{M: 1, I: 4, S:4, p:2}


// // const  test = (word) =>{
// // if(word === typeof(String)){
// // let letter = [...word].reduce((acc, curr) =>
// // {
// // if(acc[curr]){
// //     acc[curr]++
// // }else{
// //     acc[curr] =1
// // }
// // return acc
// // },{})
// // return letter
// // }else{
// // return "String Only"}
// // }
// // console.log(test(["aksjdf","askfh",46,35]))




// const students = [   
//     {id: 1, name:'Ram', score:[90,80,70]},
//     {id: 2, name:'Sam', score:[30,88,70]},
//     {id: 3, name:'Hari', score:[90,40,70]},
//     {id: 4, name:'Sita', score:[70,30,70]},
//     {id: 5, name:'Gita', score:[20,70,70]},
//     {id: 6, name:'Parbati', score:[30,80,70]}
// ]
 
// // {Ram: 81.38}

//     let output = students.reduce((acc, student) =>{
//        const AvgScore = student.score.reduce((acc, curr) => acc + curr) /student.score.length
//        acc[student.name] = AvgScore
//        return acc
//     },{})


// console.log(output)

// /*
// {
//   Ram: 80,
//   Sam: 62.666666666666664,
//   Hari: 66.66666666666667,
//   Sita: 56.666666666666664,
//   Gita: 53.333333333333336,
//   Parbati: 60
// } */

let data = [
    {book: "Book1", author: "Author1"},
    {book: "Book2", author: "Author2"},
    {book: "Book3", author: "Author2"},
    {book: "Book4", author: "Author2"},
    {book: "Book5", author: "Author3"},
    {book: "Book6", author: "Author1"}

]


// {Author 1: 2, Author 2: 2}

let output = data.reduce((acc, curr )=>{
    if(acc[curr.author]){
            acc[curr.author]++
        }else{
            acc[curr.author] = 1
        }
        return acc
}, {})

console.log(output)



let outputs = data.reduce((acc, curr)=> {acc[curr.author] ? acc[curr.author]++ : acc[curr.author]=1 
return acc
},{})
console.log(outputs)

let outputss = data.reduce((acc, curr)=> { 
    
    !(acc[curr.author]=1) || acc[curr.author]++
    return acc

},{})
console.log(outputss)
