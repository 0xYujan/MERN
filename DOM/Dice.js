const Dice = document.querySelector("#Dice")
const Random = document.querySelector("#Random")

// let random = 0

Random.addEventListener('click', () =>{
 let random = Math.floor((Math.random() *6)+1)
    Dice.src = `${random}.png`
})