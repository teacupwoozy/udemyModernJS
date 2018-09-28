// Request --> What do we want to do?
// Response --> What was actually done?

const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
const try1 = new Hangman("beep beep", 4)

puzzleEl.textContent = try1.puzzle
guessesEl.textContent = try1.statusMessage

window.addEventListener("keypress", function (e) {
    const guess = String.fromCharCode(e.charCode)
    try1.makeGuess(guess)
    puzzleEl.textContent = try1.puzzle
    guessesEl.textContent = try1.statusMessage

})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener("readystatechange", (e) => {
    if(e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
}) 

request.open("GET", "http://puzzle.mead.io/puzzle")
request.send()