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

getPuzzle((error, puzzle) => {
    if(error) {
        console.log(`Error: ${error}`)
    } else {
    console.log(puzzle)
    }
})



// // country HTTP request
// const countryCode = "MX"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     } else if (e.target.readyState === 4) {
//         console.log("There's an oopsie.")
//     }
// })

// countryRequest.open("GET", "http://restcountries.eu/rest/v2/all")
// countryRequest.send()