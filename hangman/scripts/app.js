// Request --> What do we want to do?
// Response --> What was actually done?

const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
let try1

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    try1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ""
    guessesEl.textContent = try1.statusMessage

    try1.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    try1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

// getPuzzle("2").then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })
