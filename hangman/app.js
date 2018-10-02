// Request --> What do we want to do?
// Response --> What was actually done?

const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
const try1 = new Hangman("beep beep", 4)

puzzleEl.textContent = try1.puzzle
guessesEl.textContent = try1.statusMessage

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    try1.makeGuess(guess)
    puzzleEl.textContent = try1.puzzle
    guessesEl.textContent = try1.statusMessage

})

getPuzzle("2").then((puzzle) => {
    console.log(puzzle)
}), (err) => {
    console.log(`Error: ${err}`)
}

// country HTTP request
getCountry("AZ").then((country) => {
    console.log(country.name)
}), (err) => {
    console.log(`Error: ${err}`)
}